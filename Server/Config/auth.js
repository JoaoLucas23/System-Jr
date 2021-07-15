const passport = require('passport');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const User = require('../users/model/User');
const AuthorizationError = require('../errors/AuthorizationError');

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({
          where: {email: email},
        });

        if (!user) {
          throw new AuthorizationError('Email e/ou senha incorretos!');
        }

        const matchingPassword = await bcrypt.compare(password, user.password);

        if (!matchingPassword) {
          throw new AuthorizationError('Email e/ou senha incorretos!');
        }

        return done(null, user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

const cookieExtractor = (req) => {
  let token = null;

  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }

  return token;
};

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_KEY,
      jwtFromRequest: cookieExtractor,
    },
    async (jwtPayLoad, done) => {
      try {
        return done(null, jwtPayLoad.user);
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

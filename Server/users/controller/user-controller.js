const router = require('express').Router();
const {route} = require('../../cars/controller/car-controller');
const UserService = require('../services/UserService');
const {response} = require('express');
const {loginMiddleware,
  notLoggedIn,
  jwtMiddleware,
  checkRole,
} = require('../../middlewares/auth-middlewares');

router.post('/', async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      image: req.body.image,
      phone: req.body.phone,
      role: 'user',
    };

    await UserService.createUser(user);

    res.status(201).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/', jwtMiddleware, async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
});

router.get('/user/:id', jwtMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserService.getUserById(userId);

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put('/user/:id', jwtMiddleware, async (req, res) => {
  try {
    const userId = req.params.id;
    await UserService.updateUser(userId, req.user.id, req.user.role, req.body);

    res.status(204).end();
  } catch (error) {
    res.status(400).send(error.message);
  }
});


router.delete('/user/:id',
  jwtMiddleware, checkRole('admin'),
  async (req, res) => {
    try {
      const userId = req.params.id;
      await UserService.deleteUser(userId, req.user.id);

      res.status(204).end();
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
);

router.post('/login', notLoggedIn, loginMiddleware);

router.get('/logout', jwtMiddleware, (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(204).end();
  } catch (error) {
    console.log(error);
  }
});

router.get('/me', jwtMiddleware, async (req, res) => {
  const user = await UserService.getCurrentUser(req.user.id);

  res.status(200).json(user);
});

module.exports= router;

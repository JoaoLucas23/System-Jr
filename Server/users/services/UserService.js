const User = require('../model/User');
const bcrypt = require('bcrypt');

class UserService {
  async createUser(user) {
    try {
      const saltRounds = 10;
      user.password = await bcrypt.hash(user.password, saltRounds);
      await User.create(user);
    } catch (error) {
      throw error;
    }
  }

  async getAllUsers() {
    return await User.findAll({raw: true, attributes:
      {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
  }

  async getUserById(id) {
    return await User.findByPk(id, {raw: true, attributes:
      {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
  }

  async updateUser(id, reqUserId, reqUserRole, body) {
    const user = await User.findByPk(id);

    const isAdmin = reqUserRole === 'admin';
    const isUpdatedUser = reqUserId == id;

    if (isAdmin || isUpdatedUser) {
      if (!isAdmin && body.role) {
        throw new error(
          'Você não tem permissão para mudar seu papel de usuário');
      }
      await user.update(body);
    } else {
      throw new Error('Você não tem permissão para atualizar esse usuário');
    }
  }

  async deleteUser(id, reqUserId) {
    const user = await User.findByPk(id);

    if (id == reqUserId) {
      throw new Error('Você não tem permissão para se deletar!');
    }
    await user.destroy();
  }
  async getCurrentUser(id) {
    return await User.findByPk(id, {attributes:
      {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    });
  }
}
module.exports = new UserService;

import UserModel from "../schema/users.schema";

class UserService {
  async createUser(user: any) {
    const createdUser = await UserModel.create(user);
    return createdUser;
  }

  async findUserById(id: string) {
    try {
      const foundedUser = await UserModel.findById(id);
      return foundedUser;
    } catch (error) {
      console.error(`Erro ao buscar pelo ID: ${id}, erro: ${error}`);
      return null;
    }
  }

  async findAllUsers() {
    const foundedUsers = await UserModel.find();
    return foundedUsers;
  }

  async updateUser(id: string, user: any) {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        name: user.name,
        weight: user.weight,
      },
      { new: true }
    );

    return updatedUser;
  }

  async deleteUser(id: string) {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    return `Usuário ${deletedUser?.name} deletado com sucesso.`;
  }
}

export default new UserService();

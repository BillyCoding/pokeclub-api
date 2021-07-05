import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import Users from "../models/Users";
import AppError from "../errors/AppError";

interface RequestDTO {
  name: string;
  username: string;
  password: string;
}

interface ResponseDTO {
  id: string;
  name: string;
  username: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
}

class CreateUsersService {
  public async execute({
    name,
    username,
    password,
  }: RequestDTO): Promise<ResponseDTO> {
    const userRepository = getRepository(Users);

    const findSameUsername = await userRepository.findOne({
      where: { username },
    });

    if (findSameUsername) {
      throw new AppError("This Username is already used", 400);
    }

    if (password.length < 6) {
      throw new AppError("Password very small", 400);
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      username,
      password: hashedPassword,
    });

    await userRepository.save(user);

    const { password: hidePassword, ...rest } = user;

    return rest;
  }
}

export default CreateUsersService;

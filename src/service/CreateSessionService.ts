import { compare } from "bcryptjs";
import { getRepository } from "typeorm";
import { sign } from "jsonwebtoken";
import AppError from "../errors/AppError";
import AuthConfig from "../config/auth";
import Users from "../models/Users";

interface RequestDTO {
  username: string;
  password: string;
}

interface UserFormated {
  id: string;
  name: string;
  username: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
}

interface ResponseDTO {
  user: UserFormated;
  token: string;
}

class CreateSessionService {
  public async execute({
    username,
    password,
  }: RequestDTO): Promise<ResponseDTO> {
    const collaboratorRepository = getRepository(Users);
    const user = await collaboratorRepository.findOne({ username });

    if (!user) {
      throw new AppError("Incorrect email/password combination", 400);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Incorrect email/password combination", 401);
    }

    const { expiresIn, secret } = AuthConfig.jwt;

    const token = sign({}, secret, {
      subject: user.id,
      expiresIn,
    });

    const { password: hidePassword, ...rest } = user;

    return { user: rest, token };
  }
}

export default CreateSessionService;

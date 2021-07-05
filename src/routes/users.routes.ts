import { Router } from 'express';
import CreateUsersService from '../service/CreateUsersService';

const userRouter = Router();

userRouter.post('/', async (request, response) => {
  const {
    name,
    username,
    password,
  } = request.body;
  const createUserService = new CreateUsersService();

  const user = await createUserService.execute({
    name,
    password,
    username
  });

  return response.json(user);
});

export default userRouter;

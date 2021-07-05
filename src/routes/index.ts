import { Router } from 'express';
import sessionRouter from './session.routes';
import userRouter from './users.routes';
import pokemonRouter from './pokemon.routes';

const routes = Router();

routes.use('/session', sessionRouter);
routes.use('/user', userRouter);
routes.use('/pokemon', pokemonRouter);

export default routes;

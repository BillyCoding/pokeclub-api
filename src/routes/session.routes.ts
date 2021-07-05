import { Router } from "express";
import CreateSessionService from "../service/CreateSessionService";

const sessionsRouter = Router();

sessionsRouter.post("/", async (request, response) => {
  const { username, password } = request.body;

  const authUser = new CreateSessionService();

  const userSession = await authUser.execute({
    username,
    password,
  });

  return response.json(userSession);
});

export default sessionsRouter;

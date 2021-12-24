import { Router } from "express";
import InitialRoute from "../controller/InitialRoute";

const routes = Router();

routes.get('/', InitialRoute.handle);

export default routes;

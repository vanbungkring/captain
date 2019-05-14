import AppPresenter from "./AppPresenter";
import { Request, Response, NextFunction, Router } from "express";
import Controller from "../Controller.interface";
class AppController implements Controller {
    public path = "/app";
    public presenter: AppPresenter = new AppPresenter();
    public router = Router();
    constructor() {
        this.initializeRouter();
    }
    private initializeRouter() {
        this.router.get(`${this.path}/ping`, this.ping);
        this.router.get(`${this.path}/healthcheck`, this.healthCheck);
    }
    private healthCheck = ({ req, res }: { req: Request; res: Response; }) => {
        res.json("HealthCheck");
    }
    private ping = ({ req, res }: { req: Request, res: Response }) => {
        res.json(this.presenter.ping());
    }
}
export default AppController;
import Controller from "../Controller.interface";
import { Request, Response, NextFunction, Router } from "express";

class MasjidController implements Controller {
    public path = "/masjid";
    public router = Router();
    constructor() {
        this.initializedRouter();
    }
    initializedRouter() {
    }
}
export default MasjidController;
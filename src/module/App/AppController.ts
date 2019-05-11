import AppPresenter from "./AppPresenter";
import { Request, Response, NextFunction } from "express";
class AppController {
    presenter: AppPresenter;
    constructor() {
        this.presenter = new AppPresenter();
    }
    ping() {
        return this.presenter.ping();
    }
}
export default AppController;
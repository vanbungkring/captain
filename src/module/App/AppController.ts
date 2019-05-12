import AppPresenter from "./AppPresenter";
import { Request, Response, NextFunction } from "express";
interface App {
    presenter: AppPresenter;
}
class AppController {
    ping({ req, res }: { req: Request; res: Response; }) {
        const presenter: AppPresenter = new AppPresenter();
        return res.json(presenter.ping());
    }
    healthCheck({ req, res }: { req: Request; res: Response; }) {
        const presenter: AppPresenter = new AppPresenter();
        return res.json(presenter.healthCheck());
    }
}
export default AppController;
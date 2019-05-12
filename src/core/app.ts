import express from "express";
import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import cors from "cors";
import AppController from "../module/App/AppController";
import Validation from "../common/Validation";
import Router from "./Router";

class App {
  public app: express.Application;
  public router: Router = new Router();
  constructor() {
    this.app = express();
    this.config();
    this.router.routes(this.app);
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }
}
export default new App().app;
import express from "express";
import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import cors from "cors";
import AppController from "../module/App/AppController";


class App {
  public app: express.Application;
  public appController: AppController;
  constructor() {
    this.app = express(); // run the express instance and store in app
    this.appController = new AppController();
    this.config();
  }
  private config(): void {
     this.app.use(cors());
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(
      bodyParser.urlencoded({
        extended: false
      })
    );
  }
}
export default new App().app;
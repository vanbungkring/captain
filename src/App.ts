import express from "express";
import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import cors from "cors";
import AppController from "./module/App/AppController";
import Validation from "./common/Validation";
import Controller from "./module/Controller.interface";
class App {
  public app: express.Application;
  constructor(controllers: [Controller]) {
    this.app = express();
    this.initializeControllers(controllers);
    this.config();
  }
  private initializeControllers(controllers: Controller[]) {
    console.log(controllers);
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
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
export default App;
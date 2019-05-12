import AppController from "../module/App/AppController";
import AppPresenter from "../module/App/AppPresenter";
class Router {
    appController: AppController =  new AppController();
    public routes(app: any): void {
      app.get("/app", this.appController.ping);
      app.get("/healthcheck", this.appController.healthCheck);
    }

}
export default Router;
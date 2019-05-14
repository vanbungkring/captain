
import App from "./App";
import AppController from "./module/App/AppController";
const PORT = process.env.PORT || 3000;
const app = new App([
    new AppController()
]).app;
app.listen(PORT, () => {
 // console.log("listening on port " + PORT);
});
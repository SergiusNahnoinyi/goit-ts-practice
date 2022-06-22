import { JsonController, Get } from "routing-controllers";
import { App } from "structure/App";

@JsonController()
export default class userContoller {
  public app = new App();

  @Get("/user/hello")
  async getHello() {
    return "Hello";
  }
}

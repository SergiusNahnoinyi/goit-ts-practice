import { Server } from "./Server";
import { IService } from "../types/services";

export class App implements IService {
  private static instance: App;

  private server: IService = new Server();

  constructor() {
    if (!App.instance) {
      return (App.instance = this);
    }
    App.instance;
  }

  async init() {
    const { server } = this;

    await server.init();
    console.log("App started");
  }
}

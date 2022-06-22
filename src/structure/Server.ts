import { IService } from "../types/services";

export class Server implements IService {
  private static instance: Server;

  constructor() {
    if (!Server.instance) {
      return (Server.instance = this);
    }
    Server.instance;
  }

  init() {
    console.log("Server started");
  }
}

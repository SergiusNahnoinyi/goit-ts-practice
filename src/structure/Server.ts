import "reflect-metadata";
import express from "express";
import { useExpressServer } from "routing-controllers";

import { IService } from "types/services";
import { controllers } from "app/domain";

export class Server implements IService {
  private static instance: Server;

  private routePrefix = "/api";
  public server = express();

  constructor() {
    if (!Server.instance) {
      return (Server.instance = this);
    }
    Server.instance;
  }

  init() {
    const { server, routePrefix } = this;

    useExpressServer(server, {
      routePrefix,
      controllers,
      cors: true,
      defaultErrorHandler: true,
    });

    return new Promise<boolean>((resolve: any) => {
      server.listen(4000, () => {
        console.log("Server started on port 4000");
        return resolve(true);
      });
    });
  }
}

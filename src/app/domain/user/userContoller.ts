import { JsonController, Get, Post, Body, Param } from "routing-controllers";
import { App } from "structure/App";
import userService from "./userService";
import { IUser } from "./User";

@JsonController()
export default class userContoller {
  public app = new App();
  public service = new userService();

  @Get("/user")
  async getAll() {
    return await this.service.getUsers();
  }

  @Get("/user/:id")
  async getOne(@Param("id") id: number) {
    return await this.service.getUserById(id);
  }

  @Post("/user")
  async post(@Body() body: IUser) {
    await this.service.addUser(body);
    return "User added!";
  }
}

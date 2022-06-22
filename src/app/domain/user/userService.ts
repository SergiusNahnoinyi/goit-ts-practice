import { IUser } from "./User";

const storeData: IUser[] = [];

export default class userService {
  async getUsers(): Promise<IUser[]> {
    return storeData;
  }

  async getUserById(id: number): Promise<IUser | null> {
    const user = storeData.find((user) => {
      return user.id === id;
    });
    
    return user || null;
  }

  async addUser(data: IUser): Promise<boolean> {
    storeData.push(data);
    return true;
  }
}

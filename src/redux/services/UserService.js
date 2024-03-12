import { BaseService } from "./BaseService";

class UserService extends BaseService {
  login = (userLogin) => {
    return this.post("users/login", userLogin);
  };
}

export const userService = new UserService();

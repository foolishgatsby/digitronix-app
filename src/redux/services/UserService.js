import { BaseService } from "./BaseService";

class UserService extends BaseService {
  register = (newAccount) => {
    return this.post("users/register", newAccount);
  };

  login = (userLogin) => {
    return this.post("users/login", userLogin);
  };

  getAllUser = () => {
    return this.get("users/all");
  };

  updateUser = (id, role_id) => {
    return this.put(`users/update/${id}`, { role_id });
  };

  setActiveUser = (id, is_active, role_id) => {
    return this.put(`users/update/${id}`, { is_active, role_id });
  };
}

export const userService = new UserService();

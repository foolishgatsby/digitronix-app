import { BaseService } from "./BaseService";

class RoleService extends BaseService {
  getAllRole = () => {
    return this.get("roles");
  };
}

export const roleService = new RoleService();

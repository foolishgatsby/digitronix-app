import { BaseService } from "./BaseService";

class CategoryService extends BaseService {
  getAllCategory = () => {
    return this.get("categories/getAll");
  };
}

export const categoryService = new CategoryService();

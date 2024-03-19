import { BaseService } from "./BaseService";

class ProductService extends BaseService {
  getAllProduct = (page, limit) => {
    return this.get(`products/all?page=${page}&limit=${limit}`);
  };

  searchProduct = (page, limit, keyword, category_id, tag) => {
    return this.get(
      `products/search?page=${page}&limit=${limit}&keyword=${keyword}&category_id=${category_id}&tag=${tag}`
    );
  };

  createProduct = (newProduct) => {
    // console.log("newProduct", newProduct);
    return this.post("products/create/info", newProduct);
  };
}

export const productService = new ProductService();

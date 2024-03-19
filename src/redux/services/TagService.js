import { BaseService } from "./BaseService";

class TagService extends BaseService {
  getAllTag = () => {
    return this.get("tags/all");
  };
}

export const tagService = new TagService();

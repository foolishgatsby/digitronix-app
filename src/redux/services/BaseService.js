import axios from "axios";
import { API_DOMAIN, TOKEN } from "../../utils/constants/settingSystem";

export class BaseService {
  // put method
  put = (url, model) => {
    return axios({
      url: `${API_DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  // post method
  post = (url, model) => {
    return axios({
      url: `${API_DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  // get
  get = (url) => {
    return axios({
      url: `${API_DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };

  // delete
  delete = (url) => {
    return axios({
      url: `${API_DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}

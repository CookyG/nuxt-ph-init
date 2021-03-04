import { User } from "./api.js";

import {
  resultfulGet,
  resultfulPost,
  resultfulPut,
  resultfulDelete,
  post,
  get
} from "@/config/axiosConfig";

export default {
  GetList(params) {
    return post(User.GetList, params);
  }
};

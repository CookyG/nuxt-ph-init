import Vue from "vue";
import axios from "axios";
import qs from "qs";
// import store from "@/store";
import { Message } from "ant-design-vue";

Message.config({
  top: `40%`,
  duration: 1,
  maxCount: 1
});

// 响应时间
axios.defaults.timeout = 30 * 1000;
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
// axios.defaults.headers.common['Authorization'] = '1';

axios.defaults.retry = 1;
axios.defaults.retryDelay = 1000;
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    let _token = window.localStorage.getItem("TOKEN") || null;
    if (_token) {
      config.headers.common["Authorization"] = _token;
    }

    // store.commit("setLoading", true);
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data.message || res.data.Msg) {
      if (res.data.code == 0 || res.data.code == 400) {
        Message.error(res.data.message);
      } else if (res.data.result == 12 || res.data.Result == 12) {
        //登录权限过期，需要重新登录
        removeToken();
      } else if (res.data.Result == 0) {
        Message.error(res.data.Msg);
      } else {
        // Message.success(res.data.message)
      }
    }
    // store.commit("setLoading", false);
    return res;
  },
  error => {
    const config = error.config;

    // store.commit("setLoading", false);
    //是否重复请求
    let replayFlag = false;
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "请求错误";
          break;

        case 401:
          removeToken();
          error.message = "权限丢失,重新获取中";
          break;

        case 403:
          error.message = "拒绝访问";
          break;

        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;

        case 408:
          error.message = "请求超时";
          break;

        case 500:
          error.message = "服务器内部错误";
          break;

        case 501:
          error.message = "服务未实现";
          break;

        case 502:
          error.message = "网关错误";
          break;

        case 503:
          error.message = "服务不可用";
          break;

        case 504:
          replayFlag = true;
          error.message = "网关超时";
          break;

        case 505:
          error.message = "HTTP版本不受支持";
          break;

        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败或超时";
    }
    error.message && Message.error(error.message);

    // 设置和追踪重试次数
    config.__retryCount = config.__retryCount || 0;
    if (replayFlag) {
      if (config.__retryCount < axios.defaults.retry) {
        config.__retryCount += 1;

        const backoff = new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, axios.defaults.retryDelay || 1);
        });

        return backoff.then(function() {
          return axios(config);
        });
      }
    }

    return Promise.reject(error);
  }
);

function removeToken() {
  window.localStorage["yst_logintoken"] = "";
  window.localStorage.removeItem("yst_token");
  window.sessionStorage.removeItem("yst_token");
  location.reload();
}
// 发送请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data);
        },
        err => {
          reject(err.data);
        }
      )
      .catch(err => {
        reject(err.data);
      });
  });
}
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
// 发送请求  resultful风格接口
export function resultfulPost(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data);
        },
        err => {
          reject(err.data);
        }
      )
      .catch(err => {
        reject(err);
      });
  });
}
export function resultfulGet(url, _params, _params2) {
  const params = _params ? `/${_params.join("/")}` : "";
  return new Promise((resolve, reject) => {
    axios
      .get(url + params, {
        params: _params2
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function resultfulPut(url, _params, _params2) {
  const params = _params ? `/${_params.join("/")}` : "";
  return new Promise((resolve, reject) => {
    axios
      .put(url + params, _params2)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function resultfulDelete(url, id) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url + `/${id}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

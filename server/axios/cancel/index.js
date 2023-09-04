const axios = require("axios");

const BASE_URL = 'http://localhost:3001'

axios.interceptors.request.use((config) => config);
axios.interceptors.response.use(
    (data) => data,
    (error) => {
        if (axios.isCancel(error)) {
            return { code: -2 };
        }
        return error;
    }
);


export const axiosPost = async (uri, data = {}, config = {}) => {
    return await axios
        .post(uri, { ...data }, { baseURL: BASE_URL, ...config })
        .catch((e) => e);
};


export const axiosPostWithCancel = async (uri, config = {}) => {
    return await axios
        .post(uri, { ...data }, { baseURL: BASE_URL, ...config })
        .catch((e) => e);
};



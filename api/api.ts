import axios from 'axios';

export const api = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_SERVER}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,'
  }
});

export const spotsAPI = {};

export const postApi = {
  getPosts(pageParam: number, areaSelected: string) {
    return api.get(`/posts?area=${areaSelected}&page=${pageParam}&size=6`);
  },
  getSearchPosts(pageParam: number, areaSelected: string, keyword: string) {
    return api.get(
      `/posts/search?area=${areaSelected}&keyword=${keyword}&page=${pageParam}&size=6`
    );
  }
};

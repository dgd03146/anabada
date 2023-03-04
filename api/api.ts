import { TPost } from './../types/types';
import axios from 'axios';
import { TPosts } from '../types/types';

export const api = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_SERVER}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,'
  }
});

export const spotsAPI = {};

export const postApi = {
  uploadImages(file: FormData) {
    return api.post('/posts/images', file);
  },

  deleteImages(images) {
    return api.delete('/images', images);
  },
  getPosts(pageParam: number, areaSelected: string) {
    return api.get(`/posts?area=${areaSelected}&page=${pageParam}&size=6`);
  },
  getSearchPosts(pageParam: number, areaSelected: string, keyword: string) {
    return api.get(
      `/posts/search?area=${areaSelected}&keyword=${keyword}&page=${pageParam}&size=6`
    );
  },
  getPostDetail(postId: string) {
    return api.get(`/posts/${postId}`);
  },
  getComments(pageParam: number, postId: string) {
    return api.get(`comments/${postId}?page=${pageParam}&size=5`);
  },

  createPost(newPost: TPost) {
    return api.post(`/posts`, newPost);
  },
  updatePost(postId: string, newPost: TPost) {
    return api.put(`/posts/${postId}`, newPost);
  },

  deletePost(postId: string) {
    return api.delete(`/posts/${postId}`);
  },

  postLike(postId: string) {
    return api.post(`/likes/${postId}`);
  },
  deleteLike(postId: string) {
    return api.delete(`/likes/${postId}`);
  }
};

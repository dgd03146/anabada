import { TComment, TUser } from '../lib/types/types';
import { TPost } from '../lib/types/types';
import axios from 'axios';
import { TPosts } from '../lib/types/types';

// TODO:  API별로 관심사 분리하기

export const api = axios.create({
  baseURL: `https://${process.env.REACT_APP_API_SERVER}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,'
  }
});

export const userApi = {
  login(loginData: TUser) {
    return api.post('/login', loginData);
  },
  signup(signupData: TUser) {
    return api.post('/signup', signupData);
  },
  emailValidation(email: string) {
    return api.post(`/validation/email`, {
      email
    });
  },
  nicknameValidation(nickname: string) {
    return api.post(`/validation/nickname`, {
      nickname
    });
  },
  useAccess(token: string) {
    // 유저정보 받아오기
    return api.get(`/info`, {
      headers: {
        Authorization: token
      }
    });
  }
};

export const spotsApi = {};

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

export const commentsApi = {
  getComments(pageParam: number, postId: string) {
    return api.get(`comments/${postId}?page=${pageParam}&size=5`);
  },
  createComment(postId: string, comment: TComment) {
    return api.post(`/comments/${postId}`, comment);
  },
  editComment(commentId: string, comment: TComment) {
    return api.put(`/comments/${commentId}`, comment);
  },
  deleteComment(commentId: string) {
    return api.delete(`/comments/${commentId}`);
  }
};

// 채팅
export const chatApi = {
  createChat(receiver) {
    return api.post(`/rooms?receiver=${receiver}`);
  },
  deleteChat(roomId) {
    return api.delete(`/rooms/${roomId}`);
  },
  getMessages(pageParam, roomId) {
    return api.get(`messages/${roomId}?page=${pageParam}&size=20`);
  },
  getAllRooms(pageParam) {
    return api.get(`/rooms?page=${pageParam}&size=10`);
  }
};

// 마이페이지
export const myApi = {
  getMyPosts(filter, pageParam) {
    return api.get(`myposts?filter=${filter}&page=${pageParam}&size=6`);
  },
  getMyMeets(filter, pageParam) {
    return api.get(`mymeets?filter=${filter}&page=${pageParam}&size=6`);
  },
  uploadProfile(profileImg) {
    return api.put('/profileimages', profileImg);
  }
};

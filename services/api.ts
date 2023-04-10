import { TLogin, TSignup, TMeet } from './../lib/types/types';
import { TComment, TUser } from '../lib/types/types';
import { TPost } from '../lib/types/types';
import axios, { AxiosRequestHeaders } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { QueryKeys } from '../quries/key';
import { AxiosRequestConfig } from 'axios';
import { Cookies } from 'react-cookie';
// TODO:  API별로 관심사 분리하기

interface RequestConfig extends AxiosRequestConfig<any> {
  headers?: AxiosRequestHeaders;
}

const queryClient = new QueryClient();

export const SOCKET_SERVER_URL = `https://${process.env.NEXT_PUBLIC_API_SERVER}/socket`;

export const api = axios.create({
  baseURL: `https://${process.env.NEXT_PUBLIC_API_SERVER}/api`,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,'
  }
});

api.interceptors.request.use((config: RequestConfig) => {
  const accessToken = queryClient.getQueryData<string | null>([QueryKeys.user]);

  if (config.headers && accessToken) {
    config.headers['Authorization'] = accessToken;
  }

  return config;
});

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const {
      config,
      response: { status }
    } = err;
    // 토큰 만료됐을 때 status
    if (status === 500) {
      // userAxios를 쓰는 경우인데 리프레시 토큰 조차 없는 경우
      const cookies = new Cookies();
      if (cookies.get('refreshToken')) {
        return err;
      }

      // 이전 작업에 대한 config저장
      const originalReq = config;
      // Bearer제거 작업
      const getRefresh = cookies.get('refreshToken').split(' ')[1];
      const accessToken = queryClient.getQueryData<string | null>([
        QueryKeys.user
      ]);
      const getAccess = accessToken && accessToken.split('')[1];

      // refresh요청
      const response = await api.post(
        '/reissue',
        {},
        {
          headers: {
            AccessToken: getAccess as string,
            RefreshToken: getRefresh
          }
        }
      );
      const newAccess = response.headers.authorization;
      queryClient.setQueryData<string | null>([QueryKeys.user], newAccess);

      // 새로 발급 받은 토큰으로 config 변경
      originalReq.headers.Authorization = newAccess;
      return axios(originalReq);
    }
    return err;
  }
);

export const userApi = {
  login(loginData: TLogin) {
    return api.post<TUser>('users/login', loginData);
  },
  signup(signupData: TSignup) {
    return api.post('users/signup', signupData);
  },
  emailValidation(email?: string) {
    return api.post(`users/validation/email`, {
      email
    });
  },
  nicknameValidation(nickname?: string) {
    return api.post(`users/validation/nickname`, {
      nickname
    });
  },

  getUser() {
    return api.get<TUser>(`users/info`);
  }
};

export const spotsApi = {
  getSpots() {
    return api.get('/beach');
  }
};

export const postApi = {
  uploadImages(file: FormData) {
    return api.post('/posts/images', file);
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
    return api.get(`/comments/${postId}?page=${pageParam}&size=5`);
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

export const notificationsApi = {
  getNotifications(pageParam: number) {
    return api.patch(`/notifications?page=${pageParam}&size=10`);
  },
  deleteAllNotifications() {
    return api.delete('/notifications');
  },
  deleteNotification(notifiactionId: string) {
    return api.delete(`/notifications/${notifiactionId}`);
  },
  checkNotifications(options?: { Authorization: string }) {
    return api.get('/notifications', {
      headers: options
    });
  },
  readNotification(notificationId: string) {
    return api.put(`notifications/${notificationId}`);
  },
  topicUrl(userId: string) {
    return `/topic/notification/${userId}`;
  }
};

export const meetsApi = {
  getPopularMeets: (area: string) => api.get(`/meets/hot?area=${area}`),

  getMeets: (pageParam: number, area: string) =>
    api.get(`/meets?area=${area}&page=${pageParam}&size=5`),

  getSearchMeets: (pageParam: number, area: string, keyword: string) =>
    api.get(
      `/meets/search?area=${area}&keyword=${keyword}&page=${pageParam}&size=10`
    ),

  createMeetPost: (meet: TMeet) => api.post('/meets', meet),

  editMeetPost: (thunderPostId: string, meet: TMeet) =>
    api.put(`/meets/${thunderPostId}`, meet),

  deleteMeetPost: (thunderPostId: string) =>
    api.delete(`/meets/${thunderPostId}`),

  getMeetDetail: (thunderPostId: string) => api.get(`/meets/${thunderPostId}`),
  meetLike: (thunderPostId: string) => api.post(`/meetlikes/${thunderPostId}`),
  deleteMeetLike: (thunderPostId: string) =>
    api.delete(`/meetlikes/${thunderPostId}`),

  meetRequest: (thunderPostId: string) =>
    api.post(`/requests/${thunderPostId}
  `),

  deleteMeetRequest: (thunderPostId: string) =>
    api.delete(`/requests/${thunderPostId}`)
};

// 채팅
export const chatApi = {
  createChat(receiver: string) {
    return api.post(`/rooms?receiver=${receiver}`);
  },
  deleteChat(roomId: string) {
    return api.delete(`/rooms/${roomId}`);
  },
  getMessages(pageParam: number, roomId: string) {
    return api.get(`messages/${roomId}?page=${pageParam}&size=20`);
  },
  getAllRooms(pageParam: number) {
    return api.get(`/rooms?page=${pageParam}&size=10`);
  }
};

// 마이페이지
export const myApi = {
  getMyPosts(filter: string, pageParam: number) {
    return api.get(`myposts?filter=${filter}&page=${pageParam}&size=6`);
  },
  getMyMeets(filter: string, pageParam: number) {
    return api.get(`mymeets?filter=${filter}&page=${pageParam}&size=6`);
  },
  uploadProfile(updatedProfileImg: { profileImg?: string }) {
    return api.put('/profileimages', updatedProfileImg);
  }
};

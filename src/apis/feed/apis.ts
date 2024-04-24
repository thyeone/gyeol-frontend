import http from '../config/instance';

export const feedApi = {
  getFeedList: async (query: string) => {
    return await http.get<FeedResponse[]>(`/feeds${query}`);
  },

  getFeed: async (id: number) => {
    return await http.get<FeedResponse>(`/feeds/${id}`);
  },
};

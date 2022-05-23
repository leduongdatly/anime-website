import axiosClient from './axiosClient';

const animeApi = {
  getAll: (params) => {
    const url = '/v1/anime';
    return axiosClient.get(url, { params });
  },

  getByName: (title) => {
    const url = `/v1/anime?title=${encodeURIComponent(title)}`;
    return axiosClient.get(url);
  },

  getById: (id) => {
    const url = `/v1/anime/${id}`;
    return axiosClient.get(url);
  },

  getByYear: (year) => {
    const url = `/v1/anime?year=${year}&nsfw=false&with_episodes=false`;
    return axiosClient.get(url);
  },

  getbyFilter: (params, status = false, year = false, season = false, genres = []) => {
    const url =
      `/v1/anime?status=${status}` +
      // `${status ? `&status=${status}` : ''}` +
      `${year ? `&year=${year}` : ''}` +
      `${season ? `&season=${season}` : ''}` +
      `${genres.length > 0 ? `&genres=${genres}` : ''}` +
      `&nsfw=false&with_episodes=false`;
    return axiosClient.get(url, { params });
  },

  getGenres: () => {
    const url = '/v1/resources/1.0/0';
    return axiosClient.get(url);
  },
};

export default animeApi;

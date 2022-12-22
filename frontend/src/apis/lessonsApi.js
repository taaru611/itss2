// http://localhost:8000/apis/word/pack?packInfo={"level":"-1","topics":[]}
import axiosClient from './axiosClient';

const URL = '/lessons';

// Day la Api lay ra word theo param page, perPage, packInfo chuyen vao // to chua viet
const lessonsApi = {
  // correct word game
  getWordPackCWG: (
    level = '-1',
    topics = [],
    page = 1,
    perPage = 20,
    packInfo = { level: '-1', topics: [] },
  ) => {
    return axiosClient.get(`/word/pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo) },
    });
  },
  // get word, type, phonetic, mean
  // getWordList: (page = 1, perPage = 20, packInfo, sortType = 'rand') => {
  //   return axiosClient.get(`${URL}/pack`, {
  //     params: { page, perPage, packInfo: JSON.stringify(packInfo), sortType },
  //   });
  // },
  getWordList: (
    level = '-1',
    topics = [],
    page = 1,
    perPage = 20,
    packInfo = { level: '-1', topics: [] },
  ) => {
    return axiosClient.get(`/word/pack`, {
      params: { page, perPage, packInfo: JSON.stringify(packInfo) },
    });
  },
};

export default lessonsApi;

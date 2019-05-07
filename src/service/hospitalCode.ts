import { AxiosPromise } from 'axios';
import { post } from '../util/request';
import baseURL from './baseURL';

export let getHospitalDetail = (hospitalName: string): AxiosPromise<any> => {
  let url = baseURL + '/hospital';
  return post(url, { hospitalName }).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      res.data.data[i].key = i;
    }
    return res.data.data;
  });
};

export let getAllHospitalDetail = (currentPage: number, pageSize: number): AxiosPromise<any> => {
  let url = baseURL + '/hospital/all';
  return post(url, { currentPage, pageSize }).then((res) => {
    for (let i = 0; i < res.data.data.length; i++) {
      res.data.data[i].key = i;
    }
    return res.data;
  });
};

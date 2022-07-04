// @ts-ignore
/* eslint-disable */
import { getToken } from '@/utils/authority';
import request from 'umi-request';

request.interceptors.request.use((url, options) => {
  const authHeader = { Authorization: `Bearer ${getToken()}` };
  return {
    url: url,
    options: { ...options, interceptors: true, headers: authHeader },
  };
});

/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.UserResult>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取申请列表 GET /api/candidate */
export async function candidate(
  params: {
    // query
    /** 当前的页码 */
    page?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.CandidateListResult>('/api/candidate', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 获取申请列表 GET /api/candidate/export */
export async function exportCandidates(options?: { [key: string]: any }) {
  return request('/api/candidate/export', {
    method: 'GET',
    // add by Berlin 2022/7/4
    responseType: 'blob',
    ...(options || {}),
  });
}

// @ts-ignore
/* eslint-disable */

declare namespace API {
  type LoginResult = {
    status?: string;
    msg?: string;
    token?: string;
    currentAuthority?: string;
  };

  type UserResult = {
    success?: boolean;
    message?: string;
    data?: User;
    list?: {
      count?: number;
      items?: User[];
    };
  };

  type Club = {
    id?: number;
    name?: string;
  };

  type User = {
    id?: number;
    username?: string;
    permission?: Club;
    sa?: boolean;
  };

  type Department = {
    id?: number;
    name?: string;
    club?: Club;
  };

  type Candidate = {
    id?: number;
    name?: string;
    studentId?: string;
    club?: Club;
    phone?: string;
    qq?: string;
    conselor?: string;
    firstChoice?: Department;
    secondChoice?: Department;
    reason?: string;
  };

  type CandidateListResult = {
    success?: boolean;
    message?: string;
    data?: Candidate[];
    total?: number;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type LoginParams = {
    username?: string;
    password?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };
}

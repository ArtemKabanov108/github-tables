import { createSlice } from "@reduxjs/toolkit";

import { RequestStatus, RequestStatusType } from "../types";
import notify from "../../components/common/notify/Notify";

import { getUser, getUserRepos } from "./actions";

export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null | string;
  blog: string;
  location: null | string;
  email: null | string;
  hireable: any;
  bio: string;
  twitter_username: null | string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: Date;
}

export interface IRepo {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
  forks_count: number;
}

interface IUsers {
  users: Array<IUser>;
  repos: Array<IRepo>;
  searchedRepos: Array<IRepo>;
  status: RequestStatusType;
}

export const initialState: IUsers = {
  users: [],
  repos: [],
  searchedRepos: [],
  status: RequestStatus.idle,
};

const uniqUser = (users: IUser[], data: IUser) => {
  if (users.find((user) => user.login === data.login)){
    notify("error", "User was added");
    return users;
  }

  return [...users, data]
}

export const searchUserFromGit = createSlice({
  name: "searchUserFromGit",
  initialState,
  reducers: {
    clearRepos: (state) => {
      state.repos = [];
    },
    searchByNameRepo: (state, action) => {
      state.searchedRepos = state.repos
      .filter((repo: IRepo) => repo.name
      .toLowerCase()
      .includes(action.payload.toLowerCase()));
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = RequestStatus.pending;
    });
    builder.addCase(getUser.fulfilled, (state, action) => { 
      state.users = uniqUser(state.users, action.payload.data)
      state.status = RequestStatus.fulfilled;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.status = RequestStatus.rejected;
      notify("error", "User not found");
    });

    builder.addCase(getUserRepos.pending, (state) => {
      state.status = RequestStatus.pending;
    });
    builder.addCase(getUserRepos.fulfilled, (state, action) => {
      state.status = RequestStatus.fulfilled;
      let filtratedRepoData = action.payload.data.map(
        ({ id, name, stargazers_count, forks_count, html_url }: IRepo) => ({
          id, name, stargazers_count, forks_count, html_url
        })
      );

      state.repos = filtratedRepoData;
    });
    builder.addCase(getUserRepos.rejected, (state) => {
      state.status = RequestStatus.rejected;
      notify("error", "Repos not found");
    });
  },
});

export const { clearRepos, searchByNameRepo } = searchUserFromGit.actions;

const createCourseReducer = searchUserFromGit.reducer;

export default createCourseReducer;

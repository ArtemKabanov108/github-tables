import { createSlice } from '@reduxjs/toolkit';

import { RequestStatus, RequestStatusType } from '../types';
import notify from '../../components/common/notify/Notify';

import { getUser } from './actions';

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
    type: string,
    site_admin: boolean,
    name: string;
    company: null | string,
    blog: string;
    location: null | string,
    email: null | string,
    hireable: any,
    bio: "🍔",
    twitter_username: null | string,
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}

interface IUsers {
  users: Array<IUser>;
  status: RequestStatusType;
}

export const initialState: IUsers = {
  users: [],
  status: RequestStatus.idle,
};

export const createCourseSlice = createSlice({
  name: 'createCourse',
  initialState,
  reducers: {
    clearCourseData: (state) => {
      state.users = initialState.users;
    },
  },
  extraReducers: (builder) => {

    builder.addCase(getUser.pending, (state) => {
      state.status = RequestStatus.pending;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = RequestStatus.fulfilled;
      state.users = [...state.users, action.payload.data];
    });
    builder.addCase(getUser.rejected, (state) => {      
      state.status = RequestStatus.rejected;
      notify('error', 'User not found')
    });

  },
});

export const {
  clearCourseData,
} = createCourseSlice.actions;

const createCourseReducer = createCourseSlice.reducer;

export default createCourseReducer;

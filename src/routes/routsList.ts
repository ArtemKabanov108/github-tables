import {Home} from "../pages/home/home";
import {User} from "../pages/user/user";
import { IRout } from "./routConstants";

export const routList: Array<IRout> = [
  {
    path: '/',
    component: Home,
    textPayload: 'Home',
    id: 1,
  },
  {
    path: '/user/',
    component: User,
    textPayload: 'Skills',
    id: 8,
  },
]
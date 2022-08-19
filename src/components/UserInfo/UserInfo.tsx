import { FC } from "react";
import { Paper } from "@mui/material";
import { IRepo, IUser } from "../../store/github";
import { CommonCard } from "../common/Card/Card";
import { RepoTable } from "../RepoTable/RepoTable";
import { InfoTable } from "../TableInfo/TableInfo";
import { Search } from "../common/Search/Search";
import styles from "./styles.module.scss";

interface IGitHubUser {
  user: IUser;
  userRepo: IRepo[];
}

export interface filtratedFieldsUser {
  [name: string]: string | number | null;
}

export const UserInfo: FC<IGitHubUser> = ({ user, userRepo }) => {
  const descriptionChoice = (bio: string) => (bio ? bio : "I haven`t got bio.");

  const filtratedFieldsUser: filtratedFieldsUser[] = [
    { name: user.name },
    { followers: user.followers },
    { email: user.email },
    { location: user.location },
    { created_at: user.created_at },
  ];

  return (
    <Paper className={styles.Paper} elevation={3}>
      <section className={styles.infobox}>
        <CommonCard
          title={"Bio"}
          description={descriptionChoice(user.bio)}
          imageProp={user.avatar_url}
        />
        <InfoTable info={filtratedFieldsUser} />
      </section>

      <RepoTable
        children={<Search label="the repo search" userOrFork={false} />}
        repos={userRepo}
        title={"Search the repo"}
      />
    </Paper>
  );
};

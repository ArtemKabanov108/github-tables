import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { getLocalStorage, setLocalStorage } from "../../helpers/localStorage";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getUser, getUserRepos } from "../../store/github/actions";
import { RequestStatus } from "../../store/types";

export const User: FC = () => {
  const dispatch = useAppDispatch();
  const { users, repos, searchedRepos, status } = useAppSelector(
    (state) => state.github
  );

  const { userId } = useParams();

  const filtratedUser = users.find((user) => user.id === Number(userId));

  useEffect(() => {
    if (filtratedUser) {
      dispatch(getUserRepos(filtratedUser?.repos_url));
      setLocalStorage(filtratedUser.login, "userLogin");
    }
    if (!filtratedUser) {
      dispatch(getUser(getLocalStorage("userLogin")));
    }
  }, [filtratedUser]);

  const condition = searchedRepos.length ? searchedRepos : repos;

  return (
    <main>
      {filtratedUser && (
        <UserInfo
          user={filtratedUser}
          userRepo={status === RequestStatus.fulfilled ? condition : []}
        />
      )}
    </main>
  );
};

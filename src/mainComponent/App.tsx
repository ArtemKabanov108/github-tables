import { FC } from "react";
import styles from "./styles.module.scss";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/home/home";
import { User } from "../pages/user/user";

export const App: FC = () => {
  const mainRoutes = {
    path: '/',
    element: <Home />,
  };

  const userRoutes = {
    path: ':userId',
    element: <User />,
  };

  const routing = useRoutes([mainRoutes, userRoutes]);

  return( 
  <main className={styles['page-wrapper']}>
    <h1>Github Searcher</h1>
    {routing}
    </main>
  );
};

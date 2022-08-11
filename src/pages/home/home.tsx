import { FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { Search } from '../../components/common/Search/Search'
import { UsersTable } from '../../components/Table/Table'
import { useAppSelector } from '../../hooks/hooks'
import styles from './home.module.scss'

export const Home: FC = () => {

  const { users } = useAppSelector((state) => state.github )

  return (
    <main className={styles['main-container']}>
        <UsersTable rows={users}>
            <Search />
        </UsersTable>
        <ToastContainer />
    </main>
  )
}

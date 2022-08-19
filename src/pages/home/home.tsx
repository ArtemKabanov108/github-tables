import { FC, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { Search } from '../../components/common/Search/Search'
import { UsersTable } from '../../components/Table/Table'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { clearRepos } from '../../store/github'

export const Home: FC = () => {
  const dispatch = useAppDispatch();

  const { users, repos } = useAppSelector((state) => state.github )

  useEffect(() => {
    if(repos) {
      dispatch(clearRepos())
    }
  }, [users])

  return (
    <main>
        <UsersTable rows={users} title="Search a user by name">
            <Search label="Search for Users" userOrFork={true} />
        </UsersTable>
        <ToastContainer />
    </main>
  )
}

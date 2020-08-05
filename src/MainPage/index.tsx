import React, { useState } from 'react'
import './MainPage.sass'
import TressBackground from '../Background/tressbackground'
import Loader from '../Loader'
import MainCard from '../MainCard'
import RepositoriesTable from '../RepositoriesTable'

const MainPage = () => {
  const [username, setUsername] = useState<string>('')
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState<Boolean>(false)

  const getStarredRepositories = () => {}

  return (
    <div>
      <TressBackground />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {!repositories.length ? (
            <MainCard
              username={username}
              setUsername={setUsername}
              getStarredRepositories={getStarredRepositories}
            />
          ) : (
            <RepositoriesTable />
          )}
        </div>
      )}
    </div>
  )
}
export default MainPage

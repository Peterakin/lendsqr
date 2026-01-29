import './Home.scss'
import Header from '../../components/Header/Header'
import Sidebar from "../../components/Sidebar/Sidebar"
import UsersPage from '../../pages/Users/UsersPage'
import UsersDetails from '../Users/UsersDetails'

const Home = () => {

  return (
    <>
      <Header />
      <div style={{ display: "flex", background: "#f9fafb" }}>
        <Sidebar />
        <main style={{ flex: "1", padding: "2rem" }}>
          {/* <UsersPage /> */}
          <UsersDetails />
        </main>
      </div>
    </>
  )
}

export default Home;
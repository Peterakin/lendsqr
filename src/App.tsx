import './App.scss'
import Header from './components/Header/Header'
import Sidebar from "./components/Sidebar/Sidebar"

const App = () => {

  return (
    <>
    <Header/>
    <div style={{display: "flex"}}>
      <Sidebar />
      <main style={{flex: "1",padding: "2rem"}}>
        <h1>Welcome to my dashboard </h1>
      </main>
      </div>
      </>
  )
}

export default App

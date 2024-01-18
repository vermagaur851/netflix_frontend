import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Features from "../../components/featured/Features"
import List from "../../components/list/List"

function Home() {
  return (
    <div className="home">
       <Navbar/>
       <Features type='movie'/>
       <List/>
       <List/>
       <List/>
       <List/>
       <List/>
       <List/>
       <List/>
    </div>
  )
}

export default Home

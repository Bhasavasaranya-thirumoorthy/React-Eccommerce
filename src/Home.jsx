import React,{} from "react"
import About from "./About"
import { Link } from "react-router-dom"
// import styles from "./Home.module.css"
import Fetchproducts from "./Fetchproducts"

// import { UserContext } from "./App"

function Home() {
   
    return (
        <div>
            {/* <h1 style={{color:"white"}}>Welcome to home page!</h1>
              <Link to="/about">Go to About page </Link>
            <p>This is simple react compound</p> */}
            <Fetchproducts />
        </div>

    )
}

export default Home
// rrd imports
import { Outlet } from "react-router-dom"

// sections
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App
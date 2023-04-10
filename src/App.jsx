import { Route, Routes} from "react-router-dom"
import Sidebar from "./components/sidebar/Sidebar.jsx"
import Login from "./pages/auth/login/Login.jsx"
function App() {
 
  return (
    <>
<Sidebar/>
<Routes>
  <Route path="/" element={<Login/>}/>
</Routes>
    </>
    )
}

export default App

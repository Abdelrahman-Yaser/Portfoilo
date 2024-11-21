import { Outlet } from "react-router-dom";
import { Navbar } from "./pages/Navbar";
// import { Project } from "./pages/Projects/Project";

function App() {

  return (
<>

<div 
className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white   ">
<Navbar/>

<Outlet />
</div>
</>
  )
}
export default App;

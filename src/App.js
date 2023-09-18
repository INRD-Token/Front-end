import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Apps from './Pages/App.js';
import Aboutus from './Pages/Aboutus.js';
import Home from './Pages/Home.js'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/app",
      element: <Apps/>,
    },
    {
      path: "/about",
      element: <Aboutus/>,
    },
  ]);
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

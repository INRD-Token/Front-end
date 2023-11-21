import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import INRD from "./Pages/App";
import Partners from "./Pages/Partners";
import Working from "./Pages/Working";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/app",
      element: <INRD/>,
    },
    {
      path: "/partner",
      element: <Partners/>,
    },
    {
      path: "/work",
      element: <Working/>,
    },
  ]);
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;

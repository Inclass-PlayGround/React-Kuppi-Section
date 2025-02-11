import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Customer from "./page/Customer/Customer";
import DashBoard from "./page/DashBoard";
import Order from "./page/Order";
import RootLayout from "./Components/RootLayout";

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path:"/",element:<DashBoard/>,
  //   },
  //   {
  //     path:"/customer",element:<Customer/>,
  //   },
  //   {
  //     path:"/order",element:<Order/>,
  //   }
  // ]);

  const router = createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>, //navBar
      children:[{
        path:"/",element:<DashBoard/>,
      },
      {
        path:"/customer",element:<Customer/>,
      },
      {
        path:"/order",element:<Order/>,
      }
      ]
    }
  ]);


 

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;

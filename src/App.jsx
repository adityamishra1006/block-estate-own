import HomePage from './routes/homePage/homePage'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ListPage from "./routes/listPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/singlePage";


function App() {

  const  router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
      ]
    },
    
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import Error from './components/ui/Error';
import Home from './components/Home';
import Headphones from './components/Headphones';
import { loader as itemLoader } from './components/ProductContent';
import Speakers from './components/Speakers';
import Earphones from './components/Earphones';

const router = createBrowserRouter([
  {

    errorElement:<Error/>,

    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: '/headphones',
        element: <Headphones />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      {
        path: '/speakers',
        element: <Speakers />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      {
        path: '/earphones',
        element: <Earphones />,
        loader: itemLoader,
        errorElement: <Error />,
      },
      // { path: '/cart', element: <Cart /> },
      // {
      //   path: '/order/new',
      //   element: <CreateOrder />,
      //   action: createOrderAction,
      // },
      // {
      //   path: '/order/:orderId',
      //   element: <Order />,
      //   loader: orderLoader,
      //   errorElement: <Error />,
      //   action: updateOrderAction,
      // },

    ]
  }
])






function App(){
  return(
  <div className=''>

    <RouterProvider router={router}/>
  </div>)

}

export default App

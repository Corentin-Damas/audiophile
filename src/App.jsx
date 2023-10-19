import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/ui/AppLayout';
import Error from './components/ui/Error';
import Home from './components/Home';
import Headphones from './components/Headphones';

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

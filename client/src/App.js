import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import ErrorPage from './components/ErrorPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:4000'),
      router = createBrowserRouter([
          {
              path: '/',
              element: <Home socket={socket} />,
              errorElement: <ErrorPage/>,
          },
          {
              path: '/sign-up',
              element: <SignUp socket={socket} />,
              errorElement: <ErrorPage/>
          }
      ]);

export default function App() {
    return (
        <StrictMode>
            <RouterProvider router={router}/>
        </StrictMode>
    )
}
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Instructions from './components/Instructions';
import Activity from './components/Activity';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Result from './components/Result';

function App() {
  // Create the routes for the application
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Intro1 />, // Render Intro1 component when the path is "/"
    },
    {
      path: '/intro2',
      element: <Intro2 />, // Render Intro2 component when the path is "/intro2"
    },
    {
      path: '/intro3',
      element: <Intro3 />, // Render Intro3 component when the path is "/intro3"
    },
    {
      path: '/instructions',
      element: <Instructions />, // Render Instructions component when the path is "/instructions"
    },
    {
      path: '/activity',
      element: <Activity />, // Render Activity component when the path is "/activity"
    },
    {
      path: '/result',
      element: <Result />, // Render Result component when the path is "/result"
    },
  ]);

  return (
    // Provide the Redux store to the entire application
    <Provider store={store}>
      <div className="App">
        {/* Background image for the entire application */}
        <img className="backgroundImg" src="/bg1.png" alt="" />
        {/* Provide the routing functionality to the application */}
        <RouterProvider router={routes} />
      </div>
    </Provider>
  );
}

export default App;

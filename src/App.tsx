import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Intro1 from './components/pages/Intro1';
import Intro2 from './components/pages/Intro2';
import Intro3 from './components/pages/Intro3';
import Instructions from './components/pages/Instructions';
import Activity from './components/pages/Activity';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Result from './components/pages/Result';

// Main App component
function App() {
  // Create the routes for the application
  const routes = createBrowserRouter([
    { path: '/', element: <Intro1 /> },
    { path: '/intro2', element: <Intro2 /> },
    { path: '/intro3', element: <Intro3 /> },
    { path: '/instructions', element: <Instructions /> },
    { path: '/activity', element: <Activity /> },
    { path: '/result', element: <Result /> },
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

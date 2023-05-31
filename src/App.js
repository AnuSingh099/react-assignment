import Dashboard from './pages/dashboard/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignInComponent from './pages/signin/SignIn';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInComponent />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>)
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";

const Body = () => {
  // setup our app routing
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  // update user redux store whenerver the user sign in ,sign up and sign out than this will updated using firebase 

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

import { Suspense, lazy, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import axios from "axios";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MovieShimmer from "./shimmers/MovieShimmer";
function App() {
  const [count, setCount] = useState(0);

  const AllMovies = lazy(() => {
    return import("./pages/AllMovies");
  });

  const Details = lazy(() => {
    return import("./pages/Details");
  });
  const GenreWise = lazy(() => {
    return import("./pages/GenreWise");
  });

  const PersonDetails = lazy(() => {
    return import("./pages/PersonDetails");
  });
  const AppLayout = () => {
    return (
      <>
        <Navbar />
        <div className="mt-20">
          <Suspense fallback={<MovieShimmer />}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: (
            <Suspense fallback={<MovieShimmer />}>
              <AllMovies />
            </Suspense>
          ),
        },
        {
          path: "/movie/:id",
          element: (
            <Suspense fallback={<MovieShimmer />}>
              <Details />
            </Suspense>
          ),
        },
        {
          path: "/movie/genre/:id",
          element: <GenreWise />,
        },
        {
          path: "/people/:id",
          element: <PersonDetails />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

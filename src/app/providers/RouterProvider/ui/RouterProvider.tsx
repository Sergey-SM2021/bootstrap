import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouterConfig } from "shared/config/routerConfig/RouterConfig";

export const RouterProvider = () => {
  return (
    <Suspense>
      <Routes>
        {Object.values(RouterConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

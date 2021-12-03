import React, { ReactElement, ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function RoutesApp(): ReactElement {

  const handleRoutes = (): ReactNode => {
    return (
      routes.map(route => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))
    );
  }

  return (
    <BrowserRouter>
      <React.Suspense fallback={'loading..'}>
        <Routes>
          {handleRoutes()}
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export { RoutesApp };

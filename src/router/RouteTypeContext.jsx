import React, { createContext, useContext, useState } from "react";

// Create a context for the route type
const RouteTypeContext = createContext();

export const useRouteType = () => useContext(RouteTypeContext);

const RouteTypeProvider = ({ children }) => {
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <RouteTypeContext.Provider value={{ isPrivate, setIsPrivate }}>
      {children}
    </RouteTypeContext.Provider>
  );
};

export default RouteTypeProvider;
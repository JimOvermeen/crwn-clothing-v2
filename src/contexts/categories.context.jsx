import { useState, useEffect } from "react";
import { createContext } from "react";

import { getCatergoriesAndDocuments } from "../utils/firebase.utils.js";

export const CategoriesContext = createContext({
  catergoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [catergoriesMap, setCatergoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCatergoriesAndDocuments();
      console.log(categoryMap);
      setCatergoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { catergoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

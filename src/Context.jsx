import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [pageId, setPageId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => {
    setIsSidebarOpen(true);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{ pageId, setPageId, isSidebarOpen, showSidebar, hideSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

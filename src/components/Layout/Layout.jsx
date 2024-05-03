/* eslint-disable react/prop-types */

import { useTheme } from "../../context/Context";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children, pageTitle }) => {
  const { initialTheme } = useTheme();

  return (
    <>
      <div className={`layout ${initialTheme}`}>
        <Navbar />
        <div className="container">
          {pageTitle && <h1 className={`heading ${initialTheme}`}>{pageTitle}</h1>}
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;

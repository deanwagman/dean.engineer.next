import { Navigation } from "../components/Nav";

import { centerLayout, mainColumn } from "./styles/Layouts.module.css";

export const CenterLayout = ({ children }) => {
  return (
    <div className={centerLayout}>
      <Navigation />
      <div className={mainColumn}>{children}</div>
    </div>
  );
};

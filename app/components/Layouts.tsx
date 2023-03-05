import { Navigation } from "../components/Nav";

import { centerLayout, mainColumn } from "./styles/layouts.module.css";

export const CenterLayout = ({ children }) => {
  return (
    <div className={centerLayout}>
      <Navigation />
      <div className={mainColumn}>{children}</div>
    </div>
  );
};

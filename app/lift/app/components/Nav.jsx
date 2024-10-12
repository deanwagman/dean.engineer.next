import Stack from "@mui/material/Stack";

import { Link } from "react-router-dom";

const Nav = ({ links = [] }) => {
  return (
    <Stack direction="row" spacing={2}>
      {links.map((link) => (
        <Link to={link.href} key={link}>
          {link.text}
        </Link>
      ))}
    </Stack>
  );
};

export default Nav;

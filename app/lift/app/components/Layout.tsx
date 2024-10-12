import Container from "@mui/material/Container";

const Layout = ({ children }: { children: any }) => {
  return <Container maxWidth={false}>{children}</Container>;
};

export default Layout;

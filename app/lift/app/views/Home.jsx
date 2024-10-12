import Container from "@mui/material/Container";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

const homeStyle = {
  color: "red",
  backgroundColor: "blue",
};

const navLinks = [
  { href: "/start", text: "Start" },
  { href: "/profile", text: "Profile" },
  { href: "/previous", text: "Previous" },
  { href: "/lexicon", text: "Lexicon" },
];

const Home = () => {
  return (
    <Layout>
      <h1>Lift</h1>
      <Nav links={navLinks} />
    </Layout>
  );
};

export default Home;

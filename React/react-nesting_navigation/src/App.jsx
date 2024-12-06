import "./styles.css";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Header />;
      <Navigation />
      <Link href="#home">Home</Link>
      <Link href="#about">About</Link>
      <Link href="#impressum">Impressum</Link>
      <Navigation />
      <Logo />
      <Avatar />
      <main>content goes here…</main>
    </>
  );
}

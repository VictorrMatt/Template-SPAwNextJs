import Link from "next/link";
import { HeadBar, Logo, NavHolder } from "./styles";

function Header() {
  return (
    <HeadBar>
      <Logo>YOUR.NAME</Logo>
      <nav>
        <NavHolder>
          <Link href="/">HOME</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/history">HISTORY</Link>
          <Link href="/contact">CONTACT</Link>
        </NavHolder>
      </nav>
    </HeadBar>
  );
}

export default Header;

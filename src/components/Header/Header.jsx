import { useSelector } from "react-redux";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

function Header() {
  const headerLinks = useSelector(({ header }) => header.header);
  return (
    <header>
      <HeaderTop />
      <HeaderBottom linksBottom={headerLinks.headerBottom} />
    </header>
  );
}

export default Header;

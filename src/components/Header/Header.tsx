import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

function Header() {
  const headerLinks = useTypedSelector(({ header }) => header.header);
  return (
    <header>
      <HeaderTop />
      <HeaderBottom linksBottom={headerLinks.headerBottom} />
    </header>
  );
}

export default Header;

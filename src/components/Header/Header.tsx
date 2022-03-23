import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// interface HeaderObject {
//   headerTop: any[];
//   hedaerBottom: any[];
// }

// interface HeaderLinksInterface {
//   headerLinks: HeaderObject;
//   /* hedaerBottom: any[]; */
// }

const Header = (): JSX.Element => {
  /*  const headerLinks = useTypedSelector(({ header }) => header.header); */
  const headerLinks = useTypedSelector((state) => state.header.header);
  console.log("headerLinks", headerLinks);
  const linksBottom = headerLinks.headerBottom;
  console.log(linksBottom);

  return (
    <header>
      <HeaderTop />
      <HeaderBottom linksBottom={headerLinks.headerBottom} />
    </header>
  );
};

export default Header;

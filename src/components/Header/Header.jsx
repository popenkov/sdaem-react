import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

function Header({ linksTop }) {
  return (
    <header>
      <HeaderTop linksT={linksTop} />
      <HeaderBottom />
    </header>
  );
}

export default Header;

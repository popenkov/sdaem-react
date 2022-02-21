import cn from "classnames";
import styles from "./HeaderTopLink.module.scss";
import { ReactComponent as MapMarker } from "../../../assets/svg/map-marker.svg";

function HeaderTopLink({ href, name, underlined }) {
  console.log();
  return (
    <a
      href={href}
      key={name}
      className={cn(styles.link, { [styles.underlined]: underlined })}
    >
      {underlined ? <MapMarker /> : null}
      {name}
    </a>
  );
}

export default HeaderTopLink;

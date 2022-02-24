import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./LinkComponent.module.scss";
import { ReactComponent as MapMarker } from "../../assets/svg/map-marker.svg";

function LinkComponent({
  name,
  href,
  underlined,
  top,
  bottom,
  yellowMap,
  footerGray,
  footerBold,
}) {
  return (
    <Link
      to={href}
      key={name}
      className={cn({
        [styles.underlined]: underlined,
        [styles["top-link"]]: top,
        [styles["bottom-link"]]: bottom,
        [styles["footer-link--grey"]]: footerGray,
        [styles["footer-link--bold"]]: footerBold,
      })}
    >
      {underlined ? <MapMarker fill="#1E2123" /> : null}
      {name}
      {yellowMap ? <MapMarker className={styles.yellowMap} /> : null}
    </Link>
  );
}

export default LinkComponent;

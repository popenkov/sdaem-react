import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./LinkComponent.module.scss";
import { ReactComponent as MapMarker } from "../../assets/svg/map-marker.svg";

function LinkComponent({
  name,
  href,
  id,
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
      key={id}
      className={cn({
        [styles.underlined]: underlined,
        [styles.topLink]: top,
        [styles.bottomLink]: bottom,
        [styles.footerLinkGrey]: footerGray,
        [styles.footerLinkBold]: footerBold,
      })}
    >
      {underlined ? <MapMarker fill="#1E2123" /> : null}
      {name}
      {yellowMap ? <MapMarker className={styles.yellowMap} /> : null}
    </Link>
  );
}

export default LinkComponent;

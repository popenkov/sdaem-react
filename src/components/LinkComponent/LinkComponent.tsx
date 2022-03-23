import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./LinkComponent.module.scss";

import { LinkComponentProps } from "../../../interfaces/footer";

import { ReactComponent as MapMarker } from "../../assets/svg/map-marker.svg";

function LinkComponent({
  name,
  href,
  id,
  underlined,
  top,
  bottom,
  yellowMap,
  gray,
  bold,
}: LinkComponentProps) {
  return (
    <Link
      to={href}
      key={id}
      className={cn({
        [styles.underlined]: underlined,
        [styles.topLink]: top,
        [styles.bottomLink]: bottom,
        [styles.footerLinkGrey]: gray,
        [styles.footerLinkBold]: bold,
      })}
    >
      {underlined ? <MapMarker fill="#1E2123" /> : null}
      {name}
      {yellowMap ? <MapMarker className={styles.yellowMap} /> : null}
    </Link>
  );
}

export default LinkComponent;

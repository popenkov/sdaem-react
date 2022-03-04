import { useSelector } from "react-redux";
import LinkComponent from "../../LinkComponent/LinkComponent.tsx";
import styles from "./FooterLinksContainer.module.scss";

function FooterLinksContainer() {
  const footerLinks = useSelector(({ footer }) => footer.footerLinksList);
  return (
    <div className={styles.footerRightTop}>
      <div className={styles.footerHouseTypeLinks}>
        <ul>
          {footerLinks.houseTypesLinks &&
            footerLinks.houseTypesLinks.map((link) => {
              return (
                <li key={link.name} className={styles.footerHouseTypeListItem}>
                  <LinkComponent
                    href={link.href}
                    id={link.id}
                    name={link.name}
                    footerBold={link.bold}
                    key={link.name}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      <div className={styles.footerCitiesLinks}>
        <p className={styles.footerCitiesTitle}>Квартиры</p>
        <ul className={styles.footerCitiesList}>
          {footerLinks.citiesLinks &&
            footerLinks.citiesLinks.map((link) => {
              return (
                <li key={link.name} className={styles.footerCitiesListItem}>
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    footerGray={link.gray}
                    key={link.name}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      <div className={styles.footerOtherPagesLinks}>
        <ul>
          {footerLinks.otherPagesLinks &&
            footerLinks.otherPagesLinks.map((link) => {
              return (
                <li key={link.name} className={styles.footerOtherPagesListItem}>
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    footerGray={link.gray}
                    key={link.name}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default FooterLinksContainer;

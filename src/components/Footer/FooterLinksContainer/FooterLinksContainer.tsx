import { LinkComponentProps } from "../../../../interfaces/footer";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import LinkComponent from "../../LinkComponent/LinkComponent";
import styles from "./FooterLinksContainer.module.scss";

function FooterLinksContainer(): JSX.Element {
  //TODO разобраться
  const footerLinks: any = useTypedSelector(
    ({ footer }) => footer.footerLinksList
  );
  return (
    <div className={styles.footerRightTop}>
      <div className={styles.footerHouseTypeLinks}>
        <ul>
          {footerLinks.houseTypesLinks &&
            //TODO разобраться
            footerLinks.houseTypesLinks.map((link: LinkComponentProps) => {
              return (
                <li key={link.name} className={styles.footerHouseTypeListItem}>
                  <LinkComponent
                    href={link.href}
                    id={link.id}
                    name={link.name}
                    bold={link.bold}
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
            footerLinks.citiesLinks.map((link: LinkComponentProps) => {
              return (
                <li key={link.name} className={styles.footerCitiesListItem}>
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    gray={link.gray}
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
            footerLinks.otherPagesLinks.map((link: LinkComponentProps) => {
              return (
                <li key={link.name} className={styles.footerOtherPagesListItem}>
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    gray={link.gray}
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

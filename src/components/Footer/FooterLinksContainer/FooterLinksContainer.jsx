import { useSelector } from "react-redux";
import LinkComponent from "../../LinkComponent/LinkComponent";
import styles from "./FooterLinksContainer.module.scss";

function FooterLinksContainer() {
  const footerLinks = useSelector(({ footer }) => footer.footer);
  console.log(footerLinks);
  return (
    <div className={styles["footer__right-top"]}>
      <div className={styles["footer__house-types-links"]}>
        <ul>
          {footerLinks.houseTypesLinks &&
            footerLinks.houseTypesLinks.map((link) => {
              return (
                <li key={link.name}>
                  <LinkComponent
                    href={link.href}
                    name={link.name}
                    footerBold={link.bold}
                    key={link.name}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      <div className={styles["footer__cities-links"]}>
        <p>Квартиры</p>
        <ul>
          {footerLinks.citiesLinks &&
            footerLinks.citiesLinks.map((link) => {
              return (
                <li key={link.name}>
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

      <div className={styles["footer__other-pages-links"]}>
        <ul>
          {footerLinks.otherPagesLinks &&
            footerLinks.otherPagesLinks.map((link) => {
              return (
                <li key={link.name}>
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

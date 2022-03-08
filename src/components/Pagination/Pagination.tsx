import React from "react";
import styles from "./Pagination.module.scss";

const paginationLinks = [
  {
    page: 1,
    href: "/1",
    id: 1,
  },
  {
    page: 2,
    href: "/1",
    id: 2,
  },
];

function Pagination() {
  return (
    <div className={styles.pagination}>
      {paginationLinks &&
        paginationLinks.map((link) => {
          return (
            <a href={link.href} key={link.id} className={styles.paginationLink}>
              {link.page}
            </a>
          );
        })}
    </div>
  );
}

export default Pagination;

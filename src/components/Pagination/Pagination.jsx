import React from "react";
import styles from "./Pagination.module.scss";
import cn from "classnames";

const paginationLinks = [
  {
    page: 1,
    href: "#",
    id: 1,
  },
  {
    page: 2,
    href: "#",
    id: 2,
  },
  {
    page: 3,
    href: "#",
    id: 3,
  },
  {
    page: 4,
    href: "#",
    id: 4,
  },
  {
    page: 5,
    href: "#",
    id: 5,
  },
  {
    page: 6,
    href: "#",
    id: 6,
  },
  {
    page: 7,
    href: "#",
    id: 7,
  },
  {
    page: 8,
    href: "#",
    id: 8,
  },
  {
    page: 9,
    href: "#",
    id: 9,
  },
  {
    page: 10,
    href: "#",
    id: 10,
  },
  {
    page: 11,
    href: "#",
    id: 11,
  },
];

function Pagination() {
  const [activePage, setActivePage] = React.useState(0);

  const onSelectPage = (index) => {
    setActivePage(index);
  };

  return (
    <div className={styles.pagination}>
      {paginationLinks &&
        paginationLinks.map((link, index) => {
          if (index < 7) {
            return (
              <a
                href="#"
                key={link.id}
                className={cn(styles.paginationLink, {
                  [styles.active]: activePage === index,
                })}
                onClick={() => onSelectPage(index)}
              >
                {link.page}
              </a>
            );
          }

          if (index === paginationLinks.length - 1) {
            return (
              <div className={styles.lastPage}>
                <p>...</p>
                <a
                  href="#"
                  key={link.id}
                  className={cn(styles.paginationLink, {
                    [styles.active]: activePage === index,
                  })}
                  onClick={() => onSelectPage(index)}
                >
                  {link.page}
                </a>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Pagination;

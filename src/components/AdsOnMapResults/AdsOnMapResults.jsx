import React from "react";
import styles from "./AdsOnMapResults.module.scss";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.jsx";
import { Link } from "react-router-dom";
import AdsOnMapItem from "../AdsOnMapItem/AdsOnMapItem";
const AdsOnMapData = {
  title: "Квартиры Минска на карте",
  tags: [
    { title: "Недорогие", href: "/inexpensive" },
    { title: "1-комнатные", href: "/one-room" },
    { title: "2-комнатные", href: "/two-rooms" },
    { title: "3-комнатные", href: "/three-rooms" },
    { title: "4-комнатные", href: "/four-rooms" },
    { title: "5-комнатные", href: "/five-rooms" },
    { title: "Заводской р.", href: "#" },
    { title: "Ленинский р.", href: "#" },
    { title: "Московский р.", href: "#" },
    { title: "Партизанский р.", href: "#" },
    { title: "Фрунзенский р.", href: "#" },
    { title: "•••", href: "#" },
  ],
  ads: [
    {
      id: 1,
      gold: true,
      title: "4-комн. апартаменты на Грушевке ",
      address: "Минск, б-р Мулявина, д. 10",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: "65.00 BYN",
      persons: "4 (2+2)",
      rooms: 4,
      subway: "Грушевка",
      area: "р-н  Шабаны",
      description:
        "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от ...",
      moreLink: "#",
    },
    {
      id: 2,
      gold: true,
      title: "4-комн. апартаменты на Грушевке ",
      address: "Минск, б-р Мулявина, д. 10",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: "65.00 BYN",
      persons: "4 (2+2)",
      rooms: 4,
      subway: "Грушевка",
      area: "р-н  Шабаны",
      description:
        "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от ...",
      moreLink: "#",
    },
    {
      id: 3,
      gold: true,
      title: "4-комн. апартаменты на Грушевке ",
      address: "Минск, б-р Мулявина, д. 10",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: "65.00 BYN",
      persons: "4 (2+2)",
      rooms: 4,
      subway: "Грушевка",
      area: "р-н  Шабаны",
      description:
        "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от ...",
      moreLink: "#",
    },
    {
      id: 4,
      gold: true,
      title: "4-комн. апартаменты на Грушевке ",
      address: "Минск, б-р Мулявина, д. 10",
      img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: "65.00 BYN",
      persons: "4 (2+2)",
      rooms: 4,
      subway: "Грушевка",
      area: "р-н  Шабаны",
      description:
        "Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от ...",
      moreLink: "#",
    },
  ],
};

function AdsOnMapResults() {
  return (
    <div className={styles.results}>
      <Breadcrumbs subtitle="Объявления на карте" />
      <h2 className={styles.title}>{AdsOnMapData.title}</h2>
      <div className={styles.recommendation}>
        <h3 className={styles.recommendationTitle}>Рекомендуем посмотреть</h3>
        <div className={styles.recommendationTags}>
          {AdsOnMapData.tags.map((tag) => {
            return (
              <Link
                key={tag.href}
                to={tag.href}
                className={styles.recommendationTag}
              >
                {tag.title}
              </Link>
            );
          })}
        </div>

        <section>
          {AdsOnMapData.ads.map((ad) => {
            return <AdsOnMapItem {...ad} key={ad.id} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default AdsOnMapResults;

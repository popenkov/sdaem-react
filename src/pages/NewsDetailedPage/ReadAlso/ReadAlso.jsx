import React from "react";
import styles from "./ReadAlso.module.scss";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NewsArticle from "../../NewsPage/NewsArticle/NewsArticle.tsx";
import { useDispatch, useSelector } from "react-redux";
import { setNewsList } from "../../../redux/actions/newsList";

function ReadAlso() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("http://localhost:3001/newsOverview").then(({ data }) => {
      dispatch(setNewsList(data));
    });
  }, []);
  const newsData = useSelector(({ newsList }) => newsList.newsList);
  console.log(newsData);
  return (
    <div className={styles.body}>
      <div className={styles.bodyContainer}>
        <h2 className={styles.title}>Читайте также</h2>

        <div className={styles.articles}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {newsData &&
              newsData.map((article) => {
                return (
                  <SwiperSlide>
                    <NewsArticle
                      {...article}
                      key={article.id}
                      className={styles.readAlsoArticle}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ReadAlso;

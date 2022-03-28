import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import NewsBody from "./NewsBody/NewsBody.jsx";
import styles from "./NewsDetailedPage.module.scss";
import NewsHeader from "./NewsHeader/NewsHeader.jsx";
import { useParams } from "react-router-dom";
import { setNewsData } from "../../redux/actions/newsList";
import { Audio } from "react-loader-spinner";
import ReadAlso from "./ReadAlso/ReadAlso";

function NewsDetailedPage() {
  const { newsId } = useParams();
  console.log(newsId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNewsData({}));
    axios
      .get(`http://localhost:3001/newsData?newsId=${newsId}`)
      .then(({ data }) => {
        dispatch(setNewsData(data));
      });
  }, [newsId]);

  const newsData = useSelector((state) => state.newsList.newsData[0]);

  if (newsData) {
    return (
      <div>
        <NewsHeader title={newsData.title} date={newsData.date} />

        <NewsBody
          img={newsData.img}
          body={newsData.body}
          title={newsData.title}
        />
        <ReadAlso />
      </div>
    );
  } else {
    return (
      <Audio height="100" width="100" color="#6B50E9" ariaLabel="loading" />
    );
  }
}

export default NewsDetailedPage;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "./redux/actions/header";
import { setFooter, setFooterCopyright } from "./redux/actions/footer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/";
import { MainPage, NewsPage } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/headerFooter").then(({ data }) => {
      dispatch(setHeader(data.header));
      dispatch(setFooter(data.footer));
      dispatch(setFooterCopyright(data.footerCopyright));
    });
  }, []);

  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} exact />
        <Route path="/news" element={<NewsPage />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

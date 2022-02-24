import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "./redux/actions/header";
import { setFooter } from "./redux/actions/footer";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components/";
import { Main, News } from "./pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:3001/links").then(({ data }) => {
      dispatch(setHeader(data.header));
      dispatch(setFooter(data.footer));
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/news" element={<News />} exact />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

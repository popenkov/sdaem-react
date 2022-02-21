import { Header, Footer } from "./components/";

const headerTopLinks = [
  { name: "Главная", href: "/", underlined: false },
  { name: "Новости", href: "/news", underlined: false },
  { name: "Размещение и тарифы", href: "/", underlined: false },
  { name: "Объявления на карте", href: "/", underlined: true },
  { name: "Контакты", href: "/", underlined: false },
];
const headerBottomLinks = [
  { name: "Квартиры на сутки", href: "/", underlined: false },
  { name: "Коттеджи и усадьбы", href: "/news", underlined: false },
  { name: "Бани и Сауны", href: "/", underlined: false },
  { name: "Авто напрокат", href: "/", underlined: true },
];

function App() {
  return (
    <div className="App">
      <Header linksTop={headerTopLinks} />
      <Footer />
    </div>
  );
}

export default App;

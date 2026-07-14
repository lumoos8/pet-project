import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/About/MainPage/MainPage";

function App() {
  return (
    <div className={styles.layout}>
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;

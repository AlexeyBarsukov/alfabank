import './App.css';
import Header from "./components/Header/Header";
import AboutBank from "./Pages/AboutBank";
import EasyMoney from "./Pages/EasyMoney/EasyMoney";
import PrivateCabinet from "./Pages/PrivateCabinet/PrivateCabinet";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutBank/>
      <EasyMoney />
      <PrivateCabinet/>
      <Footer/>
    </div>
  );
}

export default App;

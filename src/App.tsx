import CoverSlider from "./components/Cover/CoverSlider";
import MovieRows from "./components/MovieRows/MovieRows";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="main_div">
      <Header />
      <CoverSlider />
      <MovieRows />
      <MovieRows />
      <MovieRows />
    </div>
  );
}

export default App;

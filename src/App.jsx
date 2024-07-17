import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;

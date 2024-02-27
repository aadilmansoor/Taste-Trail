import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Restaurant from "./Restaurant";
import Restview from "./Restview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Restaurant></Restaurant>} />
        <Route path="/viewRest/:id" element={<Restview></Restview>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

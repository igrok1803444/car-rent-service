import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Catalog } from "./pages/catalog/Catalog";
import { Favorite } from "./pages/favorite/Favorite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

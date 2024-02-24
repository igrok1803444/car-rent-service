import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Catalog } from "./pages/catalog/Catalog";
import { Favorite } from "./pages/favorite/Favorite";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

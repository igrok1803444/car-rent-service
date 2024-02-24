import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Suspense, lazy } from "react";
import { Home } from "./pages/home/Home";

const Catalog = lazy(() => import("./pages/catalog/Catalog"));
const Favorite = lazy(() => import("./pages/favorite/Favorite"));

function App() {
  return (
    <Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorite" element={<Favorite />} />

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

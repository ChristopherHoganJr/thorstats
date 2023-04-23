import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing from "./pages/Landing";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;

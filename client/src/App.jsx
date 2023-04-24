import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing from "./pages/Landing";
import RegisterAccount from "./pages/RegisterAccount";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path='/register' element={<RegisterAccount />} />
      </Route>
    </Routes>
  );
}

export default App;

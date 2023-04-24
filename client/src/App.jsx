import { Route, Routes } from "react-router-dom";
import axios from "axios";

// layouts
import MainLayout from "./layouts/MainLayout";

// pages
import Landing from "./pages/Landing";
import RegisterAccount from "./pages/Account/RegisterAccount";
import LoginAccount from "./pages/Account/LoginAccount";

// axios default
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Landing />} />
        <Route path='/register' element={<RegisterAccount />} />
        <Route path='/login' element={<LoginAccount />} />
      </Route>
    </Routes>
  );
}

export default App;

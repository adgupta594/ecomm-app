import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/hompage.component";
import Shop from "./pages/shoppage/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route path="/shop" Component={Shop} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//pages
import { Main } from "./pages/main/main";
import { Search } from "./pages/search/search";
import { Todolist } from "./pages/todolist/todolist";

//components
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/todolist" element={<Todolist />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

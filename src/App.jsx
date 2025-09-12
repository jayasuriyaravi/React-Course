import "./index.css";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/restMenu/:id" element={<RestMenu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

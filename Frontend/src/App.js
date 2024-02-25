import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
       <Outlet/>
      <Footer />
    {/* <Loader /> */}
    </div>
  );
}

export default App;

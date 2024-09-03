//Components
import Navbar from "./components/navbar";
import Header from "./components/header";

//Styles
import "./page.css";

export default function Home() {
  return (
    <main className="main">
      <div className="navbarDiv">
        <Navbar />
      </div>
      <Header />
    </main>
  );
}

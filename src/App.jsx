import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <ArticleSection></ArticleSection>
      </main>
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArticleCategories from "./components/ArticleCategories/ArticleCategories";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Banner></Banner>
        <ArticleCategories></ArticleCategories>
        <section className='container'>
          <div className='row'>
            <ArticleSection></ArticleSection>
            <SideNav></SideNav>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

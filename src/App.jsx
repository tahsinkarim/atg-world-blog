import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import ArticleCategories from "./components/ArticleCategories/ArticleCategories";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import Banner from "./components/Banner/Banner";
import EditButton from "./components/Buttons/EditButton";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
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
        <EditButton></EditButton>
      </main>
    </AuthProvider>
  );
}

export default App;

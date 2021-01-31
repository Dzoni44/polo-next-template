import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, home }) => {
  return (
    <>
      <Header isHomePage={home} />

      <main className="main-content">
        {children}
        <style jsx>{`
          .main-content {
            min-height: 500px;
          }
          @media screen and (max-width: 640px) {
            .main-content {
              min-height: 300px;
            }
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
};

export default Layout;

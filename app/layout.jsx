import "@styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Joshua's Blog",
  description: "Explore the world of philosophy",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main"></div>
        <div className="gradient"></div>
        <div className="view">
          <NavBar />
        </div>
        <main className="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Rootlayout;

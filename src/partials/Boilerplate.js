import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Boilerplate = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="container mx-auto mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Boilerplate;


import Header from "../components/Header";
import Footer from "../components/Footer";

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

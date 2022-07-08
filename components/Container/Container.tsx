import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

type Children = {
  children: JSX.Element;
};

export default function Container(props: Children) {
  return (
    <>
      {props.children}
      <Footer />
    </>
  );
}

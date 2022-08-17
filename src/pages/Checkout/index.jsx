import Cart from "../../components/Cart/Cart";
import Nav from "../../components/Nav/Nav";

export const Checkout = () => {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='container'>
        <h2 className='text-[28px] font-bold'>Vérifiez votre commande</h2>
        <p>Votre nom : </p>
        <p>Lieu de livraison : </p>
        <Cart />
      </div>
    </>
  );
};

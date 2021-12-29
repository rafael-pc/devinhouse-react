import "./App.css";
import Produto from "./components/Produto";

function App() {
  return (
    <>
      <div className="container">
        <Produto
          photo="https://m.media-amazon.com/images/I/31RUD4pByJL._SX466_.jpg"
          name="Missha All Around Safe Block Sebum Zero Sun"
          price="$4.00"
        ></Produto>
        <Produto
          photo="https://www.innisfree.com/sg/en/resources/upload/product/27794_l.png"
          name="Innisfree Green Tea Balancing Cream"
          price="$18.00"
        ></Produto>
        <Produto
          photo="https://i.ebayimg.com/images/g/OxYAAOSwBEpZo9MM/s-l1600.jpg"
          name="Claire's Cloud 9 Blanc De Whitening Cream"
          price="$20.00"
        ></Produto>
        <Produto
          photo="https://cdn10.bigcommerce.com/s-6dbw5r/products/249/images/553/Pure_Eco_Snail_Moisture_Gel__85959.1496720531.400.400.png?c=2"
          name="Tonymoly Pure Eco Snail Moisture Gel"
          price="$8.00"
        ></Produto>
        <Produto
          photo="https://bblueberry.com/wp-content/uploads/Skin79-Fresh-Garden-Mask-Snail-mascarilla-con-extracto-de-caracol.jpg"
          name="Skin79 Fresh Garden Mask - Snail"
          price="$2.00"
        ></Produto>
        <Produto
          photo="https://cdn.shopify.com/s/files/1/0099/3332/4369/products/cos5.png?v=1560688607"
          name="Csrx Advanced Snail 92 All in One Cream"
          price="$24.00"
        ></Produto>
        <Produto
          photo="https://www.innisfree.com/my/en/resources/upload/product/21824_l.png"
          name="Innisfree Canola Honey Mask"
          price="$14.00"
        ></Produto>
        <Produto
          photo="https://cafe24img.poxo.com/jolsejolse/web/product/big/20200401/20e4ec05ec5c3b97e78b89d8ae107243.jpg"
          name="Scinic Honey Banana Cleansing Foam"
          price="$4.00"
        ></Produto>
      </div>
    </>
  );
}

export default App;

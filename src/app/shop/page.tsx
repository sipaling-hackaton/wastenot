import Image from "next/image";
import "../../../public/scss/shop.scss";
import 'swiper/css';
// Import Swiper React components
export default function Home() {

  return (
    <main className="product-page">
    <div className="product">
      <img src="./image/tumblr.png" alt="Tumbler"/>
      <div className="product-info">
        <h3>Tumbler</h3>
        <p>Plastic/Recycle Product</p>
        <div className="containerAddToCart">
          <p className="price">Rp 30.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/plasticCloth.png" alt="Plastic Clothes"/>
      <div className="product-info">
        <h3>Plastic Clothes</h3>
        <p>Plastic/Recycle Product</p>
        <div className="containerAddToCart">
          <p className="price">Rp 90.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/celengan.png" alt="Piggy Bank"/>
      <div className="product-info">
        <h3>Piggy Bank</h3>
        <p>Plastic/Recycle Product</p>
        <div className="containerAddToCart">
          <p className="price">Rp 10.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/flower.png" alt="Plastic Flowers"/>
      <div className="product-info">
        <h3>Plastic Flowers</h3>
        <p>Plastic/Recycle Product</p>
        <div className="containerAddToCart">
          <p className="price">Rp 15.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>
  </main>
  );
}

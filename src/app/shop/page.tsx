import Image from "next/image";
import "../../../public/scss/shop.scss";
import 'swiper/css';
import {Navbar} from "@/components/ui/navbar";
import Link from 'next/link'
// Import Swiper React components
export default function Home() {

  return (
    <main>
      <div className="topButtonContainer">
        <Link href="/" >
            <button><img src="/image/backButton.png" alt="" /></button>
          </Link>
            <p>Detail</p>
            <button><img src="/image/heartIcon.png" alt="" /></button>
        </div>
      <div className="product-page">
        <div className="product">
      <img src="./image/tumblr.png" alt="Tumbler"/>
      
          <div className="product-info">
          <Link href="/shop/detail">
            <h3>Tumbler</h3>
            <p>Plastic/Recycle Product</p>
          </Link> 
          <div className="containerAddToCart">
            <p className="price">Rp 30.000</p>
            <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
          </div>
        </div>
      </div>

    <div className="product">
      <img src="./image/plasticCloth.png" alt="Plastic Clothes"/>
      <div className="product-info">
      <Link href="/shop/detail">
        <h3>Plastic Clothes</h3>
        <p>Plastic/Recycle Product</p>
        </Link>
        <div className="containerAddToCart">
          <p className="price">Rp 90.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/celengan.png" alt="Piggy Bank"/>
      <div className="product-info">
      <Link href="/shop/detail">
        <h3>Piggy Bank</h3>
        <p>Plastic/Recycle Product</p>
        </Link>
        <div className="containerAddToCart">
          <p className="price">Rp 10.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/flower.png" alt="Plastic Flowers"/>
      <div className="product-info">
      <Link href="/shop/detail">
        <h3>Plastic Flowers</h3>
        <p>Plastic/Recycle Product</p>
        </Link>
        <div className="containerAddToCart">
          <p className="price">Rp 15.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div> 

    <div className="product">
      <img src="./image/tumbrlPolkadot.png" alt="Plastic Flowers"/>
      <div className="product-info">
      <Link href="/shop/detail">
        <h3>Tumbler Polkadot</h3>
        <p>Plastic/Recycle Product</p>
        </Link>
        <div className="containerAddToCart">
          <p className="price">Rp 15.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>

    <div className="product">
      <img src="./image/doormats.png" alt="Plastic Flowers"/>
      <div className="product-info">
      <Link href="/shop/detail">
        <h3>Door Matz</h3>
        <p>Plastic/Recycle Product</p>
        </Link>
        <div className="containerAddToCart">
          <p className="price">Rp 45.000</p>
          <button className="add-to-cart"><i className="fas fa-plus">+</i></button>
        </div>
      </div>
    </div>  
        </div>
    
  </main>
  );
}

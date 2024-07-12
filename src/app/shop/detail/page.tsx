import Image from "next/image";
import "../../../../public/scss/shopDetail.scss";
import 'swiper/css';
import {Input} from "@/components/ui/input";
// Import Swiper React components
export default function Detail() {

  return (
    <main className="detail-page">
        <div className="topButtonContainer">
            <button><img src="/image/backButton.png" alt="" /></button>
            <p>Detail</p>
            <button><img src="/image/heartIcon.png" alt="" /></button>
        </div>
        <img src="/image/tumblr.png" alt="Tumbler" className="product-image"/>

        <div className="product-info">
        <h2 className="bigText">Tumbler</h2>
        <p className="product-category">Plastic/Recycle Product</p>

        <div className="product-icons">
            <i className="fas fa-recycle"></i>
            <i className="fas fa-leaf"></i>
            <i className="fas fa-chart-bar"></i>
        </div>

        <div className="product-rating justify-between">
            <div className="flex">
                <img src="/image/rating.png" alt="" />
                <i className="fas fa-star"></i>
                <p className="rating">4.8 (230)</p>    
            </div>
            <div className="flex">
                <img src="/image/motorbike.png" alt="" />
                <img src="/image/Extra Milk.png" alt="" />
                <img src="/image/Icon.png" alt="" />
            </div>
            
        </div>

        <h3 className="mediumText">Description</h3>
        <p className="description">
            A cappuccino is an approximately 150 ml (5 oz) beverage, with 25 ml of espresso coffee and 85 ml of fresh milk the fo.. 
            <a href="#">Read More</a>
        </p>
        </div>
        <div className="buy d-flex" style={{width:"100%",justifyContent:"space-between"}}>
            <div>
                <p className="textGray">price:</p>
                <p className="greenText">Rp 30.000</p>
            </div>
            <button className="buyButton">Buy Now</button>
        </div>
    </main>
  );
}

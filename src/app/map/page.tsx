import Image from "next/image";
import "../../../public/scss/shop.scss";
import 'swiper/css';
import "../../../public/scss/nearby.scss";
import Link from 'next/link'
// Import Swiper React components
export default function Home() {

  return (
    <main style={{padding:"0px"}}>
        <img src="/image/Map.png" style={{position:"fixed",bottom:"70px",marginLeft:"132px"}} alt="" />
        <div className="topButtonContainer">
        <Link href="/">
            <button><img src="/image/backButton.png" alt="" /></button>
        </Link>
            <p>Detail</p>
        </div>
        <img src="/image/petaFull.png" alt="" style={{width:"1000px",height:"70vh"}}/>
    </main>
  );
}

import Image from "next/image";
import "../../../public/scss/shop.scss";
import 'swiper/css';
import "../../../public/scss/nearby.scss";
import Link from 'next/link'
// Import Swiper React components
export default function Home() {

  return (
    <main>
        <Link href="/map"><img src="/image/Map.png" style={{position:"fixed",bottom:"70px",marginLeft:"132px"}} alt="" /></Link>
        <div className="topButtonContainer">
        <Link href="/">
            <button><img src="/image/backButton.png" alt="" /></button>
        </Link>
            <p>Detail</p>
        </div>
        <div className="card">
            <Link href="/nearby/detail">
                <h2 className="textBesar">Waste Bank A01</h2>
                <p>50m</p>
            </Link>
            <div className="details">
                <div className="detail">
                    <img src="/image/kalenderIcon.png" alt="" />
                    <span>Everyday</span>
                </div>
                <div className="detail">
                    <img src="/image/pemberitahuanIcon.png" alt="" />
                    <span>16:00 AM</span>
                </div>
            </div>
            <Link href="/nearby/detail"><button className="detail-btn">Detail</button></Link>
            
        </div>

        <div className="card">
        <Link href="/nearby/detail">
            <h2 className="textBesar">Waste Bank Kebon Jati</h2>
            <p>200m</p>
        </Link>
        <div className="details">
            <div className="detail">
            <i className="fas fa-calendar-alt"></i>
            <span>Everyday</span>
            </div>
            <div className="detail">
            <i className="fas fa-clock"></i>
            <span>12:00 AM</span>
            </div>
        </div>
        <Link href="/nearby/detail"><button className="detail-btn">Detail</button></Link>
        
        </div>

        <div className="card">
            <Link href="/nearby/detail">   
                <h2 className="textBesar">Waste Bank Ciliwung</h2>
                <p>200m</p>
            </Link>
            <div className="details">
            <div className="detail">
            <i className="fas fa-calendar-alt"></i>
            <span>Everyday</span>
            </div>
            <div className="detail">
            <i className="fas fa-clock"></i>
            <span>16:00 AM</span>
            </div>
         </div>
         <Link href="/nearby/detail"><button className="detail-btn">Detail</button></Link>
        
        </div>
    </main>
  );
}

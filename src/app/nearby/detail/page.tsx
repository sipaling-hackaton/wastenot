import Image from "next/image";
import 'swiper/css';
import "../../../../public/scss/nearby.scss";
// Import Swiper React components
import Link from 'next/link'
export default function Home() {

  return (
    <main className="detail-page">
        <div className="topButtonContainer">
        <Link href="/nearby">
            <button><img src="/image/backButton.png" alt="" /></button>
        </Link>
            <p>Detail</p>
        </div>
    

    <div className="hotspot-info">

      <h2>Hotspot A01</h2>
      <p className="address">
        <i className="fas fa-map-marker-alt"></i>
        Jl. PTPN VIII No.73, Cilenggang, Kec. Serpong, Kota Tangerang Selatan, Banten 15310
      </p>

      <div className="status-distance">
        <span className="status open">Open</span>
        <span className="distance">200m</span>
      </div>

      <p className="collect-time">Collect Time: 12.00 AM</p>
      <p className="open-days">Open: Everyday</p>

      <p className="accept-title">Accept:</p>
      <ul className="accept-list">
        <li>Plastics</li>
        <li>Textiles</li>
        <li>Paper</li>
        <li>Electronics</li>
        <li>Metal</li>
      </ul>
    </div>
  </main>
  );
}

import Image from "next/image";
import "../../public/scss/home.scss";
import 'swiper/css';
// Import Swiper React components
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center" style={{backgroundImage:"url('./image/bg-home.png')",backgroundSize:"cover"}}>
      <div className="profileCard">
        <div className="">
          <p>Hello</p>
          <p>Welcome To</p>
        </div>
        <img className="logo" src="./image/logo.png" alt="" />
      </div>
      <div className="profileCard cardHijau">
        <div className="profileAtas">
          <img src="./image/dokter.png" alt="" />
          <div>
            <p className="">Aldrik Ciaputra</p>
            <p className="pangkat">Raja</p>
          </div>
          <div>
            <img src="./image/arrow-right.png" alt="" />
          </div>
        </div>
        <hr className="hrCustom"/>
        <div className="profileAtas">
          <div className="profileAtas">
            <img src="./image/calendarIcon.png" alt="" />
            <p>Rp 100.000</p>
          </div>
          <div className="profileAtas">
            <img src="./image/amount.png" alt="" />
            <p>1000 kg</p>
          </div>
        </div>
      </div>
      <img src="./image/bannerEvent.png" alt="" />
      <img src="./image/mapBank sampah.png" alt="" />
    </main>
  );
}

import Image from "next/image";
import "../../public/scss/home.scss";
import 'swiper/css';
import Link from 'next/link'
// Import Swiper React components
export default function Home() {

  return (
      <main className="flex min-h-screen flex-col items-center" style={{
        backgroundImage: "url('./image/bg-home.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="profileCard salamContainer">
          <div>
            <p className="grayText">Hello</p>
            <p className="bigText">Welcome To</p>
          </div>
          <Link href="/chat"><img className="logo" src="./image/logo.png" alt=""/></Link>

        </div>
        <div className="cardHijau">
          <div className="profileCardUser ">
            <div className="profileAtas">
              <div className="namaDanPhoto">
                <img src="./image/dokter.png" alt=""/>
                <div>
                  <p className="nama">Aldrik Ciaputra</p>
                  <p className="pangkat">Raja</p>
                </div>
              </div>
              <div>
                <img src="./image/arrow-right.png" alt=""/>
              </div>
            </div>
            <hr className="hrCustom"/>
            <div className="profileAtas">
              <div className="profileAtas">
                <img src="./image/calendarIcon.png" alt=""/>
                <p className="text">W257U</p>
              </div>
              <div className="profileAtas">
                <img src="./image/amount.png" alt=""/>
                <p className="text">1000 kg</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section2">
          <img src="./image/bannerEvent.png" alt=""/>
          <div style={{width: "100%", height: "200px", paddingBottom: "20px"}}>
            <iframe width="100%" height="300"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jl%20Scientia%20Square%20Barat%201+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </div>
      </main>
  );
}

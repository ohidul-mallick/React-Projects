import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB667972819_.jpg"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Pulse oximeters | Starting ₹1499"
          price={20.99}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/GW/oxi-99PC-1x._SY304_CB655087945_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="49538095"
          title="Bluetooth Smart Fitness Watch Band| Count Heart Rate,Running Foot Print |"
          price={350.99}
          image="https://m.media-amazon.com/images/I/51gMiaiVNuL._AC_UL320_.jpg"
          rating={4}
        />
        <Product
          id="49538096"
          title="Sonos Move - Battery-Powered Smart Speaker, Wi-Fi and Bluetooth with Alexa Built-in"
          price={999.99}
          image="https://m.media-amazon.com/images/I/81lIVPzBtRL._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="49538097"
          title="Apple iPad Pro (12.9-inch, Wi-Fi, 512GB) - Space Grey (4th Generation)"
          price={1025.99}
          image="https://m.media-amazon.com/images/I/81uZx3TL29L._AC_UY218_.jpg"
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="49538098"
          title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
          price={995.99}
          image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;

// https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB667972819_.jpg

// https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/MSD_May/D23512595_MSD_WLD_RedmiNote10Pro_DesktopTallHero_1500x600._CB667944777_.jpg

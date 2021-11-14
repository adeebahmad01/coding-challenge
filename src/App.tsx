import { useState } from "react";
import "./App.css";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./assets/itemSlider/items/wpn_sword_01_thumb-200x200.jpg";
import image2 from "./assets/itemSlider/items/wpn_sword_02_thumb-200x200.jpg";
import image3 from "./assets/itemSlider/items/wpn_sword_03_thumb-200x200.jpg";
import dot1 from "./assets/itemSlider/rarities/rarity_00.png";
import dot2 from "./assets/itemSlider/rarities/rarity_01.png";
import dot3 from "./assets/itemSlider/rarities/rarity_02.png";
import dot4 from "./assets/itemSlider/rarities/rarity_03.png";
import dot5 from "./assets/itemSlider/rarities/rarity_04.png";
import dot6 from "./assets/itemSlider/rarities/rarity_05.png";
import socket from "./assets/itemSlider/gem_socket_square.png";

const images = [
  {
    src: image1,
    dot: dot1,
    alt: "image1",
    name: "The Sword",
    desc: "Dagger",
  },
  {
    src: image2,
    dot: dot2,
    alt: "image2",
    name: "Rare Sword",
    desc: "Long Knife",
  },
  {
    src: image3,
    dot: dot3,
    alt: "image3",
    name: "Epic Sword",
    desc: "Long Sword",
  },
  {
    src: image1,
    dot: dot4,
    alt: "image4",
    name: "Legendary Sword",
    desc: "Long Sword",
  },
  {
    src: image2,
    dot: dot5,
    alt: "image5",
    name: "Legendary Sword",
    desc: "Long Sword",
  },
  {
    src: image3,
    dot: dot6,
    alt: "image6",
    name: "Premium Sword",
    desc: "Epic Knife",
  },
];

function App() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <section className="outer">
        <div className="container">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            initialSlide={0}
            centeredSlides
            loop
            grabCursor
            className="slider"
            onSlideChange={(swiper) => setActive(swiper.realIndex)}
          >
            {images.map((image, i) => (
              <SwiperSlide
                className={i === active ? "active" : ""}
                key={image.dot}
              >
                <div className="inner">
                  <img className="item" src={image.src} alt={image.alt} />
                  <img className="dot" src={image.dot} alt={image.alt} />
                  <img src={socket} alt="Socket" className="socket" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <h1>
          {images[active].name} | <span> {images[active].desc} </span>
        </h1>
      </section>
    </div>
  );
}

export default App;

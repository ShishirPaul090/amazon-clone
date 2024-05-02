import React from 'react';
import "./Home.css";
 import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className="home_image" src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png" alt="Home_Image"/>

            <div className="home_row">
            <Product id="11" title="ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E," price={1395}image="https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UY327_FMwebp_QL65_.jpg" rating={5} />
                <Product id="12" title="Cra-Z-Art Crayons, 64 Assorted Colors, 64/Pack" price={2}image="https://m.media-amazon.com/images/I/71Wnj8soJ6L._AC_UL480_FMwebp_QL65_.jpg" rating={5} />
            </div>

            <div className="home_row">
            <Product id="21" title="SAMSUNG Galaxy A54 5G A Series Cell Phone, Unlocked Android Smartphone, 128GB, 6.4” Fluid Display Screen," price={349}image="https://m.media-amazon.com/images/I/61MEp5HIdBL._AC_UY327_FMwebp_QL65_.jpg" rating={5} />
                
                <Product id="22" title="JBL Go 3 Eco: Portable Speaker with Bluetooth, Built-in Battery, Waterproof and Dustproof Feature - Green" price={39}image="https://m.media-amazon.com/images/I/71nqoc5bfzL._AC_UY327_FMwebp_QL65_.jpg" rating={5} />
               
                <Product id="23" title="Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos" price={479}image="https://m.media-amazon.com/images/I/71Is-Zv6A0L._AC_UY327_FMwebp_QL65_.jpg" rating={5} />
            </div>

            <div className="home_row">
            <Product id="31" title="Five Star Spiral Notebook + Study App, 3 Pack, 3 Subject, College Ruled Paper, Fights Ink Bleed, Water Resistant" price={23}image="https://m.media-amazon.com/images/I/81eeB+RTfnL._AC_UL480_QL65_.jpg" rating={5} />
                <Product id="32" title="CIntel Core i7-12700KF Gaming Desktop Processor 12 (8P+4E) Cores up to 5.0 GHz Unlocked LGA1700 600 Series Chipset 125W" price={194}image="https://m.media-amazon.com/images/I/51AqEkc2BuL._AC_SX679_.jpg" rating={5} />
            </div>
        </div>
    </div>
  )
}

export default Home     
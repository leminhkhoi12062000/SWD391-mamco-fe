
import React from "react"
import '../../styles/hero.css' 

import sloganDarkImg from "../../img/slogan.jpg";
import sloganLightImg from "../../img/insta.jpg";  

const Hero = ({theme}) => {
    return (
    <section className='hero_section'>
        <div className="container">
            <div className="hero_wrapper">
                <div className="hero_content">
                    <div>
                        <h2>Tiết kiệm thời gian</h2>
                        <h2>Đảm bảo chất lượng</h2>
                        <h2 className="highlight">Phục vụ tận tình</h2>
                    </div>
                    <p className="description">Được phục vụ khách hàng là niềm vui của chúng tôi. Xin cảm 
                    ơn các khách hàng đã dùng dịch vụ của chúng tôi !</p>

                    <div className="hero_btns">
                        <button className="primary_btn">Đặt hàng ngay</button>
                        <button className="secondary_btn">Xem thêm</button>
                    </div>
                </div>

                <div className="hero_img">
                    <img 
                    src={ theme==='light-theme' ? sloganLightImg : sloganDarkImg} 
                    alt="hero-img" 
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default Hero
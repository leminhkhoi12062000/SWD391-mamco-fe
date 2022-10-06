

import React from "react";
import "../../styles/about.css";

import food1 from '../../img/food1.jpg';

const chooseData = [
    {
        icon: 'ri-time-line',
        title:'Tiết kiệm thời gian',
        desc: "Giao hàng nhanh và chất lượng đảm bảo tiết kiệm thời gian của quý khách ."
    },

    {
        icon: 'ri-team-line',
        title:'Đội ngũ nhân viên chuyên nghiệp , thân thiện',
        desc: "Luôn luôn giúp khách hàng giải đáp tất cả các thắc mắc."
    },

    {
        icon: 'ri-customer-service-2-line',
        title:'Dịch vụ 24/7',
        desc: "Luôn luôn có mặt mọi lúc mọi nơi."
    },
]

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about_wrapper">
                    <div className="about_content">
                        <h6 className="subtitle">Tại sao khách hàng chọn chúng tôi </h6>
                        <h2>Tiết kiệm thời gian của quý khách</h2>
                        <h2 className="highlight"> là niềm vui của chúng tôi</h2>
                        <p className="description about_content-desc">
                            Cảm ơn quý khách !
                        </p>

                        <div className="choose_item-wrapper">
                            {
                                chooseData.map((item,index) =>(
                                    <div className="choose_us-item" key={index}>
                            <span className="choose_us-icon">
                            <i class={item.icon}></i>
                            </span>
                            <div>
                            <h4 className="choose_us-title">{item.title}</h4>
                            <p className="description">
                                {item.desc}
                            </p>
                            </div>
                        </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about_img">
                        <img src={food1} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About
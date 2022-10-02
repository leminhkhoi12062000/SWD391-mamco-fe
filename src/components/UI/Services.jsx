

import React from "react";
import '../../styles/services.css'

const serviceData = [
    {
        icon :'ri-apps-line',
        title:'App Development',
        desc: 'Được phát triển bởi những lập trình viên hàng đầu.' 
         
    },

    {
        icon :'ri-code-s-slash-line',
        title:'Web Design',
        desc: 'Được thiết kế bởi những designer nổi tiếng.' 
         
    },

    {
        icon :'ri-smartphone-line',
        title:'Mobile Development',
        desc: 'Đội ngũ lập trình nhiều kinh nghiệm .' 
         
    },

    
]

const Services = () => {
    return (
        <section id="service">
            <div className="container">
                <div className="services_top-content">
                    <h6 className="subtitle">Tiêu chí </h6>
                    <h2>Tiết kiệm thời gian của quý khách</h2>
                    <h2 className="highlight"> là niềm vui của chúng tôi</h2>
                </div>

                <div className="service_item-wrapper">
                    {
                        serviceData.map((item,index) => (
                            <div className="services_item" key={index}>
                        <span className="service_icon"><i class={item.icon}></i></span>
                        <h3 className="service_title">{item.title}</h3>
                        <p className="description">
                            {item.desc}
                        </p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services
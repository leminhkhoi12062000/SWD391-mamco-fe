

    import React from "react"
    import '../../styles/team.css'

    import food2 from '../../img/food2.jpg'
    import food3 from '../../img/food3.jpg'
    import food4 from '../../img/food4.jpg'
    import food5 from '../../img/food5.jpg'

    const teamMembers = [
        {
            imgUrl: food2,
            name: 'Country Hurry',
            position: 'Developer'
        },
        {
            imgUrl: food3,
            name: 'Country Hurry',
            position: 'Developer'
        },
        {
            imgUrl: food4,
            name: 'Country Hurry',
            position: 'Developer'
        },
        {
            imgUrl: food5,
            name: 'Country Hurry',
            position: 'Developer'
        },
    ]
 

    
    const Team = () => {
        return <section>
            <div className="container">
                <div className="team_content">
                    <h6 className="subtitle">Our Team</h6>
                    <h2>
                        Meet with <span className="highlight">our team</span>
                    </h2>
                </div>

                <div className="team_wrapper">
                    {
                        teamMembers.map((item,index)=>(
                            <div className="team_item" key={index}>
                        <div className="team_img">
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="team_details">
                            <h4>{item.name}</h4>
                            <p className="description">{item.position}</p>

                            <div className="team_member-social">
                                <span>
                                    <i class="ri-linkedin-line"></i>
                                </span>
                                <span>
                                    <i class="ri-facebook-circle-fill"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </section>
    }

    export default Team
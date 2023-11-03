import ScrollAnimation from "react-animate-on-scroll";

function HairStyles() {
    return (
        <div className="column" id="hairstyles">
            <div className="container">
                <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                    <div className="columns is-half">
                        <div className="column intro" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <h3>Introducing the</h3><br/>
                            <h1 className="hairstyles-header">HAIRSTYLES</h1>
                            <br/>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                    <div className="columns is-half row-1">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/398152310_869085454879489_5253448583773406959_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=qKxGZUB-XzkAX-cpWtM&_nc_ht=scontent.fklo1-1.fna&oh=03_AdSgF8frK0LnAFfHVRBVrP6A4oBgyViceJhUvgswdCJyfg&oe=656C9009" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/386433582_635492788772447_7960910080114618504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=FExPbX-q_6sAX_jbiML&_nc_ht=scontent.fklo1-1.fna&oh=03_AdSkXN0cCRUT8VkTm0XFwqUCCObhbErMFth5A1uQeRBD8w&oe=656C83F3" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                    <div className="columns is-one-third row-2">
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/386468501_350285894159859_7921634485062368454_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=nZF3Ht3OlAkAX-VSKB9&_nc_ht=scontent.fklo1-1.fna&oh=03_AdSoI50KEWX4gCXi_NFW_VdorVjHowB7enSEnbu9-pXH-A&oe=656C720B" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/386477969_3517715848487965_9174844487087593510_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=jQWwzFQUIREAX8QQhBF&_nc_ht=scontent.fklo1-1.fna&oh=03_AdTN7SIhX8dybPYDHyna8Cpy8bHvIt0z5U-xVfD6fRVJvw&oe=656C811C" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                    <img src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/371539873_277858728569906_2735541558148720529_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=q3YD0dKVazkAX-9Vgsb&_nc_ht=scontent.fklo1-1.fna&oh=03_AdSL80kwH_25UajdnV_MKjXcUHy7SszMna-cRIMK7EpVmA&oe=656C9104" alt="Placeholder image"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    )
}

export default HairStyles;

function Home() {
    return (
        <div className="column" id="home">
            <div className="store-bg" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/384549244_687622209998715_1477709579563050526_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=57kGIBEOAt0AX80hfc_&_nc_ht=scontent.fklo1-1.fna&oh=03_AdT8ERA1RxsvJYAEjmTZ6US2GvhHBsfeQ_2YFRN9vLkKEQ&oe=656C4CE5')"}}>
                <div className="container">
                    <div className="columns is-half">
                        <div className="column first-column">
                            <h1>SALAZAR<br/>GENTS<br/>SALON</h1>
                            <br/>
                            <h2>Opens 9AM - 11PM</h2>
                            <br/>
                            <button className="button" disabled>Discover More</button>
                        </div>
                        {/* <div className="column second-column" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img className="store-pic float" src="https://scontent.fklo1-1.fna.fbcdn.net/v/t1.15752-9/384549244_687622209998715_1477709579563050526_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=57kGIBEOAt0AX80hfc_&_nc_ht=scontent.fklo1-1.fna&oh=03_AdSpUNhl6czZBcLJ4i4uLPaWKW8_VMEMxpHLK7Z_Aw1Yrg&oe=656C8525" width={257}/>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

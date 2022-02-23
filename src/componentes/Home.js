import './Home.css';


function Home() {

    return (

        <body>
        <h1>Econotravel</h1>
        <div className="wrap">
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card1"></div>
                    <div className="atras">
                        <p>Montaña</p>
                    </div>
                </div>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card2"></div>
                    <div className="atras">
                        <p>Mar</p>
                    </div>
                </div>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card3"></div>
                    <div className="atras">
                        <p>Jardines</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="wrap">
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card4"></div>
                    <div className="atras">
                        <p>Bicicletas
                        </p>
                    </div>
                </div>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card5"></div>
                    <div className="atras">
                        <p>Historia</p>
                    </div>
                </div>
            </div>
            <div className="tarjeta-wrap">
                <div className="tarjeta">
                    <div className="adelante card6"></div>
                    <div className="atras">
                        <p>Museos</p>
                    </div>
                </div>
            </div>
        </div>
        </body>


    )
}




export default Home;

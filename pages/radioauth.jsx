import HeaderAuth from "../components/HeaderAuth/HeaderAuth";
import Script from "next/script";
import Title from "../components/title";

export default function RadioAuth(props) {

    return (

        
        <>
            <HeaderAuth />
            <div style={{marginTop: '30px', marginLeft: '6.5vw', marginBottom: '30px'}}><Title title="Радио"/></div>
                <div style={{marginTop: '20vh'}} className="RP_player_5 horizontal"><div className="rp-header">
                    <a href="#">Радио</a>
                </div>
            </div>

            <Script type="text/javascript" src="https://yandex.st/jquery/1.8.2/jquery.min.js"></Script>
            <Script async type="text/javascript" src="https://radiopotok.ru/f/script5/dc6a6489640ca02b0d42dabeb8e46bb7.js" charset="UTF-8"></Script>
        </>
    )
}


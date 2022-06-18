import { TextField } from "@mui/material";
import Title from "../components/title";
import HeaderAuth from "../components/HeaderAuth/HeaderAuth";
import Footer from '../components/Footer';

export default function Search(props) {

    return(
        <>
        <HeaderAuth />
            <div style={styleContainer}>
                <div style={{marginTop: '30px', marginLeft: '6.5vw', marginBottom: '30px'}}><Title title="Поиск"/></div>

                 <p style={{textAlign: 'center'}}><TextField id = 'filled-basic' label = 'Поиск' variant = 'filled' style={searchStyle}/></p>

                 <div style={containerDivStyle}>
                    <h1 style={h1Style}>Популярное</h1>
                    <div style={aContainer}>
                        <a style={aStyle} href="#">The Beatles</a>
                        <a style={aStyle} href="#">Jazz</a>
                        <a style={aStyle} href="#">Кино</a>
                        <a style={aStyle} href="#">Высоцкий</a>
                    </div>
                 </div>
            </div>

            <Footer />
        </>
    );
}

const styleContainer = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30vh'
}

const searchStyle = {
    width: '81vw',
}

const containerDivStyle = {

}

const aContainer = {
    display: 'flex',
    flexDirection: 'column'
}

const h1Style = {
    textAlign: 'center',
    marginTop: '100px',
    marginBottom: '30px'
}

const aStyle = {
    fontSize: '20px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1vh'
}
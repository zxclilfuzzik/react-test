import Header from "../components/HeaderUI/Header"
import Link from "next/link"
import Footer from '../components/Footer';


export default function Error() {
    return(
        <>
            <Header />

            <div style={containerStyle}>
                <h1 style={ErrorStyle}>404</h1>

                <Link href="/"><p style={textButton}>Вернуться домой?</p></Link>
            </div>
        </>
    )
}

const containerStyle = {
    marginTop: '35vh'
}

const ErrorStyle = {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'black',
    fontWieght: 'bold',
    fontSize: '200px'
}

const textButton = {
    color: 'black',
    fontSize: '30px',
    fontWieght: 'bold',
    textAlign: 'center'
}
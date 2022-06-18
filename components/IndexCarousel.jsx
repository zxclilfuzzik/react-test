import Carousel from 'react-bootstrap/Carousel';
import Head from 'next/head';
import Script from 'next/script';

export default function IndexCarousel(props) {

    return(

    <>
        <Head>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            />
        </Head>

            <Script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></Script>

            <Script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></Script>

        <Carousel style={styleIMGCarousel}>
            <Carousel.Item style={styleCarousel}>
                <img
                style={styleIMGCarousel}
                src="/slide1.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item style={styleCarousel}>
                <img
                style={styleIMGCarousel}
                src="/slide2.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item style={styleCarousel}>
                <img
                style={styleIMGCarousel}
                src="/slide3.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </>
    )
}

const styleCarousel = {
    width: '100vw',
    hieght: '100vh'
}

const styleIMGCarousel = {
    width: '100vw',
    hieght: '600px',
}



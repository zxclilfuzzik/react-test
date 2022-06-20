import { Button } from "@mui/system";
import HeaderAuth from '../components/HeaderAuth/HeaderAuth'
import { ParallaxLayer, Parallax } from "@react-spring/parallax";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Artist(props) {

    return (
        <>
            <HeaderAuth />
            <Parallax pages={2} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={2.5} factor={1}>
                    <div style={{position: 'relative'}}>
                        <img style={cover} src="/beatles.jpeg" alt="" />
                        <h1 style={{marginTop: '-12vh',marginLeft: '5vw', color: 'white', fontSize: '80px', fontWeight: 'bold'}}>The Beatles</h1>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2.5} factor={2}>
                    <h1 style={{textAlign: 'center', marginBottom: '20px', fontSize: '50px', fontWieght: 'bold'}}>Дискография</h1>
                    <div style={{justifyContent: 'center'}}>
                        <div style={{justifyContent: 'center', display: 'flex'}}>
                            <div style={styleImg}>
                                <Image
                                src="/cover1.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>

                            <div style={styleImg}>
                                <Image
                                src="/cover4.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>

                            <div style={styleImg}>
                                <Image
                                src="/beatlescover1.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>
                        </div>

                        <div style={{justifyContent: 'center', display: 'flex'}}>
                            <div style={styleImg}>
                                <Image
                                src="/beatlescover2.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>

                            <div style={styleImg}>
                                <Image
                                src="/cover2.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>

                            <div style={styleImg}>
                                <Image
                                src="/cover3.jpeg"
                                alt="Picture of the author"
                                width={300}
                                height={300}
                                style={styleImg}
                                />
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

const cover = {
    width: '100vw',
    height: '100vh'
}

const styleImg = {
  marginLeft: '5vw',
  marginRight: '5vw',
  borderRadius: '20px',
  marginTop: '4vh'
}
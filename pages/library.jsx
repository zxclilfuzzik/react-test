import Title from "../components/title";
import Image from "next/image";
import HeaderAuth from '../components/HeaderAuth/HeaderAuth';
import Footer from "../components/Footer";

export default function Library(props) {

    return(
        <>
        <HeaderAuth />
            <div style={container}>
                <div style={{marginTop: '30px', marginLeft: '6.5vw', marginBottom: '30px'}}>
                    <Title title="Библиотека"/>
                </div>
                <div>
                    <div style={gridsStyle}>
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

                    <div style={gridsStyle}>
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
                            src="/cover5.jpeg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            style={styleImg}
                            />
                        </div>

                        <div style={styleImg}>
                            <Image
                            src="/cover6.jpeg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            style={styleImg}
                            />
                        </div>
                    </div>

                    <div style={gridsStyle}>
                        <div style={styleImg}>
                            <Image
                            src="/beatlescover1.jpeg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            style={styleImg}
                            />
                        </div>

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
                            src="/beatlescover3.jpeg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            style={styleImg}
                            />
                        </div>
                    </div>

                     <div style={gridsStyle}>
                        <div style={styleImg}>
                            <Image
                            src="/beatlescover4.jpeg"
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

                        <div style={styleImg}>
                            <Image
                            src="/cover5.jpeg"
                            alt="Picture of the author"
                            width={300}
                            height={300}
                            style={styleImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

const container = {
    marginBottom: '90px',
    justifyContent: 'center',
}

const gridsStyle = {
    display: 'flex',
    justifyContent: 'center',
}

const styleImg = {
  marginLeft: '5vw',
  marginRight: '5vw',
  borderRadius: '20px',
  marginTop: '4vh'
}


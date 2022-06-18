import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/HeaderUI/Header';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import  IndexCarousel  from '../components/IndexCarousel';
import { TextField, Typography, Button } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';

export default function Home(props) {

  const [artist, setArtist] = useState("");
  const [track, setTrack] = useState("");


  	async function sendAdd(event) {
      if (artist && track) {
            const response = await fetch('http://localhost:1337/api/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            artist,
            track,
          }),
        })

        const data = await response.json()

        if (data.status === 'ok') {
          alert("Заявка отправлена!")
        }
      }
	}

  return (
    <>
      <Header />
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <ParallaxLayer offset={0} speed={2.5} factor={1} style={parallaxStyleOffSetZero}>
          <IndexCarousel />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2} factor={4} style={{backgroundColor: '#ff6d6d'}} />

        <ParallaxLayer offset={1} speed={0.5} factor={1} style={parallaxStyleOffSetOne}>
          <div style={newsContainerStyle}>
             <Typography style={styleTitle}>Новинки</Typography>
            <div style={gridStyle}>
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

              <div style={gridStyle}>
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

              <form noValidate style={newsContainerStyle}>
                  <Typography variant="h2" align="center" style={typStyle}>Добавить трек?</Typography>
                  <TextField id="outlined secondary" label="Артист" variant="outlined" color="secondary" style={fieldForm}
                  onChange = {(e) => setArtist(e.target.value)}
                  />
                  <TextField id="outlined secondary" label="Трек" variant="outlined" color="secondary" style={fieldForm}
                  onChange = {(e) => setTrack(e.target.value)}
                  />
                  <Button variant="contained" size="large" style={buttonStyle} onClick={(e) => sendAdd(artist, track)}>
                    Отправить
                  </Button>
              </form>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={3} speed={0.5} factor={4} style={{backgroundColor: 'black'}}>
          <div style={styleFooterContainer}>
            <div style={{display: 'flex'}}>
              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '12vw', marginRight: '8vw', marginTop: '50vh'}}>
                <Link href="/"><p style={styleFooterText}>Правовая информация</p></Link>
                <Link href="/"><p style={styleFooterText}>О нас</p></Link>
                <Link href="/"><p style={styleFooterText}>Специальные возможности</p></Link>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10vw', marginRight: '8vw', marginTop: '50vh'}}>
                <Link href="/"><p style={styleFooterText}>Для авторов</p></Link>
                <Link href="/"><p style={styleFooterText}>Творческая студия</p></Link>
                <Link href="/"><p style={styleFooterText}>Конфидициальность</p></Link>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10vw', marginRight: '8vw', marginTop: '50vh'}}>
                <Link href="/"><p style={styleFooterText}>Авторское право</p></Link>
                <Link href="/"><p style={styleFooterText}>Поддержка</p></Link>
                <Link href="/"><p style={styleFooterText}>Поиск</p></Link>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </>
  )
}


const parallaxStyleOffSetOne = { 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
}

const parallaxStyleOffSetZero = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const styleFooterText = {
  color: 'white',
  fontSize: '20px',
}

const styleFooterContainer = {
  display: 'flex'
}

const styleFooterContent = {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '150px',
  textAlign: 'center'
}

const styleTitle = {
  fontSize: '50px',
  color: 'white',
  textAlign: 'center',
  marginTop: '100vh',
  marginBottom: '5vh'
}

const newsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center'
}

const gridStyle = {
  display: 'flex'
}

const styleImg = {
  marginLeft: '5vw',
  marginRight: '5vw',
  borderRadius: '20px',
  marginTop: '4vh'
}

const buttonStyle = {
    marginTop: '6vh',
    maxWidth: 300,
    minWidth: 200,
    backgroundColor: 'white',
    color: 'black'
}

const fieldForm = {
  marginTop: '7vh',
  maxWidth: 700,
  minWidth: 500
}

const typStyle = {
  color: 'white',
  fontWeight: '500',
  fontSize: '50px',
  marginTop: '15vh'
}

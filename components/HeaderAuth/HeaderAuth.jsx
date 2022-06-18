import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function HeaderAuth(props) {

    return(
        <>
            <AppBar position='fixed' style={styleAppBar}>
                <Toolbar>
                    <Link href="/">
                        <Typography style={styleText}>
                        {props.title || "BLUEBERRY"} 
                    </Typography>

                    </Link>
                    <Link href='/'>
                        <Typography style={styleTitleText}>
                            Главная
                        </Typography>
                    </Link>
                    <Link href="/library">
                        <Typography style={styleTitleText}>
                            Библиотека
                        </Typography>
                    </Link>
                    <Link href="/radio">
                        <Typography style={styleTitleText}>
                            Радио
                        </Typography>
                    </Link>
                    <Link href="/search">
                        <Typography style={styleTitleText}>
                            Поиск
                        </Typography>
                    </Link>
                        <div style={buttonContainer}>
                            <Link href="/login"><Button variant="contained" style={styleButton}>Выйти</Button></Link>
                        </div>

                </Toolbar>
            </AppBar>

            Header.
        </>
    )
}


const styleAppBar = {
    backgroundColor: 'black'
}

const styleText = {
    color: 'white',
    fontSize: '25px',
    fontWeigt: 'bold',
    marginLeft: '2vw'
}

const styleTitleText = {
    color: 'white',
    fontSize: '20px',
    fontWeigt: 'bold',
    marginLeft: '10vw'
}

const styleButton = {
    backgroundColor: 'white',
    color: 'black',
    fontWeigt: 'bold',
    marginLeft: '10vw'
}

const buttonContainer = {
    marginLeft: '1vh'
}
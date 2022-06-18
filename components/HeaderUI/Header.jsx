import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header(props) {

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
                    <Link href="/help">
                        <Typography style={styleTitleText}>
                            Поддержка
                        </Typography>
                    </Link>
                    <Link href='/'>
                        <Typography style={styleTitleText}>
                            Блог
                        </Typography>
                    </Link>
                        <div style={btnContainer}>
                            <Link href="/login"><Button variant="contained" style={styleButton}>Войти</Button></Link>
                            <Link href="/register"><Button variant="contained" style={styleButton}>Регистрация</Button></Link>
                        </div>
                </Toolbar>
            </AppBar>
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
    marginLeft: '5vw',
}

const btnContainer = {
    marginLeft: '50px'
}
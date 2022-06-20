import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

export default function HeaderAuth(props) {

    return(
        <>
            <AppBar position='fixed' sx={{backgroundColor: 'black'}}>
                <Toolbar>
                    <Typography style={styleText} sx={{flexGrow: 1}}>BLUEBERRY</Typography>

                    <Link href='/'>
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Главная
                        </Typography>
                    </Link>
                    <Link href="/library">
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Библиотека
                        </Typography>
                    </Link>
                    <Link href="/radioauth">
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Радио
                        </Typography>
                    </Link>
                    <Link href="/search">
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Поиск
                        </Typography>
                    </Link>
                    <Link href="/login">
                       <Button style={styleButton} variant="contained">Выйти</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

const styleText = {
    color: 'white',
    fontSize: '25px',
    fontWeigt: 'bold',
}

const styleTitleText = {
    color: 'white',
    fontSize: '20px',
    fontWeigt: 'bold'
}

const styleButton = {
    backgroundColor: 'white',
    color: 'black',
    fontWeigt: 'bold',
    marginRight: '50px'
}
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header(props) {

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
                    <Link href="/help">
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Поддержка
                        </Typography>
                    </Link>
                    <Link href="/radio">
                        <Typography sx={{flexGrow: 2}} style={styleTitleText}>
                            Радио
                        </Typography>
                    </Link>
                    <Link href="/login">
                        <Button sx={{marginRight: '20px'}} style={styleButton} variant="contained">Войти</Button>
                    </Link>
                    <Link href="/register">
                       <Button sx={{marginRight: '50px'}} style={styleButton} variant="contained">Регистрация</Button>
                    </Link>
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
    marginLeft: '1vw',
}

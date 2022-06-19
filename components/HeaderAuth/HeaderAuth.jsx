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
                    <Link href="/radio">
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



            // <AppBar position='fixed' style={styleAppBar}>
            //     <Toolbar>
            //         <Link href="/">
            //             <Typography style={styleText}>
            //             {props.title || "BLUEBERRY"} 
            //         </Typography>

                    // </Link>
                    // <Link href='/'>
                    //     <Typography style={styleTitleText}>
                    //         Главная
                    //     </Typography>
                    // </Link>
                    // <Link href="/library">
                    //     <Typography style={styleTitleText}>
                    //         Библиотека
                    //     </Typography>
                    // </Link>
                    // <Link href="/radio">
                    //     <Typography style={styleTitleText}>
                    //         Радио
                    //     </Typography>
                    // </Link>
                    // <Link href="/search">
                    //     <Typography style={styleTitleText}>
                    //         Поиск
                    //     </Typography>
                    // </Link>
            //             <div style={buttonContainer}>
            //                 <Link href="/login"><Button variant="contained" style={styleButton}>Выйти</Button></Link>
            //             </div>

            //     </Toolbar>
            // </AppBar>
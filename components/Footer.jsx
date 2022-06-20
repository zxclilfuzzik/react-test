import Link from "next/link";

export default function Footer(props) {

    return(
        <>
            <div style={styleFooterContainer}>
                <div style={{display: 'flex'}}>
                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '12vw', marginRight: '8vw', marginTop: '20px'}}>
                    <Link href="/"><p style={styleFooterText}>Правовая информация</p></Link>
                    <Link href="/"><p style={styleFooterText}>О нас</p></Link>
                    <Link href="/"><p style={styleFooterText}>Специальные возможности</p></Link>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10vw', marginRight: '8vw', marginTop: '20px'}}>
                    <Link href="/"><p style={styleFooterText}>Для авторов</p></Link>
                    <Link href="/"><p style={styleFooterText}>Творческая студия</p></Link>
                    <Link href="/"><p style={styleFooterText}>Конфидициальность</p></Link>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', marginLeft: '10vw', marginRight: '8vw', marginTop: '20px'}}>
                    <Link href="/"><p style={styleFooterText}>Авторское право</p></Link>
                    <Link href="/"><p style={styleFooterText}>Поддержка</p></Link>
                    <Link href="/"><p style={styleFooterText}>Поиск</p></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

const styleFooterText = {
  color: 'white',
  fontSize: '20px',
}

const styleFooterContainer = {
  width: '100vw',
  height: '200px',
  backgroundColor: 'black'
}
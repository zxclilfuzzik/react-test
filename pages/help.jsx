import { TextField, Button } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/HeaderUI/Header";
import { useState } from "react";
import * as React from "react";


export default function Help(props) {

    const [email, setEmail] = useState("")
    const [problems, setProblems] = useState("")

    async function sendHelp(event) {
        if (email && problems) {
            const response = await fetch('http://localhost:1337/api/help', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    problems,
                    email,
                    }),
                })

                const data = await response.json()

                if (data.status === 'ok') {
                    alert('Отправлено успешно!')
                }
        }
	}

    return(
        <>
            <Header/>
            <div style={formContainer}>
                <div style={imgContainer}>
                    <img style={imgContainer} src="/help.jpg" alt="" layout='fill'/>
                </div>

                <div style={{marginTop: '10vh'}}>
                    <div style={liStyle}>
                        <a href="#" style={aStyle}>Часто задаваемые вопросы</a>
                        <a href="#" style={aStyle}>Специальные возможности</a>
                        <a href="#" style={aStyle}>Правовая информация</a>
                        <a href="#" style={aStyle}>Контакты</a>
                    </div>
                </div>

                <div style={containerStyle}>
                    <form style={containerStyle} noValidate>
                        <h1 style={h1}>Оставьте заявку</h1>
                        <TextField style={textFieldStyle} id="otline-basic" label="Почта" variant="outlined" required
                        onChange = {(e) => setEmail(e.target.value)}
                        />
                        <TextField style={textFieldStyle} id="otline-basic" label="Ваша проблема" variant="outlined" required
                        onChange = {(e) => setProblems(e.target.value)}
                        />
                        <Button onClick={(e) => sendHelp(email, problems)} style={btnStyle} variant="contained" size="large">
                            Отправить
                        </Button>
                    </form>
                </div>
            </div>
            <div style={{marginTop: '200px'}}>
                <Footer />
            </div>
        </>
    )
}

const imgContainer = {
    width: '100vw',
    height: '70vh',
    paddingTop: '20px'
}

const form = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '900px',
    minWidth: '700px'
}

const liStyle = {
    display: 'flex',
    textDecoration: 'none',
    listStyle: 'none',
    color: 'black',
    textAlign: 'center'
}

const textFieldStyle = {
        marginTop: '7vh',
        maxWidth: 700,
        minWidth: 500
}

const formContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
}

const aStyle = {
    marginLeft: '4vw',
    marginRight: '4vw',
    color: 'black',
    fontSize: '20px',
    marginBottom: '50px'
}

const h1 = {
    textAlign: 'center',
    color: 'black',
    fontWieght: 'bold',
    marginTop: '100px'
}

const btnStyle = {
        marginTop: '6vh',
        maxWidth: 300,
        minWidth: 200,
        backgroundColor: 'black',
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}
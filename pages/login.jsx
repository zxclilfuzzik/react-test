import { TextField, Button, Typography, Alert } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Script from 'next/script'

export default function LoginPage(props) {
 
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        async function loginUser(event) {

		const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			window.location.href = '/library'
		} else {
			alert('Проверьте email и пароль!')
		}
	}

return (
        <>
                <Typography variant="h2" align="center" style={titleStyle}>Вход</Typography>
                <div style={containerStyle}>
                        <form noValidate style={containerStyle}>
                                <TextField id="otline-basic" label="Логин" variant="outlined" required style={fieldForm}
                                onChange = {(e) => setEmail(e.target.value)}
                                />

                                <TextField type="password" id="otline-basic" label="Пароль" variant="outlined" required style={fieldForm}
                                onChange = {(e) => setPassword(e.target.value)}
                                />

                                <Link href="/register"><Typography style={linkStyle}>Нет аккаунта?</Typography></Link>

                                <Button onClick={(e) => {loginUser(email, password)}} variant="contained"
                                size="large" style={buttonStyle}>
                                        Войти
                                </Button>
                        </form>
                </div>
        </>
    );
}


const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
}

const titleStyle = {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '20vh',
}

const buttonStyle = {
        marginTop: '6vh',
        maxWidth: 300,
        minWidth: 200,
        backgroundColor: 'black',
        marginBottom: '2vh'
}

const fieldForm = {
        marginTop: '7vh',
        maxWidth: 700,
        minWidth: 500
}

const titleButtonStyle = {
    marginTop: '10px',
    marginBottom: -4,
    color: 'black'
}

const linkStyle = {
    textAlign: 'center',
    fontSize: '15px',
    color: 'black',
    marginTop: '2vh',
    fontWeight: 'bold'
}
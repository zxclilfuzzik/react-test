import { TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import * as React from 'react';

export default function Register(props) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");



	async function registerUser(event) {

		const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
            window.location.href = '/login'
		}
	}

    return (
        <>
            <Typography variant="h2" align="center" style={titleStyle}>Регистрация</Typography>

            <div style={containerStyle}>
                <form noValidate autoComplete="off" style={containerStyle}>


                    <TextField id="otline-basic" label="Email" variant="outlined" required style={fieldForm}
                    onChange = {(e) => setEmail(e.target.value)}
                    />

                    <TextField id="otline-basic" label="Имя" variant="outlined" required style={fieldForm}
                    onChange = {(e) => setName(e.target.value)}
                    />

                    <TextField id="otline-basic" label="Имя пользователя" variant="outlined" required style={fieldForm}
                    onChange = {(e) => setLogin(e.target.value)}
                    />

                    <TextField type="password" id="otline-basic" label="Пароль" variant="outlined" required style={fieldForm}
                    onChange = {(e) => setPassword(e.target.value)}
                    />

                    <TextField type="password" id="otline-basic" label="Повторите пароль" variant="outlined" required style={fieldForm}
                    onChange = {(e) => setPasswordConfirm(e.target.value)}
                    />

                    <Link href="/login"><Typography style={linkStyle}>Уже есть аккаунт?</Typography></Link>

                    <Button onClick={(e) => {registerUser(name, email, password)}} variant="contained" size="large" style={buttonStyle}>
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
        </>
    )
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}

const titleStyle = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '10vh',
}

const buttonStyle = {
    marginTop: '2vh',
    maxWidth: 300,
    minWidth: 200,
    backgroundColor: 'black',
    marginBottom: '10vh',
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
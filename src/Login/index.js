import { Box, Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import { useStyles } from "./styles";

const Login = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [type, setType] = useState('password')
    const [user, setUser] = useState([])
    const { setIsLog } = useContext(LoginContext)

    const showPass = () => {
        setType(type === 'password' ? 'text' : 'password')
    }
    const handleAuthorization = (userEmail, userPassword) => {

        const users = JSON.parse(localStorage.getItem('user'))
        const emailArr = users.map(({ email }) => email)

        if (pathname === '/register') {
            if ((emailArr.indexOf(userEmail)) === -1) {
                if (password === repeatedPassword) {
                    console.log('email = ', email, 'password =', password)
                    const tempUser = { email: email, password: password }
                    const users = JSON.parse(localStorage.getItem('user'))
                    setUser(
                        [...user, tempUser]
                    )
                    localStorage.setItem('user', users ? JSON.stringify([...users, tempUser]) : JSON.stringify([tempUser]))
                    setIsLog(true)
                    localStorage.setItem('isLog', 'true')
                    navigate('/')
                    alert('Вы зарегестрированы')
                }
                else {
                    console.log('Wrong password')
                    alert('Wrong password')
                }
            }
            else alert('Такой логин уже существует')
        }
        else {
            if ((emailArr.indexOf(userEmail)) !== -1) {
                const idx = emailArr.indexOf(userEmail)
                if (users[idx].password === userPassword) {
                    alert('Вы вошли в аккаунт')
                    setIsLog(true)
                    localStorage.setItem('isLog', 'true')
                    navigate('/')
                }
                else alert('Неверный пароль')
            }
            else alert('Неверный эмейл')
        }
    }
    return (
        <Box>
            <Typography className={classes.page_head}>Войти</Typography>
            <Container className={classes.login_cont}>
                <Box className={classes.log_card}>
                    <TextField value={email} name='email' type='email' label='Логин' variant="outlined" className={classes.textf}
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField value={password} name='password' type={type} label='Пароль' variant="outlined" className={classes.textf}
                        onChange={(e) => setPassword(e.target.value)} />
                    {pathname === '/register' && <TextField value={repeatedPassword} name='repeatedPassword' type={type} label='Повторите пароль' variant="outlined" className={classes.textf}
                        onChange={(e) => setRepeatedPassword(e.target.value)} />}
                    <Button className={classes.log_b} onClick={showPass}>&#128065;</Button>
                    <Button onClick={() => handleAuthorization(email, password)} className={classes.log_b2} disabled={!(password && email)}>{pathname === '/login' ? 'Логин' : 'Зарегестрироваться'}</Button>
                    <Button className={classes.log_b3} onClick={() => { navigate(pathname === '/login' ? '/register' : '/login'); setEmail(''); setPassword(''); setRepeatedPassword('') }}>{pathname === '/login' ? 'Создать аккаунт ' : 'Войти в аккаунт'}</Button>
                </Box>
            </Container>
        </Box>
    )
}
export default Login
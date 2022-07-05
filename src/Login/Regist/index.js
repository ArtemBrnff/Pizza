import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./styles";

const Regist = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatedPassword, setRepeatedPassword] = useState('')
    const [type, setType] = useState('password')
    const [user, setUser] = useState([])

    const showPass = () => {
        setType(type === 'password' ? 'text' : 'password')
    }
    const register = () => {
        if (password === repeatedPassword) {
            console.log('email = ', email, 'password =', password)
        }
        else {
            console.log('Wrong password')
        }
        setUser(
            [...user, {
                email: email,
                password: password
            }],
            localStorage.setItem('user', JSON.stringify(user))
        )
    }

    return (
        <Box className={classes.log_card}>
            <TextField value={email} name='email' type='email' label='Логин' variant="outlined" className={classes.textf}
                onChange={(e) => setEmail(e.target.value)} />
            <TextField value={password} name='password' type={type} label='Пароль' variant="outlined" className={classes.textf}
                onChange={(e) => setPassword(e.target.value)} />
            <TextField value={repeatedPassword} name='repeatedPassword' type={type} label='Повторите пароль' variant="outlined" className={classes.textf}
                onChange={(e) => setRepeatedPassword(e.target.value)} />
            <Button className={classes.log_b} onClick={showPass}>&#128065;</Button>
            <Button className={classes.log_b2} onClick={register} disabled={!(password && repeatedPassword && email)}>Регистрация</Button>
        </Box>
    )
}
export default Regist
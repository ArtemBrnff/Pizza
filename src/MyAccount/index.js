import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";

const MyAccount = () => {
    const { setIsLog } = useContext(LoginContext)
    const navigate = useNavigate()

    const setAccount = () => {
        setIsLog(false)
        localStorage.setItem('isLog', '')
        navigate('/login')
    }
    return (
        <>
            <Button onClick={setAccount}>Выйти с аккаунта</Button>
        </>
    )
}
export default MyAccount
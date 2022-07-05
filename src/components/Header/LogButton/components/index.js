import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../../../../Context/LoginContext";
import { useStyles } from "./styles";

const LogButton = (props) => {
    const classes = useStyles()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { isLog } = useContext(LoginContext)
    return (
        <>
            {(isLog) ? <Button className={classes.log_butt}
                onClick={() => navigate('/myaccount')} style={pathname === '/myaccount' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null}>Account</Button> :
                <Button className={classes.log_butt} onClick={() => navigate('/login')} style={pathname === '/login' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null}>
                    Логин
                </Button>}

        </>
    )
}
export default LogButton
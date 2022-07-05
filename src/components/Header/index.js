import { AppBar, Badge, Box, Button, Toolbar, Typography } from "@material-ui/core"
import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ShCartContext } from "../../Context"
import LogButton from "./LogButton/components"
import { useStyles } from "./styles"


const Header = (props) => {
    const classes = useStyles()
    const { pizzasState } = useContext(ShCartContext)
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <AppBar className={classes.appbar}>
            <Box className={classes.appbox}>
                <Toolbar className={classes.toolbar}>
                    <Typography onClick={() => navigate('/')} className={classes.appbar_typography}>Pizza Time</Typography>
                    <Box className={classes.menu_button}>
                        <Button style={pathname === '/discounts' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null} onClick={() => navigate('/discounts')} className={classes.appbar_button}>Скидки</Button>
                        <Button style={pathname === '/pizzas' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null} onClick={() => navigate('/pizzas')} className={classes.appbar_button}>Пиццы</Button>
                        <Button style={pathname === '/sets' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null} onClick={() => navigate('/sets')} className={classes.appbar_button}>Наборы</Button>
                        <Button style={pathname === '/shoppingcart' ? { color: '#fff', textShadow: '0px 0px 4px #fff' } : null} onClick={() => navigate('/shoppingcart')} className={classes.appbar_button}>
                            {pizzasState ? <Badge badgeContent={pizzasState.length} color='error'>Корзина</Badge> : 'Корзина'}
                        </Button>
                    </Box>
                    <LogButton />
                </Toolbar>
            </Box>
        </AppBar>
    )
}
export default Header
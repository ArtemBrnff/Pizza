import { Box, Button, Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import React, { useContext } from "react"
import { useLocation } from "react-router-dom";
import { ShCartContext } from "../../../../Context";
import { useStyles } from "./styles";

const CardContainer = (props) => {
    const { pathname } = useLocation()
    const classes = useStyles()
    const { addToCart, removeFromCart } = useContext(ShCartContext)
    let pizzaPrice = ''
    let oldPrice = ''

    if (props.item.new_price) {
        pizzaPrice = props.item.new_price
        oldPrice = props.item.old_price
    }
    else (
        pizzaPrice = props.item.price
    )
    return (
        <Card className={classes.card} >
            <Box className={classes.shadow} />
            <Box className={classes.card_box}>
                <CardMedia
                    component="img"
                    width='200px'
                    height='200px'
                    image={props.item.url}
                />
                <Typography className={classes.pizza_name}>{props.item.name}</Typography>
                <Typography>Вес: {props.item.weight}</Typography>
                <Typography>Состав</Typography>
                <CardContent>
                    <Typography>
                        {props.item.compound}
                    </Typography>
                </CardContent>
            </Box>
            <Box className={classes.card_button_box}>
                <Box className={classes.price_box}>
                    {oldPrice && <Typography component='s' className={classes.price_typ}>{oldPrice}грн</Typography>}
                    <Typography className={classes.price_typ}>{pizzaPrice}грн</Typography>
                </Box>
                {pathname !== '/shoppingcart' ? <Box className={classes.button_box}>
                    <Button onClick={() => addToCart(props.item)} className={classes.card_button}>В корзину</Button>
                </Box> : <Button className={classes.card_button} onClick={() => removeFromCart(props.item)}>Убрать</Button>}
            </Box>
        </Card>
    )
}
export default CardContainer

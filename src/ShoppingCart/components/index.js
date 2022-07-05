import { Box, Container, TextField, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ShCartContext } from "../../Context";
import CardContainer from "../../Popular/components/CardContainer/components";
import { useStyles } from "./styles";

const ShoppingCart = () => {
    const { pizzasState } = useContext(ShCartContext)
    const classes = useStyles()
    const summ = () => {
        let sum = 0
        pizzasState.map((item) => {
            return sum += item.price || item.new_price
        })
        return (
            sum
        )
    }

    return (
        <Box className={classes.sets_box}>
            <Typography component='h2' className={classes.page_head}>Оформление заказа</Typography>
            <Container className={classes.d_container}>
                {pizzasState.map((item, i) => <CardContainer key={i} item={item} />)}
            </Container>
            <Container className={classes.ordering}>
                <Box>
                    <Typography component='h3'>Контакты</Typography>
                    <TextField className={classes.input_name} variant='outlined' label='Имя' />
                    <TextField className={classes.input_name} variant='outlined' label='Фамилия' />
                    <TextField className={classes.input_name} variant='outlined' label='Имя' />
                </Box>
                <Box>
                    <Typography component='h3'>Контакты</Typography>
                    <TextField className={classes.input_name} variant='outlined' />
                    <TextField className={classes.input_name} variant='outlined' />
                    <TextField className={classes.input_name} variant='outlined' />
                    <TextField className={classes.input_name} variant='outlined' />
                    <TextField className={classes.input_name} variant='outlined' />
                </Box>
                <Box>
                    <Typography component='h3'>Оплата</Typography>
                    <Box>
                        <Typography component='h3'>К оплате</Typography>
                        <Typography>{summ()}грн</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default ShoppingCart
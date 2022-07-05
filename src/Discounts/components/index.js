import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CardContainer from "../../Popular/components/CardContainer/components";
import { useStyles } from "./styles";

const Discounts = () => {
    const classes = useStyles()
    const [discounts] = useState([
        {
            name: 'BBQ', compound: "Ковбаски баварські, Гриби, Моцарела, Соус Альфредо",
            url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%91%D0%BE%D1%81%D1%82%D0%BE%D0%BD_300dpi-thumbnail-960x960-70.jpg',
            old_price: 120, new_price: 90,
            weight: '360 г',
            id: 4
        }, {
            name: 'Піца Техас', compound: "Ковбаски баварські, Кукурудза, Гриби, Цибуля, Моцарела, Соус барбекю",
            url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-thumbnail-960x960-70.jpg',
            old_price: 150, new_price: 110,
            weight: '370 г',
            id: 5
        }, {
            name: 'Піца Бостон', compound: "Ковбаски баварські, Гриби, Моцарела, Соус Альфредо",
            url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg',
            old_price: 140, new_price: 100,
            weight: '340 г',
            id: 6
        }, {
            name: 'ПІца Мангеттен', compound: "(подвійна порція грибів), Гриби, Пепероні, Моцарела, Соус Альфредо",
            url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_category/2021/07/27/Manhatten_slice_collageweb-min-thumbnail-960x960-70.jpg',
            old_price: 130, new_price: 110,
            weight: '350 г',
            id: 7
        },
    ])
    return (
        <Box>
            <Typography component='h2' className={classes.page_head}>Скидки</Typography>
            <Container className={classes.disc_cont}>
                {discounts.map((item) => <CardContainer item={item} key={item.id} />)}
            </Container>
        </Box>
    )
}
export default Discounts
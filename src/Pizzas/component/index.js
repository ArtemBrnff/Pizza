import { Box, Container, Typography } from "@material-ui/core";
import React, { useState } from "react";
import CardContainer from "../../Popular/components/CardContainer/components";
import { useStyles } from "./styles";

const Pizzas = () => {
    const classes = useStyles()
    const [pizzas] = useState(
        [
            {
                name: 'Піца Мюнхенська Делюкс', compound: "Ковбаски баварські, Шинка, Помідори, Гірчиця домашня, Моцарела, Сосиски білі, Соус барбекю",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%91%D0%BE%D1%81%D1%82%D0%BE%D0%BD_300dpi-thumbnail-960x960-70.jpg',
                price: 150,
                weight: '360 г',
                id: 8
            },
            {
                name: 'Піца Спайсі', compound: "Бекон, Халапеньо, Пепероні, Помідори, Моцарела, Соус Domino's",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%A1%D0%BF%D0%B0%D0%B9%D1%81%D0%B8_300dpi-thumbnail-960x960-70.jpg',
                price: 120,
                weight: '340 г',
                id: 9
            },
            {
                name: 'Піца Американа', compound: "Бекон, Шинка, Пепероні, Моцарела, Соус Domino's",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%B0_300dpi-thumbnail-960x960-70.jpg',
                price: 110,
                weight: '330 г',
                id: 10
            },
            {
                name: 'Піца Тунець', compound: "Моцарела, Соус Domino's, Тунець",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/03/30/%D0%A2%D1%83%D0%BD%D0%B5%D1%86_300dpi-thumbnail-960x960-70.jpg',
                price: 120,
                weight: '340 г',
                id: 11
            },
            {
                name: "Піца П'ять Сирів", compound: "Пармезан, Бергадер Блю, Моцарела, Соус",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D1%8F%D1%82%D1%8C_%D1%81%D1%8B%D1%80%D0%BE%D0%B2_300dpi-thumbnail-960x960-70.jpg',
                price: 130,
                weight: '370 г',
                id: 12
            },
            {
                name: 'Піца Мітца', compound: "Бекон, Ковбаски баварські, Шинка, Пармезан, Пепероні, Моцарела, Соус Domino's",
                url: 'https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9C%D0%B8%D1%86%D1%86%D0%B0_300dpi-thumbnail-960x960-70.jpg',
                price: 130,
                weight: '340 г',
                id: 13
            },
        ]
    )
    return (
        <Box>
            <Typography component='h2' className={classes.page_head}>Пиццы</Typography>
            <Container className={classes.pizza_cont}>
                {pizzas.map((item) => <CardContainer item={item} key={item.id} />)}
            </Container>
        </Box>
    )
}
export default Pizzas
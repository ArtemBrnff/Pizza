import { Box, Button, Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CardContainer from "./CardContainer/components";
import ImageSlider from "./Slider";
import { useStyles } from "./styles";

const Popular = (props) => {
    const classes = useStyles()
    const [pizzas, setPizzas] = useState([
        {
            name: 'Чикен кебаб', compound: "Поливка (соус Burger), Курка, Соус Domino's, Гриби, Цибуля, Моцарела, Огірки мариновані",
            url: 'https://media-cdn.tripadvisor.com/media/photo-s/11/27/de/57/photo1jpg.jpg', price: 120, weight: '360 г',
            id: 1,
        },
        {
            name: 'Піца Карбонара', compound: "Соус Альфредо, Бекон, Шинка, Гриби, Цибуля, Моцарела",
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKlQkOZBe3cPAFYLkDTVqTAm7DMWYwNiuAQ&usqp=CAU', price: 130, weight: '340 г',
            id: 2
        },

    ]
    )

    const addPizza = () => {
        setPizzas([
            ...pizzas,
            {
                name: 'Піца Тоні Пепероні', compound: "Соус Domino's, Пепероні, Моцарела",
                url: 'https://instafood.com.ua/images/images/pitsa-pepperoni.jpg', price: 150, weight: '390 г',
                id: 3
            },
        ])
        // localStorage.setItem('pizza', JSON.stringify([
        //     ...pizzas,
        //     {
        //         name: 'Піца Тоні Пепероні', compound: "Соус Domino's, Пепероні, Моцарела",
        //         url: 'https://instafood.com.ua/images/images/pitsa-pepperoni.jpg', price: 150, weight: '390 г',
        //         id: 3
        //     },
        // ]))
    }

    // useEffect(() => {
    //     const pizza = localStorage.getItem('pizza')
    //     setPizzas(JSON.parse(pizza))
    // }, [])

    return (
        <Box>
            <Box className={classes.slider_box}>
                <ImageSlider />
            </Box>
            <Typography component='h2' className={classes.page_head}>Популярные пиццы</Typography>
            <Container className={classes.d_container}>
                {pizzas && pizzas.map((item) => <CardContainer item={item} key={item.id} />)}
            </Container>
            <Button onClick={addPizza}>Add new Pizza</Button>
        </Box>
    )
}
export default Popular
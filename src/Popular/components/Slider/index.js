import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Slider from "react-slick";
import { useStyles } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OneSLider from "./OneSlider";

const ImageSlider = () => {
    const [sets] = useState([
        {
            url: 'https://alberto.kz/images/promo/pizza_1-plus-1.jpg',
        },
        {
            url: 'https://sushilove.com.ua/image/catalog/promocodes/pizza.jpg',
        },
        {
            url: 'https://starwood.vn.ua/wp-content/uploads/2018/07/3-1.jpg',
        },
    ])
    const classes = useStyles()
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        customPaging: i => (
            <div className={classes.dot} />
        )
    };

    return (
        <Box>
            <Box className={classes.slider_img}>
                <Slider {...settings}>
                    {sets.map((item, i) => <OneSLider item={item} key={i} />)}
                </Slider>
            </Box>
        </Box>
    )
}
export default ImageSlider
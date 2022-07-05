import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";

const SetCard = (props) => {
    const classes = useStyles()
    return (
        <Box className={classes.setscard_box}>
            <img src={props.item.img} alt='' />
            <Box className={classes.sets_desc}>
                <Typography>
                    {props.item.desc}
                </Typography>
            </Box>
            <Button className={classes.sets_button}>В корзину</Button>
        </Box>
    )
}
export default SetCard
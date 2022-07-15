import { Box, Button, Typography } from "@material-ui/core";
import React, {FC} from "react";
import { ISets } from "../../../Interfaces/interfaces";
import { useStyles } from "./styles";

const SetCard: FC<ISets> = ({img, desc}) => {
    const classes = useStyles()
    return (
        <Box className={classes.setscard_box}>
            <img src={img} alt='' />
            <Box className={classes.sets_desc}>
                <Typography>
                    {desc}
                </Typography>
            </Box>
            <Button className={classes.sets_button}>В корзину</Button>
        </Box>
    )
}
export default SetCard
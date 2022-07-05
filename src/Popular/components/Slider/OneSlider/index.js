import { Box, Button } from "@material-ui/core"
import React from "react"
import { useStyles } from "./styles"

const OneSLider = (props) => {
    const classes = useStyles()
    return (
        <Box className={classes.slider_box}>
            <img alt="" src={props.item.url} />
            <Button className={classes.details_button}>Детали</Button>
        </Box>
    )
}
export default OneSLider
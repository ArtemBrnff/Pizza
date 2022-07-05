import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    details_button: {
        width: '110px !important',
        height: '50px !important',
        background: 'rgba(227, 227, 227, 0.8) !important',
        position: 'absolute !important',
        bottom: '100px !important',
        left: '50px !important',
        padding: '0px',
        borderRadius: '10px !important',
        transition: '.2s !important',
        cursor: 'pointer !important',
        '&:hover': {
            background: 'rgb(227, 227, 227) !important'
        }
    },
    slider_box: {
        position: 'relative !important'
    }
})
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    setscard_box: {
        width: '100%',
        height: '550px',
        borderTop: '1px solid #dedede',
        position: 'relative',
        '& img': {
            position: 'absolute',
            width: '40%',
            height: '75%',
            top: '10%',
            left: '5%',
            borderRadius: '15px'
        },
    },
    sets_desc: {
        position: 'absolute',
        display: 'flex',
        width: '40%',
        height: '75%',
        top: '10%',
        left: '52%',
        padding: '5px',
        textAlign: 'justify',
    },
    sets_button: {
        position: 'absolute !important',
        background: '#ededed !important',
        border: '2px solid #424242 !important',
        top: '77.5% ',
        left: '53% !important',
        width: '140px !important',
        height: '42px !important',
        borderRadius: '10px !important',
        transition: '.1s !important',
        letterSpacing: '2px !important',
        '&:hover': {
            background: '#424242 !important',
            color: '#f2f2f2 !important'
        }
    }
})
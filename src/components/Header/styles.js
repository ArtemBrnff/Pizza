import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    appbox: {
        width: '1300px',
        margin: 'auto',
    },
    appbar: {
        backgroundColor: 'rgb(255,200,200)',
        background: 'linear-gradient(90deg, rgba(255,200,200,1) 0%, rgba(0,0,0,1) 0%, rgba(70,66,68,1) 63%)',
        position: 'fixed',
        boxShadow: '0px 0px 0px',
    },
    appbar_typography: {
        color: '#fff0f7',
        fontSize: '28px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    menu_button: {
        margin: 'auto'
    },
    appbar_button: {
        color: '#fff0f7',
        fontSize: '16px'
    },
    a: {
        textDecoration: 'none',
    },

})
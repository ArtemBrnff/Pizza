import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles({
    d_container: {
        display: 'flex !important',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    card: {
        width: '300px',
        height: '450px',
        margin: '20px',
        fontSize: '16px',
        borderRadius: '0px',
        transition: '.3s',
        '&:hover': {
            boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)'
        },
    },
    shadow: {
        width: '400px',
        height: '400px',
        backgroundColor: '#fff',
        display: 'none',
        transform: 'scale(1.1) translate(6px, 7px) skew(-24deg, 61deg)',
    },
    pizza_name: {
        fontSize: '18px',
        fontWeight: 'bold',
    },
    card_button: {
        backgroundColor: '#343434 !important',
        color: '#f1f1f1 !important',
        '&:hover': {
            backgroundColor: '#626262'
        }
    },
    card_box: {
        height: '360px',

    },
    card_button_box: {
        display: 'grid',
        height: '90px',
        gridTemplateColumns: '1fr 1fr 1.5fr',
        padding: '5px',
        alignItems: 'center'
    },
    page_head: {
        fontSize: '24px !important',
        padding: '20px 0px 10px',
        fontFamily: 'sans-serif',
    },
    slider_box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
    }
})
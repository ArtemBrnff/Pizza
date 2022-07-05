import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    login_cont: {
        position: 'relative !important',
    },
    page_head: {
        fontSize: '24px !important',
        padding: '20px 0px 10px',
        fontFamily: 'FreeMono, monospace'
    },
    log_card: {
        left: '33% !important',
        position: 'absolute !important',
        width: '400px !important',
        display: 'flex !important',
        flexDirection: "column !important",
    },
    textf: {
        margin: '10px !important'
    },
    log_b: {
        position: 'absolute !important',
        left: '80% !important',
        top: '97px !important',
        width: '5px',
        background: 'rgba(0,0,0, 0) !important',
        color: '#000 !important',
        '&:hover': {
            background: 'rgba(0,0,0, 0) !important',
        }
    },
    log_b2: {
        position: 'absolute !important',
        left: '21.5% !important',
        top: '230px !important',
        width: '240px',
        background: '#30302e !important',
        color: '#e9e9e7 !important',
        '&:hover': {
            background: '#585856 !important',
        }
    },
    log_b3: {
        position: 'absolute !important',
        left: '28% !important',
        top: '280px !important',
        width: '200px',
        background: '#30302e !important',
        color: '#e9e9e7 !important',
        '&:hover': {
            background: '#585856 !important',
        }
    }
})
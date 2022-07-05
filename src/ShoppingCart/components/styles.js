import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    sets_box: {
        position: 'relative',
        width: '1200px',
        margin: '0 auto',
    },
    d_container: {
        position: 'absolute',
        width: '400px !important',
        display: 'flex !important',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        left: '66.65%'
    },
    ordering: {
        width: '800px !important',
        position: 'absolute',
        right: '33.3% !important',

    },
    page_head: {
        fontSize: '24px !important',
        padding: '20px 0px 10px',
        fontFamily: 'sans-serif',
    },
})
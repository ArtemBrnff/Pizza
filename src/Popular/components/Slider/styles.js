import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
    slider_img: {
        '& .slick-list': {
            width: '1000px',
            height: '500px',
            borderRadius: '15px'
        },
        '& img': {
            width: '100%',
            height: '100%'
        },
        '& .slick-dots': {
            position: 'absolute',
            left: '0',
            bottom: '1px',
            '& button:before': {
                content: '123',
                width: '10px',
                height: '10px',
                background: '#fff',
                border: 'none',
                borderRadius: 'none'
            }
        },
    },
    dot: {
        width: "10px",
        height: '10px',
        border: '2px solid #d6d6d6',
        borderRadius: '50%',
        transition: '.3s',
        '&:hover': {
            background: "#d6d6d6",
        },
    },
    details: {
        width: '110px',
        height: '50px',
        background: 'rgba(227, 227, 227, 0.8)',
        position: 'absolute',
        top: '420px',
        left: '50px',
        padding: '0px',
        borderRadius: '10px',
        transition: '.2s',
        cursor: 'pointer',
        '&:hover': {
            background: 'rgb(227, 227, 227)'
        }
    },
    details_h: {
        fontSize: '15px'
    },
})
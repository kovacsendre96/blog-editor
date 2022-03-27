import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import {globalStyles} from "../globalStyle";


const useStyles = makeStyles((theme) => ({
    root: {
        borderTop: '1px solid black',
        borderBottom: '1px solid black',
        position: 'relative',
    },
    quoteIcon:{
        position: 'absolute',
        top:'-25px',
        left:'55px',
        fontSize:'3rem'
    }
}));

const Quote = ({ content }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    return (
        <Grid className={`${globalStyle.paddingAll} ${classes.root}`}>
            <FormatQuoteIcon className={classes.quoteIcon}/>
            {content.map(text => (
                <Grid className={`${globalStyle.paddingAll} ${globalStyle.italicFontStyle}`}>{text}</Grid>
            ))}
        </Grid>
    );
};

export default Quote;
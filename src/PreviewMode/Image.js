import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import {globalStyles} from "../globalStyle";



const useStyles = makeStyles((theme) => ({
    root: {
        '& img': {
            width: '100%',
        },
        '& em': {
            fontSize: '13px',
        }
    }
}));

const Image = ({ src, alt, position, text }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    return (
        <Grid container justifyContent={position} className={classes.root}>
            <Grid className={`${classes.root} ${globalStyle.marginAll} ${globalStyle.textAlignCenter}`} item xs={10} md={7} lg={5}>
                <img
                    src={src}
                    alt={alt}
                />
                <Typography className={`${globalStyle.italicFontStyle}`} component={"em"} color="textSecondary">{text}</Typography>
            </Grid>
        </Grid>
    );
};

export default Image;
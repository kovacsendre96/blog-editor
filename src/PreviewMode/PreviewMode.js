import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {globalStyles} from "../globalStyle";
import {contentSeparator} from "../globalHelpers";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const PreviewMode = ({ blog }) => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    const actualContentData = blog;

    return (
        <Grid container className={classes.root} direction="column">
            {
                <React.Fragment>
                    <Typography variant="h4" className={` ${globalStyle.marginTop}`}>
                        {actualContentData.blog_title}
                    </Typography>

                    <Typography variant="subtitle2" color="textSecondary" className={`${globalStyle.italicFontStyle} ${globalStyle.marginAll}`}>
                        {actualContentData.blog_date}
                    </Typography>

                    {actualContentData.content.map((data) => contentSeparator(data))}
                </React.Fragment>
            }
        </Grid>
    );
};

export default PreviewMode;
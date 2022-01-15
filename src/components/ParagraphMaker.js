import { FormControl, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { OPTION_TYPES } from "../globalHelpers";
import { globalStyles } from "../globalStyle";



const useStyles = makeStyles((theme) => ({

}));
const ParagraphMaker = ({ textValue, setTextValue }) => {

    const classes = useStyles();
    const globalStyle = globalStyles();


    const textFieldChangeHandler = (e) => {
        setTextValue(e.target.value);
    };


    return (
        <FormControl fullWidth variant="outlined">
            <TextField
                className={globalStyle.marginAll}
                id="outlined-multiline-static"
                label="Bekezdés szövege"
                multiline
                rows={5}
                variant="outlined"
                onChange={textFieldChangeHandler}
                value={textValue}
            />
        </FormControl>
    );
};

export default ParagraphMaker;
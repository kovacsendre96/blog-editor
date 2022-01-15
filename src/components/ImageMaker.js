import { FormControl, Grid, InputAdornment, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { POSITION_TYPES } from "../globalHelpers";
import LinkIcon from '@material-ui/icons/Link';
import TextRotationNoneIcon from '@material-ui/icons/TextRotationNone';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import TitleIcon from '@material-ui/icons/Title';
import { globalStyles } from "../globalStyle";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: 15
    }
}));
const ImageMaker = ({ imgSrc, setImgSrc, setPosition, position, alt, setAlt, title, setTitle }) => {

    const classes = useStyles();
    const globalStyle = globalStyles();


    const imgSrcChangeHandler = (e) => {
        setImgSrc(e.target.value);
    };

    const PositionChangeHandler = (e) => {
        setPosition(e.target.value);
    };

    const AltChangeHandler = (e) => {
        setAlt(e.target.value);
    };
    const TitleChangeHandler = (e) => {
        setTitle(e.target.value);
    };


    return (
        <Grid container justifyContent="center">
            <FormControl fullWidth className={globalStyle.marginAll} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Kép link</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={imgSrc}
                    onChange={imgSrcChangeHandler}
                    startAdornment={<InputAdornment position="start"><LinkIcon /></InputAdornment>}
                    labelWidth={60}
                    label={"Kép címe"}
                />
            </FormControl>

            <FormControl fullWidth className={globalStyle.marginAll} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Kép alternatív szövege</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={alt}
                    onChange={AltChangeHandler}
                    startAdornment={<InputAdornment position="start"><TextRotationNoneIcon /></InputAdornment>}
                    labelWidth={60}
                    label={"Kép alternatív szövege"}
                />
            </FormControl>

            <FormControl fullWidth variant="outlined" className={globalStyle.marginAll}>
                <InputLabel id="category">Pozíció</InputLabel>
                <Select
                    startAdornment={<InputAdornment position="start"><SettingsOverscanIcon /></InputAdornment>}
                    labelId="category"
                    id="demo-simple-select"
                    value={position}
                    onChange={PositionChangeHandler}
                    label={"Pozíció"}
                >
                    {POSITION_TYPES.map((type) => (
                        <MenuItem value={type.value}>{type.type}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth className={globalStyle.marginAll} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Kép alatti szöveg</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={title}
                    onChange={TitleChangeHandler}
                    startAdornment={<InputAdornment position="start"><TitleIcon /></InputAdornment>}
                    labelWidth={60}
                    label={"Kép alatti szöveg"}
                />
            </FormControl>

        </Grid>

    );
};

export default ImageMaker;
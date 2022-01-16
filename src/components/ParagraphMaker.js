import { FormControl, Grid, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { OPTION_TYPES } from "../globalHelpers";
import { globalStyles } from "../globalStyle";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkIcon from '@material-ui/icons/Link';
import AddButton from "./Button";

const useStyles = makeStyles((theme) => ({

}));
const ParagraphMaker = ({ textValue, setTextValue, referenceLink, setReferenceLink, linkedText, setLinkedText,setScrollHelper }) => {

    const classes = useStyles();
    const globalStyle = globalStyles();

    const [referenceRow, setReferenceRow] = useState([]);

    const referenceHandler = (e) => {
        setReferenceLink([...referenceLink, e.target.value]);
    };

    const linkedTextChangeHandler = (e) => {
        setLinkedText([...linkedText, e.target.value]);
    };
    const textFieldChangeHandler = (e) => {
        setTextValue(e.target.value);
    };

    const newReferenceRowHandler = () => {
        setScrollHelper((prevState) => ({
            scrollHelper: !prevState
        }))
        setReferenceRow([...referenceRow,
        <React.Fragment>
            <Grid item xs={10} md={7} lg={5} className={globalStyle.marginAll}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Linkkel ellátott szó</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onBlur={linkedTextChangeHandler}
                        startAdornment={<InputAdornment position="start"><AlternateEmailIcon /></InputAdornment>}
                        labelWidth={60}
                        label={"Linkel ellátott szó"}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={10} md={7} lg={5} className={globalStyle.marginAll}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Hivatkozás</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onBlur={referenceHandler}
                        startAdornment={<InputAdornment position="start"><LinkIcon /></InputAdornment>}
                        labelWidth={60}
                        label={"Hivatkozás"}
                    />
                </FormControl>
            </Grid>
        </React.Fragment>
        ]);
    };

    return (
        <Grid>
            <AddButton
                onClick={newReferenceRowHandler}
            />
            <Grid container justifyContent="center">
                {referenceRow.map(refRow => refRow)}
            </Grid>
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
        </Grid>
    );
};

export default ParagraphMaker;
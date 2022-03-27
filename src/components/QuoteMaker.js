import {FormControl, Grid, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {globalStyles} from "../globalStyle";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import AddButton from "./Button";


const useStyles = makeStyles((theme) => ({}));
const QuoteMaker = ({textValues, setTextValues, scrollHelper, setScrollHelper}) => {

    const renderQuoteMaker = (quoteText) => {
        return (
            <FormControl fullWidth className={globalStyle.marginAll} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Idézet</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={textFieldChangeHandler}
                    startAdornment={<InputAdornment position="start"><FormatQuoteIcon/></InputAdornment>}
                    labelWidth={60}
                    label={"Idézet"}
                    value={quoteText ? quoteText : null}
                />
            </FormControl>
        )
    };

    const textFieldChangeHandler = (e) => {
        setTextValues([...textValues, e.target.value]);
    };

    const classes = useStyles();
    const globalStyle = globalStyles();
    const [quoteRows, setQuoteRows] = useState(textValues.length > 0 ? textValues.map(text => renderQuoteMaker(text)) : []);
    // const [quoteState, setQuoteState] = useState(null);

    const newQuoteHandler = () => {
        setScrollHelper((prevState) => ({
            scrollHelper: !prevState
        }))
        setQuoteRows([...quoteRows,
            renderQuoteMaker()
        ])
    }


    return (
        <Grid container justifyContent="center">
            {quoteRows.map(row => row)}
            <AddButton
                onClick={newQuoteHandler}
            />
        </Grid>
    );
};

export default QuoteMaker;
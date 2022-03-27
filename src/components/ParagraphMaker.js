import {FormControl, Grid, InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {EDIT_TYPE, OPTION_TYPES} from "../globalHelpers";
import {globalStyles} from "../globalStyle";
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkIcon from '@material-ui/icons/Link';
import AddButton from "./Button";
import InsertLinkIcon from '@material-ui/icons/InsertLink';

const useStyles = makeStyles((theme) => ({}));
const ParagraphMaker = ({
                            textValue,
                            setTextValue,
                            referenceLink,
                            setReferenceLink,
                            linkedText,
                            setLinkedText,
                            setScrollHelper,
                            paragraphMakerType
                        }) => {
    const [referenceState,setReferenceState] = useState(null);

    const referenceHandler = (e) => {
        setReferenceLink([...referenceLink, e.target.value]);
    };

    const linkedTextChangeHandler = (e) => {
        setLinkedText([...linkedText, e.target.value]);
    };
    // const referenceTextChangeHandler = (e) => {
    //     setReferenceState(e.target.value);
    // };

    const renderReferenceMaker = (text, index) => {
        return (
            <React.Fragment>
                <Grid item xs={10} md={7} lg={5} className={globalStyle.marginAll}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Linkkel ellátott szó</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            onBlur={linkedTextChangeHandler}
                            // onChange={referenceTextChangeHandler}
                            startAdornment={<InputAdornment position="start"><AlternateEmailIcon/></InputAdornment>}
                            labelWidth={60}
                            label={"Linkel ellátott szó"}
                            value={text ? text : null}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={10} md={7} lg={5} className={globalStyle.marginAll}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-amount">Hivatkozás</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            onBlur={referenceHandler}
                            startAdornment={<InputAdornment position="start"><LinkIcon/></InputAdornment>}
                            labelWidth={60}
                            label={"Hivatkozás"}
                            value={referenceLink ? referenceLink[index] : null}
                        />
                    </FormControl>
                </Grid>
            </React.Fragment>
        );
    };

    const classes = useStyles();
    const globalStyle = globalStyles();
    const isEditMode = paragraphMakerType === EDIT_TYPE.EDIT;
    const [referenceRow, setReferenceRow] = useState(isEditMode && linkedText ? linkedText.map(
        (text,index) => renderReferenceMaker(text, index)
    ) : []);


    const textFieldChangeHandler = (e) => {
        setTextValue(e.target.value);
    };

    const newReferenceRowHandler = () => {
        setScrollHelper((prevState) => ({
            scrollHelper: !prevState
        }));


        setReferenceRow([...referenceRow,
            renderReferenceMaker()
        ]);
    };

    return (
        <Grid>
            <AddButton
                onClick={newReferenceRowHandler}
                buttonText={'Hivatkozás'}
                startIcon={<InsertLinkIcon/>}
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
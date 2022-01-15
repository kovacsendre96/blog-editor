import { FormControl, InputLabel, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { BLOCK_TYPES } from "../globalHelpers";


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));
const MakerSelect = ({ typeSelect, setTypeSelect, setIsClosedBlock }) => {

    const classes = useStyles();

    const selectChangeHandler = (e) => {
        setTypeSelect(e.target.value);
        setIsClosedBlock(false);
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="category">Kategória</InputLabel>
            <Select
                labelId="category"
                id="demo-simple-select"
                value={typeSelect}
                onChange={selectChangeHandler}
                label={"Kategória"}
            >
                {BLOCK_TYPES.map((type) => (
                    <MenuItem value={type.value}>{type.type}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MakerSelect;
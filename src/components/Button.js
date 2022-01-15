import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const AddButton = ({onClick}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={onClick}
        >
            Hozzáad
        </Button>

    );
}

export default AddButton;
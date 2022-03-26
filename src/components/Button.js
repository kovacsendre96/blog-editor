import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const AddButton = ({onClick, buttonText, startIcon, size}) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={startIcon ? startIcon : ''}
            onClick={onClick}
            size={size ? size : 'medium'}
        >
            {buttonText ? buttonText : ''}
        </Button>

    );
}

export default AddButton;
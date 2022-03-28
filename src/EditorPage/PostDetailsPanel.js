import {
    FormControl,
    Grid, IconButton, InputAdornment,
    InputLabel,
    OutlinedInput, Tooltip
} from "@material-ui/core";
import InfoIcon from '@material-ui/icons/Info';
import React from "react";
import HtmlTooltip from "../components/HtmlTooltip";



const PostDetailsPanel = ({index, postDetailValue, postDetailChangeHandler, inputName, inputIcon}) => {
    return (
        <FormControl key={`form-control-index`} fullWidth variant="outlined">
            <InputLabel htmlFor={`outlined-${index}`}>{inputName}</InputLabel>
            <OutlinedInput
                id={`outlined-${index}`}
                value={postDetailValue}
                onChange={postDetailChangeHandler}
                startAdornment={<InputAdornment position="start">{inputIcon}</InputAdornment>}
                labelWidth={60}
                label={inputName}
                endAdornment={
                <InputAdornment position="end">
                    <HtmlTooltip
                        children={<InfoIcon color={'action'}/>}
                        // titleHtml={<img src={}/>}
                    />
                </InputAdornment>
            }
            />
        </FormControl>
    );
};
export default PostDetailsPanel;
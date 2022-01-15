import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { OPTION_TYPES } from "../globalHelpers";
import { globalStyles } from "../globalStyle";
import ImageMaker from "./ImageMaker";
import MakerSelect from "./MakerSelect";
import ParagraphMaker from "./ParagraphMaker";
import QuoteMaker from "./QuoteMaker";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SaveButton from "./SaveButton";


const useStyles = makeStyles((theme) => ({

}));
const MakerCard = ({ rowData, setRowData, setScrollHelper, scrollHelper }) => {

    const classes = useStyles();
    const globalStyle = globalStyles();
    const [typeSelect, setTyperSelect] = useState();
    const [isClosedBlock, setIsClosedBlock] = useState(true);

    /* =========================== Paragraph state =========================== */
    const [textValue, setTextValue] = useState();

    /* =========================== Image states =========================== */
    const [imgSrc, setImgSrc] = useState(null);
    const [position, setPosition] = useState(null);
    const [alt, setAlt] = useState(null);
    const [title, setTitle] = useState(null);

    /* =========================== Quote state =========================== */
    const [textValues, setTextValues] = useState([]);

    const separateSendData = () => {
        let sendData;
        switch (typeSelect) {
            case OPTION_TYPES.PARAGRAPH:
                sendData = {
                    type: OPTION_TYPES.PARAGRAPH,
                    content: textValue
                };
                break;
            case OPTION_TYPES.IMAGE:
                sendData = {
                    type: OPTION_TYPES.IMAGE,
                    alt: alt,
                    position: position,
                    src: imgSrc,
                    text: title,
                }
                break;
            case OPTION_TYPES.QUOTE:
                sendData = {
                    type: OPTION_TYPES.QUOTE,
                    content: textValues
                }
        }
        return sendData;
    };

    const aggreeButtonClickHandler = () => {
        setIsClosedBlock(true);
        setRowData({
            ...rowData,
            content: [
                ...rowData.content, separateSendData()
            ]

        })
    };


    const separateOptions = () => {
        let component;
        switch (typeSelect) {
            case OPTION_TYPES.PARAGRAPH: component =
                <ParagraphMaker textValue={textValue} setTextValue={setTextValue} />;
                break;
            case OPTION_TYPES.IMAGE: component =
                <ImageMaker
                    alt={alt}
                    setAlt={setAlt}
                    imgSrc={imgSrc}
                    setImgSrc={setImgSrc}
                    position={position}
                    setPosition={setPosition}
                    title={title}
                    setTitle={setTitle}
                />;
                break;
            case OPTION_TYPES.QUOTE: component =
                <QuoteMaker
                    textValues={textValues}
                    setTextValues={setTextValues}
                    scrollHelper={scrollHelper}
                    setScrollHelper={setScrollHelper}
                />;

        }
        return component;
    };

    return (
        <Grid container justifyContent="center" className={globalStyle.marginAll}>
            <Grid item xs={8} component={Paper}>
                <Grid container justifyContent="space-between" alignItems="center">
                    <MakerSelect
                        typeSelect={typeSelect}
                        setTypeSelect={setTyperSelect}
                        setIsClosedBlock={setIsClosedBlock}
                        scrollHelper={scrollHelper}
                        setScrollHelper={setScrollHelper}
                    />
                    {!isClosedBlock &&
                        <SaveButton
                            onClick={aggreeButtonClickHandler}
                        />
                    }
                </Grid>
                {separateOptions()}
            </Grid>
        </Grid >
    );
};

export default MakerCard;
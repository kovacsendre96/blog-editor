import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import {EDIT_TYPE, isDefined, OPTION_TYPES} from "../globalHelpers";
import { globalStyles } from "../globalStyle";
import ImageMaker from "./ImageMaker";
import MakerSelect from "./MakerSelect";
import ParagraphMaker from "./ParagraphMaker";
import QuoteMaker from "./QuoteMaker";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SaveButton from "./SaveButton";
import {editableInputTypes} from "@testing-library/user-event/dist/utils";


const useStyles = makeStyles((theme) => ({

}));
const MakerCard = ({ rowData, setRowData, setScrollHelper, scrollHelper,cardMakerType }) => {
    console.log('ROWdaATA',rowData)
    const classes = useStyles();
    const isCardEdit = isDefined(cardMakerType) && cardMakerType === EDIT_TYPE.EDIT;

    const globalStyle = globalStyles();
    const [typeSelect, setTyperSelect] = useState(isCardEdit? rowData.type :null);
    const [isClosedBlock, setIsClosedBlock] = useState(true);

    /* =========================== Paragraph state =========================== */
    const [textValue, setTextValue] = useState(isCardEdit? rowData.content :null);
    const [referenceLink, setReferenceLink] = useState(isCardEdit? rowData.referenceLink :[]);
    const [linkedText, setLinkedText] = useState(isCardEdit? rowData.linkedText :[]);

    /* =========================== Image states =========================== */
    const [imgSrc, setImgSrc] = useState(isCardEdit? rowData.src :null);
    const [position, setPosition] = useState(isCardEdit? rowData.position :null);
    const [alt, setAlt] = useState(isCardEdit? rowData.alt :null);
    const [title, setTitle] = useState(isCardEdit? rowData.text :null);

    /* =========================== Quote state =========================== */
    const [textValues, setTextValues] = useState([]);


    const separateSendData = () => {
        let sendData;
        switch (typeSelect) {
            case OPTION_TYPES.PARAGRAPH:
                sendData = {
                    type: OPTION_TYPES.PARAGRAPH,
                    content: textValue,
                    referenceLink: referenceLink,
                    linkedText: linkedText
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

console.log(rowData);
    const separateOptions = () => {
        let component;
        switch (typeSelect) {
            case OPTION_TYPES.PARAGRAPH: component =
                <ParagraphMaker
                    textValue={textValue}
                    setTextValue={setTextValue}
                    referenceLink={referenceLink}
                    setReferenceLink={setReferenceLink}
                    linkedText={linkedText}
                    setLinkedText={setLinkedText}
                    setScrollHelper={setScrollHelper}
                />;
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
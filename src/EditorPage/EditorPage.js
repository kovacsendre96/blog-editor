import {
    Accordion, AccordionDetails, AccordionSummary,
    Button,
    Grid,
} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {postBlogData} from "../AxiosHelper";
import AddButton from "../components/Button";
import MakerCard from "../components/MakerCard";
import {globalStyles} from "../globalStyle";
import BackupIcon from '@material-ui/icons/Backup';
import {EDIT_TYPE, isDefined} from "../globalHelpers";
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from "@material-ui/core/Typography";
import PostDetailsPanel from "./PostDetailsPanel";
import {postDetailInputArray} from "./postDetailInputArray";
import Alert from '@material-ui/lab/Alert';


const EditorPage = ({editType, blog}) => {
    console.log(blog)
    const editMode = isDefined(blog) && editType === EDIT_TYPE.EDIT;
    const globalStyle = globalStyles();
    const [isClosedBlogTitle, setIsClosedBlogTitle] = useState(false);
    const [isClosedBlogDate, setIsClosedBlogDate] = useState(false);
    const [isClosedBlogUrl, setIsClosedUrl] = useState(false);
    const [isClosedBlogImg, setIsClosedImg] = useState(false);
    const [rowData, setRowData] = useState({content: []});
    const [scrollHelper, setScrollHelper] = useState(true);
    const rowValue = editMode ? blog.content.map((blogContent) => (
        <MakerCard
            cardMakerType={EDIT_TYPE.EDIT}
            rowData={blogContent}
            setRowData={setRowData}
            scrollHelper={scrollHelper}
            setScrollHelper={setScrollHelper}
        />)) : [];
    const [row, setRow] = useState(rowValue);


    const [blogTitle, setBlogTitle] = useState(editMode ? blog.blog_title : null);
    const [blogDate, setBlogDate] = useState(editMode ? blog.blog_date : null);
    const [blogUrl, setBlogUrl] = useState(editMode ? blog.blog_url : null);
    const [blogImage, setBlogImage] = useState(editMode ? blog.blog_img : null);


    useEffect(() => {
        window.scrollTo({top: document.body.scrollHeight, left: 0, behavior: "smooth"});
    }, [row, scrollHelper])


    const blogTitleChangeHandler = (e) => {
        const targetValue = e.target.value;
        setBlogTitle(targetValue);
    };

    const blogDateChangeHandler = (e) => {
        const targetValue = e.target.value;
        setBlogDate(targetValue);
    };

    const blogUrlChangeHandler = (e) => {
        const targetValue = e.target.value;
        setBlogUrl(targetValue);
    };

    const blogImageChangeHandler = (e) => {
        const targetValue = e.target.value;
        setBlogImage(targetValue);
    };

    const agreeBlogTitleHandler = () => {
        setRowData({...rowData, blog_title: blogTitle});
        setIsClosedBlogTitle(true);
    };

    const agreeBlogDateHandler = () => {
        setRowData({...rowData, blog_date: blogDate});
        setIsClosedBlogDate(true);
    };

    const agreeBlogUrlHandler = () => {
        setRowData({...rowData, blog_url: blogUrl});
        setIsClosedUrl(true);
    };

    const agreeBlogImageHandler = () => {
        setRowData({...rowData, blog_img: blogImage});
        setIsClosedImg(true);
    };
    const submitHandler = () => {
        postBlogData(rowData);
    };


    const addNewBlockHandler = () => {

        setRow([...row,
            <MakerCard
                rowData={rowData}
                setRowData={setRowData}
                scrollHelper={scrollHelper}
                setScrollHelper={setScrollHelper}

            />]);
    };

    const renderPostDetailsPanel = () => {
        const inputArray = postDetailInputArray(
            blogUrl, blogUrlChangeHandler,
            blogImage, blogImageChangeHandler,
            blogTitle, blogTitleChangeHandler,
            blogDate, blogDateChangeHandler
        );
        return inputArray.map((postDetail, index) => (
            <Grid container justifyContent={'center'} className={globalStyle.marginAll}>
                <PostDetailsPanel
                    index={index}
                    postDetailChangeHandler={postDetail.postDetailChangeHandler}
                    postDetailValue={postDetail.postDetailValue}
                    inputName={postDetail.inputName}
                    inputIcon={postDetail.inputIcon}
                />
            </Grid>
        ))
    };

    return (
        <Grid container justifyContent="center" style={{scrollBehavior: 'smooth'}}>
            <Grid item xs={12} md={8}>
                <Accordion
                    defaultExpanded
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="post-data"
                        square
                    >
                        <Typography>Bejegyzés adatai</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container>
                            <Grid item xs={12}>
                                <Alert severity="info">A bejegyzést összefoglaló kártya adatait tudod itt megadni</Alert>
                            </Grid>
                            {renderPostDetailsPanel()}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <MakerCard
                rowData={rowData}
                setRowData={setRowData}
                scrollHelper={scrollHelper}
                setScrollHelper={setScrollHelper}
            />
            {row.map((card => card))}
            <AddButton
                onClick={addNewBlockHandler}
                startIcon={<ViewHeadlineIcon/>}
                buttonText={"Blokk létrehozása"}
            />

            <Button
                variant="contained"
                color="primary"
                startIcon={<BackupIcon/>}
                onClick={submitHandler}
            >
                Feltöltés
            </Button>
        </Grid>
    );
};

export default EditorPage;

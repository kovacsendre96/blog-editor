import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Grid, Tooltip} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Button from "./Button";
import CheckIcon from '@material-ui/icons/Check';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        width: '100%',
        margin: 20,
        position: 'relative'
    },
    media: {
        height: '50%',
        marginBottom: 15,
    },
    cardTitleWrapper: {
        height: '50%',
        flexWrap: 'nowrap',
    },
    iconStyle: {
        marginLeft: '15px',
        marginTop: '15px'
    }
}));

const BlogCard = ({imgUrl, blogTitle, blogDate, blogStatus, blogUrl}) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const renderStatusIcon = () => {
        let icon;
        switch (blogStatus) {
            case "active" :
                icon = <Tooltip placement="top" title={'Aktív'}><CheckIcon fontSize={"large"} className={classes.iconStyle} style={{color: "#0DCF69"}}/></Tooltip>
                break;
            case "inactive":
                icon = <Tooltip  placement="top" title={'Inaktív'}><HighlightOffIcon fontSize={"large"} className={classes.iconStyle} style={{color: "#CE0E5E"}}/></Tooltip>
        }
        return icon;
    };

    const handlePreviewButtonClick = () => {
        navigate(`blog-preview/${blogUrl}`);
    };
    const handleEditButtonClick = () => {
        navigate(`blog-edit/${blogUrl}`);
    };
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imgUrl}
                title="Paella dish"
            />
            <Grid
                className={classes.cardTitleWrapper}
                container
                direction={'column'}
                justifyContent={'space-between'}
            >
                <Grid container justifyContent={'center'} alignItems={'center'} style={{
                    width: '70px',
                    height: '70px',
                    background: 'white',
                    position: 'absolute',
                    top: '-25px',
                    left: '-25px',
                    borderRadius: '50%'
                }}>
                    {renderStatusIcon()}
                </Grid>
                <Tooltip title={blogTitle} placement="top">
                    <Typography align={'center'}
                                variant={"h5"}
                                noWrap
                    >
                        {blogTitle}
                    </Typography>
                </Tooltip>

                <Typography
                    align={'center'}
                    color={'textSecondary'}
                    component={"p"}
                >
                    {blogDate}
                </Typography>
                <Grid container justifyContent={'space-around'}>
                    <Button
                        startIcon={<VisibilityIcon/>}
                        buttonText={'Előnézet'}
                        size={'small'}
                        onClick={handlePreviewButtonClick}
                    />
                    <Button
                        startIcon={<EditIcon/>}
                        buttonText={'Szerkesztés'}
                        size={'small'}
                        onClick={handleEditButtonClick}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default BlogCard;

import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import {Grid} from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import Button from "./Button";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        width: '100%',
        margin: 20
    },
    media: {
        height: '50%'
    },
    cardTitleWrapper: {
        height: '50%'
    }
}));

const BlogCard = ({imgUrl, blogTitle, blogDate}) => {
    const classes = useStyles();

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
                <Typography align={'center'}
                            variant={"h5"}
                >
                    {blogTitle}
                </Typography>
                <Typography
                    gutterBottom
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
                    />
                    <Button
                    startIcon={<EditIcon/>}
                    buttonText={'Szerkesztés'}
                    size={'small'}
                    />
                </Grid>
            </Grid>
        </Card>
    );
};

export default BlogCard;

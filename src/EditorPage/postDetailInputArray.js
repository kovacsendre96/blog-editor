import HttpIcon from "@material-ui/icons/Http";
import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import TitleIcon from "@material-ui/icons/Title";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import cardHelperImg from '../assets/card-helper-img.png';
import cardHelperTitle from '../assets/card-helper-title.png';
import cardHelperDate from '../assets/card-helper-date.png';
import cardHelperUrl from '../assets/card-helper-url.png';
// import cardHelperSummary from '../assets/card-helper-introduction.png.png';

export const postDetailInputArray = (blogUrl, blogUrlChangeHandler, blogImage, blogImageChangeHandler, blogTitle, blogTitleChangeHandler, blogDate, blogDateChangeHandler) => [
    {
        postDetailValue: blogUrl,
        postDetailChangeHandler: blogUrlChangeHandler,
        inputName: 'Blog URL címe',
        inputIcon: <HttpIcon/>,
        helperSrc: cardHelperUrl
    },
    {
        postDetailValue: blogImage,
        postDetailChangeHandler: blogImageChangeHandler,
        inputName: 'Blog képe',
        inputIcon: <ImageIcon/>,
        helperSrc: cardHelperImg
    },
    {
        postDetailValue: blogTitle,
        postDetailChangeHandler: blogTitleChangeHandler,
        inputName: 'Blog címe',
        inputIcon: <TitleIcon/>,
        helperSrc: cardHelperTitle

    },
    {
        postDetailValue: blogDate,
        postDetailChangeHandler: blogDateChangeHandler,
        inputName: 'Blog dátuma',
        inputIcon: <CalendarTodayIcon/>,
        helperSrc: cardHelperDate
    },
];
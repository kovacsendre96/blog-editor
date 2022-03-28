import HttpIcon from "@material-ui/icons/Http";
import React from "react";
import ImageIcon from "@material-ui/icons/Image";
import TitleIcon from "@material-ui/icons/Title";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

export const postDetailInputArray = (blogUrl, blogUrlChangeHandler, blogImage, blogImageChangeHandler, blogTitle, blogTitleChangeHandler, blogDate, blogDateChangeHandler) => [
    {
        postDetailValue: blogUrl,
        postDetailChangeHandler: blogUrlChangeHandler,
        inputName: 'Blog URL címe',
        inputIcon: <HttpIcon/>
    },
    {
        postDetailValue: blogImage,
        postDetailChangeHandler: blogImageChangeHandler,
        inputName: 'Blog képe',
        inputIcon: <ImageIcon/>
    },
    {
        postDetailValue: blogTitle,
        postDetailChangeHandler: blogTitleChangeHandler,
        inputName: 'Blog címe',
        inputIcon: <TitleIcon/>
    },
    {
        postDetailValue: blogDate,
        postDetailChangeHandler: blogDateChangeHandler,
        inputName: 'Blog dátuma',
        inputIcon: <CalendarTodayIcon/>
    },
];
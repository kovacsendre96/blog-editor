import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const HtmlTooltip = ({children, titleHtml}) => {

    const CustomHtmlTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: '#f5f5f9',
            color: 'rgba(0, 0, 0, 0.87)',
            maxWidth: 220,
            fontSize: theme.typography.pxToRem(12),
            border: '1px solid #dadde9',
        },
    }))(Tooltip);

    return (
        <CustomHtmlTooltip
            title={
                <React.Fragment>
                    {titleHtml}
                </React.Fragment>
            }
        >
            {children}
        </CustomHtmlTooltip>
    );
};

export default HtmlTooltip;

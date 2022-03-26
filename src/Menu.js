import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import PostAddIcon from '@material-ui/icons/PostAdd';
import HomeIcon from '@material-ui/icons/Home';
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    sideTitle: {
        marginTop: 50
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const [actualMenuItem, setActualMenuItems] = useState("Főoldal");

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem button key={'main-page'} onClick={() => {
                    navigate('/');
                    setActualMenuItems("Főoldal");
                }}>
                    <ListItemIcon><HomeIcon/></ListItemIcon>
                    <ListItemText primary={'Főoldal'}/>
                </ListItem>
                <ListItem button key={'new-blog'} onClick={() => {
                    navigate('/blog-list');
                    setActualMenuItems("Bloglista");
                }}>
                    <ListItemIcon><ListIcon/></ListItemIcon>
                    <ListItemText primary={'Bloglista'}/>
                </ListItem>
                <ListItem button key={'new-blog'} onClick={() => {
                    navigate('/new-blog');
                    setActualMenuItems("Új blog létrehozása");
                }}>
                    <ListItemIcon><PostAddIcon/></ListItemIcon>
                    <ListItemText primary={'Új blog létrehozása'}/>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton}
                                    color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Blog szerkesztő
                        </Typography>
                    </Toolbar>
                    <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer(false)}>
                        {list()}
                    </Drawer>
                </AppBar>
                <Typography className={classes.sideTitle} align={'center'} variant="h5" color="initial">
                    {actualMenuItem}
                </Typography>
            </div>


        </div>
    );
}



import React, {Fragment} from 'react';
import EditorPage from "./EditorPage";
import BlogList from "./BlogList";
import {Grid} from "@material-ui/core";
import Menu from './Menu';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage";

const App = () => {
    return (
        <Fragment>
            <Menu/>
            <Grid container>
                <Grid item xs={10} style={{ marginTop:'50px',border:'1px solid blue'}}>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/blog-list" element={<BlogList/>}/>
                <Route path="/new-blog" element={<EditorPage/>}/>
            </Routes>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default App;
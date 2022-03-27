import React, {Fragment, useEffect, useState} from 'react';
import EditorPage from "./EditorPage";
import BlogList from "./BlogList";
import {Grid} from "@material-ui/core";
import Menu from './Menu';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage";
import PreviewMode from "./PreviewMode/PreviewMode";
import {getBlogData} from "./AxiosHelper";

const App = () => {

    const [blogList, setBlogList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getBlogData(setBlogList, setLoading, '');
    }, []);

    const blogListData = blogList.length === 0 ? [] : Object.values(blogList[0].blogs);

    return (
        <Fragment>
            <Menu/>
            <Grid container justifyContent={'center'} alignItems={'center'}>
                <Grid item xs={10} container justifyContent={'space-around'}>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        {blogListData.length > 0 &&
                            <Route
                                path="/blog-list"
                                element={<BlogList blogList={blogList}/>}
                            />
                        }
                        <Route
                            path="/new-blog"
                            element={<EditorPage/>}
                        />
                        {
                            blogListData.length > 0 &&
                            Object.values(blogList[0].blogs).map((blog, index) => {
                                return (
                                    <React.Fragment>
                                        <Route
                                            path={`blog-list/blog-preview/${blog.blog_url}`}
                                            element={<PreviewMode blog={blog}/>}
                                        />
                                        <Route
                                            path={`blog-list/blog-edit/${blog.blog_url}`}
                                            element={<EditorPage blog={blog}/>}
                                        />
                                    </React.Fragment>
                                )
                            })
                        }
                    </Routes>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default App;
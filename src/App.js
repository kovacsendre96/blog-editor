import React, {Fragment, useEffect, useState} from 'react';
import EditorPage from "./EditorPage/EditorPage";
import BlogList from "./BlogList";
import {Grid} from "@material-ui/core";
import Menu from './Menu';
import {Route, Routes} from 'react-router-dom';
import MainPage from "./MainPage";
import PreviewMode from "./PreviewMode/PreviewMode";
import {getBlogData} from "./AxiosHelper";
import {EDIT_TYPE} from "./globalHelpers";

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
                        <Route key={'blog-list'} path="/" element={<MainPage/>}/>
                        {blogListData.length > 0 &&
                            <Route
                                path="/blog-list"
                                element={<BlogList blogList={blogList}/>}
                            />
                        }
                        <Route
                            key={'blog-editor-page'}
                            path="/new-blog"
                            element={<EditorPage editType={EDIT_TYPE.CREATE_NEW}/>}
                        />
                        {
                            blogListData.length > 0 &&
                            Object.values(blogList[0].blogs).map((blog, index) => {
                                return (
                                    <React.Fragment>
                                        <Route
                                            key={`route-blog-preview-${index}`}
                                            path={`blog-list/blog-preview/${blog.blog_url}`}
                                            element={<PreviewMode blog={blog}/>}
                                        />
                                        <Route
                                            key={`route-blog-edit-${index}`}
                                            path={`blog-list/blog-edit/${blog.blog_url}`}
                                            element={<EditorPage editType={EDIT_TYPE.EDIT} blog={blog}/>}
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
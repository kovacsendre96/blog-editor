import {Grid} from "@material-ui/core";

import {getBlogData} from "./AxiosHelper";
import BlogCard from "./components/BlogCard";
import React, {useEffect, useState} from "react";

const BlogList = ({blogList}) => {

    const blogListData = blogList.length === 0 ? [] : Object.values(blogList[0].blogs);
    return (
            <React.Fragment>
            {blogListData.length > 1 &&
                Object.values(blogList[0].blogs).map((blog, index) => (
                    <Grid item xs={10} sm={5}>
                        <BlogCard
                            blogDate={blog.blog_date}
                            blogTitle={blog.blog_title}
                            imgUrl={blog.blog_img}
                            blogStatus={blog.blog_status}
                            blogUrl={blog.blog_url}
                        />
                    </Grid>
                ))}
            </React.Fragment>

    );
};

export default BlogList;
import React, {Component,Fragment} from 'react';
import TopNav from "../Component/TopNav/TopNav";
import Footer from "../Component/Footer/Footer";
import Blog from "../Component/Blog/Blog";
import BlogTop from "../Component/BlogTop/BlogTop";

class BlogPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <BlogTop/>
                <Blog/>
                <Footer/>

            </Fragment>
        );
    }
}

export default BlogPage;
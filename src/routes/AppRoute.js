import React, {Component,Fragment} from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/blog" component={BlogPage} />
                    <Route exact path="/contact" component={ContactPage} />


                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;
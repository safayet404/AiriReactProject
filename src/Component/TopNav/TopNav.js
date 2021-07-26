import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import '../../assets/css/responsive.css'
import logo from '../../assets/image/Airi.-1.png'
import {NavLink} from "react-router-dom";

class TopNav extends Component {


    constructor() {
        super();
        this.state={
            navBarTitle : "navTitle",
            navBarLogo : [logo],
            navBarBack : "navBackground",
            navItemColor : "navItem",
            navVariant : "dark"

        }
    }

    onScroll=()=>{
        if(window.scrollY>100)
        {
            this.setState({navBarTitle : 'navTitleScroll',navBarLogo : [logo],navBarBack : 'navBackgroundScroll',navItemColor : 'navItemScroll'})
        }
        else if(window.scrollY<100)
        {
            this.setState({navBarTitle : 'navTitle',navBarLogo : [logo],navBarBack : 'navBackground',navItemColor : 'navItem'})
        }

    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>

                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Navbar.Brand> <NavLink className={this.state.navBarTitle} to="/"><img alt=" " src={this.state.navBarLogo}/> </NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link>  <NavLink exact  className={this.state.navItemColor} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact  className={this.state.navItemColor} to="/blog">blog</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact  className={this.state.navItemColor} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link>   <NavLink exact  className={this.state.navItemColor} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNav;
import React, {Component,Fragment} from 'react';
import TopNav from "../Component/TopNav/TopNav";
import Contact from "../Component/Contact/Contact";
import ContactTop from "../Component/ContactTop/ContactTop";
import Footer from "../Component/Footer/Footer";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <ContactTop/>
                <Contact/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ContactPage;
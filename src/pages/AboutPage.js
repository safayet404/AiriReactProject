import React, {Component,Fragment} from 'react';
import MissionVisionValues from "../Component/MissionVisionValues/MissionVisionValues";
import WhoWeArePortion from "../Component/WhoWeArePortion/WhoWeArePortion";
import Summary from "../Component/Summary/Summary";
import OurTeam from "../Component/OurTeam/OurTeam";
import OurProject from "../Component/OurProject";
import Footer from "../Component/Footer/Footer";
import TopNav from "../Component/TopNav/TopNav";
import AboutTop from "../Component/AboutTop/AboutTop";

class AboutPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <AboutTop/>
                <WhoWeArePortion/>
                <MissionVisionValues/>
                <Summary/>
                <OurTeam/>
                <OurProject/>
                <Footer/>


            </Fragment>
        );
    }
}

export default AboutPage;
import React, {Component,Fragment} from 'react';
import TopNav from "../Component/TopNav/TopNav";
import TopBanner from "../Component/TopBanner/TopBanner";
import Business from "../Component/BusinessSection/Business";
import Summary from "../Component/Summary/Summary";
import ProcessVideo from "../Component/ProcessVideo/ProcessVideo";
import CardGlobal from "../Component/CardGlobal/CardGlobal";
import Experiment from "../Component/Experiment/Experiment";
import OurTeam from "../Component/OurTeam/OurTeam";
import LatestNews from "../Component/LatestNews/LatestNews";
import OurProject from "../Component/OurProject";
import Footer from "../Component/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNav/>
                <TopBanner/>
                <Business/>
                <Summary/>
                <ProcessVideo/>
                <CardGlobal/>
                <Experiment/>
                <OurTeam/>
                <LatestNews/>
                <OurProject/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePage;
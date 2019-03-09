import React, { Component } from "react";
import Notifications from "../../components/Notifications";
import CharaterBoard from "../../components/CharaterBoard";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage container">
                <div className="row">
                    <div className="col col-sm-12 col-md-6 ">
                        <div className="col col-sm-12 col-md-5 align-self-center">
                            <Notifications />
                            <CharaterBoard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HomePage;

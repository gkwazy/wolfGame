import React, { Component } from "react";
import CharaterBoard from "../../components/CharaterBoard";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage container">
                <div className="row justify-content-md-center">
                    <CharaterBoard
                        name="wolf"
                    />
                    <CharaterBoard
                        name="towns fork"
                    />
                </div>
                <div className="row justify-content-md-center">
                    <CharaterBoard
                        name="Doctor"
                    />
                    <CharaterBoard
                        name="Hunter"
                    />
                </div>
                <div className="row justify-content-md-center">
                    <CharaterBoard
                        name="little Girl"
                    />
                </div>

            </div>
        );
    }
}
export default HomePage;

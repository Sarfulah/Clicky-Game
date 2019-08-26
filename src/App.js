import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import kims from "./kims.json";
import KimCards from "./components/KimCards";

class App extends Component {
    state = {
        kims
    };

    render() {
        return (
            <Wrapper>
                <Title>Kimoji Game</Title>
                {this.state.kims.map(kim => (
                    <KimCards
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;

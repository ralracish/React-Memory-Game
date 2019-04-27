import React from "react";

import thrones from "./thrones.json"

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        thrones
    };

    render() {
        return (
            <Wrapper>
                <Title>Thrones List</Title>
                {this.state.thrones.map(friend => (
                    <FriendCard
                        removeFriend={this.removeFriend}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                    />
                ))}
            </Wrapper>
        );
    }

    shuffleArray = () => {
        let randomOrder = this.state.ThronesArray
        for (let i = randomOrder.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
        }
        console.log(randomOrder)
        this.setState({
            ThronesArray: randomOrder
        })
    };
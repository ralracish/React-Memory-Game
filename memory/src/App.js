import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer/";
import Title from "./Components/Title/";
import Wrapper from "./Components/Wrapper";




class App extends React.Component {

      shuffleArray = () => {
        let randomOrder = this.state.ThronesArray
        for (let i = randomOrder.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
        }
        console.log(randomOrder)
        //       this.setState({
        //       ThronesArray: randomOrder
        // })
      };

    render() {
      return (
        <div>
          <Header />
          <Title />
          <Thrones />
          {/* {this.state.thrones.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))} */}
          <Footer />
        </div>
      );
    }
}


export default App;

import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer/";
import Title from "./Components/Title/";
import Thrones from "./Components/Thrones";
import thrones from "./thrones.json";
// import Wrapper from "./Components/Wrapper";




class App extends React.Component {
  state = {
    thrones
  };

      shuffleArray = () => {
        let randomOrder = this.state.thrones
        for (let i = randomOrder.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
        }
        console.log(randomOrder)
              this.setState({
              thrones: randomOrder
        })
      };

    render() {
      return (
        <div>
          <Header />
          <Title />
          <Thrones />
          {this.state.thrones.map(throne => (
              name={thrones.name}
              image={thrones.image}
          ))}
          <Footer />
        </div>
      );
    }
}


export default App;

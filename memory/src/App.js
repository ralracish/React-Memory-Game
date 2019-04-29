import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer/';
import Thrones from './Components/Thrones';
import thrones from './Components/Images/index.js'



class App extends React.Component {
  state = {
    thrones,
    clickedImages: [],
    score: 0,
    topScore:0,
    message:"Click any image to start."
  }
  
    moveArray = (id) => {
    let randomOrder = this.state.thrones
    for (let i = randomOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
    }

    console.log(id)
    this.setState({
    thrones: randomOrder
    })
      
    let clickedImages=this.state.clickedImages
    if (this.state.clickedImages.indexOf(id) === -1) {
      console.log("has not been clicked")
      clickedImages.push(id)
      this.setState({
        clickedImages, 
        message: "You guessed correctly.",
        score: this.state.score + 1
      })
      } else {
      console.log("has been clicked")
      this.setState({
        message: "You guessed incorrectly.",
        score: 0 })
    }
  };

  render() {
    // const postData = this.state.thrones;
    // console.log(postData);
    return (
      <div>
        <Header message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <div className="row">
          {this.state.thrones.map(e => (
            <Thrones x={e.name} y={e.image} z={this.moveArray} id={e.id} />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;

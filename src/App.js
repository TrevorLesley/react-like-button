import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    }

    this.addCounter = this.addCounter.bind(this);
  }

  addCounter = () => {
    let likesTotal = this.state.likes + 1
    this.setState({
      likes: likesTotal
    })
  }

  render() {
    return (
      <div className="button-container">
        <button className="like-button" onClick={this.addCounter}>{this.state.likes}{this.state.likes === 1 ? ' Like' : ' Likes'}
        </button>
      </div>
    )
  }
}
export default App;

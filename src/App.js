import React, { Component } from 'react';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import './App.css';

class App extends Component {
  state = {
    selectedColor: '',
    selectedHeight: '',
    viewerLoaded: false
  }

  handleColorChange = (selectedColor) => {
    this.setState({ selectedColor });
  }
  
  handleHeightChange = (selectedHeight) => {
    this.setState({ selectedHeight });
  }

  handleLoaded = () => {
    this.setState({ viewerLoaded: true });
  }

  render() {
    return (
      <div className='App'>
        <main className='App-main'>
          <SidePanel optionsLoaded={this.state.viewerLoaded} onColorChange={this.handleColorChange} onHeightChange={this.handleHeightChange} />
          <Viewer onLoaded={this.handleLoaded} selectedColor={this.state.selectedColor} selectedHeight={this.state.selectedHeight} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

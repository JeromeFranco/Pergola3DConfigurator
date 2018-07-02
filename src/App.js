import React, { Component } from 'react';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import './App.css';

class App extends Component {
  state = {
    selectedBaseColor: '',
    selectedSidePanelColor: '',
    selectedHeight: '',
    viewerLoaded: false,
    showSidePanel: false,
  }

  handleBaseColorChange = (selectedBaseColor) => {
    this.setState({ selectedBaseColor });
  }

  handleSidePanelColorChange = (selectedSidePanelColor) => {
    this.setState({ selectedSidePanelColor });
  }
  
  handleHeightChange = (selectedHeight) => {
    this.setState({ selectedHeight });
  }

  handleLoaded = () => {
    this.setState({ viewerLoaded: true });
  }

  handleShowHideSidePanel = (showSidePanel) => {
    this.setState({ showSidePanel });
  }

  render() {
    return (
      <div className='App'>
        <main className='App-main'>
          <SidePanel
            optionsLoaded={this.state.viewerLoaded}
            onBaseColorChange={this.handleBaseColorChange}
            onSidePanelColorChange={this.handleSidePanelColorChange}
            onHeightChange={this.handleHeightChange}
            onShowHideSidePanel={this.handleShowHideSidePanel}
          />
          <Viewer
            onLoaded={this.handleLoaded}
            selectedBaseColor={this.state.selectedBaseColor}
            selectedSidePanelColor={this.state.selectedSidePanelColor}
            selectedHeight={this.state.selectedHeight}
            showSidePanel={this.state.showSidePanel}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

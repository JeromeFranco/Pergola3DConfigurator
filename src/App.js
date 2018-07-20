import React, { Component } from 'react';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import './App.css';

class App extends Component {
  state = {
    selectedHeight: '',
    selectedBaseColor: '',
    selectedSidePanelColor: '',
    selectedShutterPanelColor: '',
    viewerLoaded: false,
    showSidePanel: false,
    showShutterPanel: false
  }

  handleHeightChange = (selectedHeight) => {
    this.setState({ selectedHeight });
  }

  handleBaseColorChange = (selectedBaseColor) => {
    this.setState({ selectedBaseColor });
  }

  handleSidePanelColorChange = (selectedSidePanelColor) => {
    this.setState({ selectedSidePanelColor });
  }

  handleShutterPanelColorChange = (selectedShutterPanelColor) => {
    this.setState({ selectedShutterPanelColor });
  }
  
  handleLoaded = () => {
    this.setState({ viewerLoaded: true });
  }

  handleShowHideSidePanel = (showSidePanel) => {
    this.setState({ showSidePanel });
  }

  handleShowHideShutterPanel = (showShutterPanel) => {
    this.setState({ showShutterPanel });
  }

  render() {
    return (
      <div className='App'>
        <main className='App-main'>
          <SidePanel
            onHeightChange={this.handleHeightChange}
            onBaseColorChange={this.handleBaseColorChange}
            onSidePanelColorChange={this.handleSidePanelColorChange}
            onShutterPanelColorChange={this.handleShutterPanelColorChange}
            onShowHideSidePanel={this.handleShowHideSidePanel}
            onShowHideShutterPanel={this.handleShowHideShutterPanel}
            optionsLoaded={this.state.viewerLoaded}
            showSidePanel={this.state.showSidePanel}
            showShutterPanel={this.state.showShutterPanel}
          />
          <Viewer
            onLoaded={this.handleLoaded}
            selectedHeight={this.state.selectedHeight}
            selectedBaseColor={this.state.selectedBaseColor}
            selectedSidePanelColor={this.state.selectedSidePanelColor}
            selectedShutterPanelColor={this.state.selectedShutterPanelColor}
            showSidePanel={this.state.showSidePanel}
            showShutterPanel={this.state.showShutterPanel}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;

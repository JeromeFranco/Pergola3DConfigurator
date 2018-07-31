import React, { Component } from 'react';
import SidePanel from './components/SidePanel';
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import Configurator from './pergolaConfigurator';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.configurator = new Configurator(
      this.handleBaseTexturesLoaded, 
      this.handleSidePanelTexturesLoaded, 
      this.handleShutterPanelTexturesLoaded
    );
    this.state = {
      selectedHeight: '',
      selectedBaseColor: '',
      selectedSidePanelColor: '',
      selectedShutterPanelColor: '',
      baseColorLoaded: false,
      sidePanelColorLoaded: false,
      shutterPanelColorLoaded: false,
      showSidePanel: false,
      showShutterPanel: false
    }
  }

  handleBaseTexturesLoaded = textureIds => this.setState({ baseColorLoaded: (textureIds && textureIds.length) });
  handleSidePanelTexturesLoaded = textureIds => this.setState({ sidePanelColorLoaded: (textureIds && textureIds.length) });
  handleShutterPanelTexturesLoaded = textureIds => this.setState({ shutterPanelColorLoaded: (textureIds && textureIds.length) });

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
            baseColorLoaded={this.state.baseColorLoaded}
            sidePanelColorLoaded={this.state.sidePanelColorLoaded}
            shutterPanelColorLoaded={this.state.shutterPanelColorLoaded}
            showSidePanel={this.state.showSidePanel}
            showShutterPanel={this.state.showShutterPanel}
          />
          <Viewer
            configurator={this.configurator}
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

import React, { Component } from 'react';
import './Viewer.css';

class Viewer extends Component {
  async componentDidMount() {
    this.configurator = this.props.configurator;
    window.configurator = this.configurator;
    this.configurator.init(this.iframe);
  }

  componentWillReceiveProps({ selectedHeight, selectedBaseColor, selectedSidePanelColor, selectedShutterPanelColor, showSidePanel, showShutterPanel }) {
      if(selectedHeight !== this.props.selectedHeight) {
          this.configurator.selectLegHeight(selectedHeight);
      }

      if(selectedBaseColor !== this.props.selectedBaseColor) {
        this.configurator.selectBaseColor(selectedBaseColor);
      }

      if(selectedSidePanelColor !== this.props.selectedSidePanelColor) {
        this.configurator.selectSidePanelColor(selectedSidePanelColor);
      }

      if(selectedShutterPanelColor !== this.props.selectedShutterPanelColor) {
        this.configurator.selectShutterPanelColor(selectedShutterPanelColor);
      }
      
      if(showSidePanel !== this.props.showSidePanel) {
        this.configurator.showHideSidePanel(showSidePanel);
      }
      
      if(showShutterPanel !== this.props.showShutterPanel) {
        this.configurator.showHideShutterPanel(showShutterPanel);
      }
  }

  render() {
    return (
      <iframe
        src='https://sketchfab.com/models/d3a126ad01154658ba2744439642ee4f'
        className="Viewer"
        id="api-frame"
        title="api-frame"
        ref={(iframe) => {this.iframe = iframe }}
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true">
      </iframe>
    );
  }
}

export default Viewer;
const URLID = '3696a34a8dc44cb2ab4c9f730e2cf101';
const TEXTURE_PATH = 'https://pergola-configurator.azurewebsites.net/static/media';

export const legHeightOptions = [
  {
    value: 250,
    label: '250 cm',
    id: null,
    sidePanelId: null,
    selected: false, 
  },
  {
    value: 275,
    label: '275 cm',
    id: null,
    sidePanelId: null,
    selected: false, 
  },
  {
    value: 300,
    label: '300 cm',
    id: null,
    sidePanelId: null,
    selected: true, 
  },
];

export const sidePanelColorOptions = [
  {
    value: 'SideWoodDark',
    selected: true,
    className: 'SideWoodDark', // this css class allows you to style option (e.g. set background image)
  },
  {
    value: 'SideWoodLight',
    selected: false,
    className: 'SideWoodLight',
  },
  {
    value: 'SideWhite',
    selected: false,
    className: 'SideWhite',
  },
];

export const shutterPanelColorOptions = [
  {
    value: 'ShutterBrown',
    selected: true,
    className: 'ShutterBrown', // this css class allows you to style option (e.g. set background image)
  },
  {
    value: 'ShutterGrey',
    selected: false,
    className: 'ShutterGrey',
  },
  {
    value: 'ShutterWhite',
    selected: false,
    className: 'ShutterWhite',
  },
];

export const colorOptions = [
  {
    value: 'BaseBlack',
    selected: true,
    className: 'color1', // this css class allows you to style option (e.g. set background image)
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseBlack.png`,
  },
  {
    value: 'BaseGrey',
    selected: false,
    className: 'color2',
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseGrey.png`,
  },
  {
    value: 'BaseWhite',
    selected: false,
    className: 'color3',
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseWhite.png`,
  }
];

const baseTextures = [
  `${TEXTURE_PATH}/base/PergolaBaseBlack.png`,
  `${TEXTURE_PATH}/base/PergolaBaseGrey.png`,
  `${TEXTURE_PATH}/base/PergolaBaseWhite.png`,
];

const sidePanelTextures = [
  `${TEXTURE_PATH}/side-panels/PergolaBaseBlackSideWoodDark.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseBlackSideWoodLight.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseBlackSideWhite.png`,

  `${TEXTURE_PATH}/side-panels/PergolaBaseGreySideWoodDark.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseGreySideWoodLight.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseGreySideWhite.png`,

  `${TEXTURE_PATH}/side-panels/PergolaBaseWhiteSideWoodDark.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseWhiteSideWoodLight.png`,
  `${TEXTURE_PATH}/side-panels/PergolaBaseWhiteSideWhite.png`,
];

const shutterPanelTextures = [
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodDarkShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodDarkShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodDarkShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodLightShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodLightShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWoodLightShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWhiteShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWhiteShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseBlackSideWhiteShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodDarkShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodDarkShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodDarkShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodLightShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodLightShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWoodLightShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWhiteShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWhiteShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseGreySideWhiteShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodDarkShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodDarkShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodDarkShutterWhite.png`,

  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodLightShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodLightShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWoodLightShutterWhite.png`,  

  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWhiteShutterBrown.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWhiteShutterGrey.png`,
  `${TEXTURE_PATH}/shutters/PergolaBaseWhiteSideWhiteShutterWhite.png`,
];

class Configurator {
  api = null;
  textureId;
  selectedBaseColor = colorOptions.find(c => c.selected);
  selectedSidePanelColor = sidePanelColorOptions.find(sp => sp.selected);
  selectedShutterPanelColor = shutterPanelColorOptions.find(sp => sp.selected);
  selectedLegHeight = null;
  showSidePanel = false;
  sidePanelTexturesLoaded = false;
  showShutterPanel = false;
  shutterPanelTexturesLoaded = false;
  shutterPanelId;
  roofPanelId;
  onLoaded;

  init(iframe) {
    const client = new window.Sketchfab(iframe);

    return new Promise((resolve, reject) => {
      client.init(URLID, {
          ui_infos: 0,
          ui_controls: 0,
          graph_optimizer: 0,
          success: (api) => {
            api.start();
            api.addEventListener('viewerready', () => {
                this.api = api;
                this.initializeOptions();
                Promise.all([
                  this.loadTextures(baseTextures),
                  this.getTextureId()
                ]).then(([textureIds, textureId]) => {
                  this.textureId = textureId;
                  this.selectBaseColor(this.selectedBaseColor);
                  resolve(true);
                });
            });
          },
          error: () => {
            reject(false);
          }
      });
    });
  }

  initializeOptions() {
    this.api.getNodeMap((err, nodes) => {
      console.log(nodes);

      const nodeList = Object.values(nodes);

      legHeightOptions.forEach((option) => {
        option.id = nodeList
          .find(node => node.name && node.name.includes(`Legs${option.value}`) && node.type === 'Group')
          .instanceID;

        const sidePanelId = nodeList
          .find(node => node.name && node.name.includes(`SidePanel_${option.value}`) && node.type === 'Group')
          .instanceID;
        
        option.sidePanelId = sidePanelId;

        if (!this.showSidePanel) {
          this.api.hide(sidePanelId);
        }
      });

      this.shutterPanelId = nodeList
          .find(node => node.name && node.name.includes(`ShutterPanel`) && node.type === 'Group')
          .instanceID;
        
      this.roofPanelId = nodeList
        .find(node => node.name && node.name.includes(`RoofPanels`) && node.type === 'Group')
        .instanceID;

      if (!this.showShutterPanel) {
        this.api.hide(this.shutterPanelId);
      }

      this.api.hide(this.roofPanelId);
      
      this.selectLegHeight(legHeightOptions.find(lg => lg.selected).value);
    });
  }

  selectLegHeight(value) {
    legHeightOptions.forEach((option) => {
      if (option.value === value) {
        this.api.show(option.id);
        if (this.showSidePanel) {
          this.api.show(option.sidePanelId);
        }
        this.selectedLegHeight = option;
      } else {
        this.api.hide(option.id);
        if (this.showSidePanel) {
          this.api.hide(option.sidePanelId);
        }
      }
    });
  }

  selectBaseColor(option) {
    this.selectedBaseColor = option;
    this.applyTexture();
  }
  
  selectSidePanelColor(option) {
    this.selectedSidePanelColor = option;
    this.applyTexture();
  }

  selectShutterPanelColor(option) {
    this.selectedShutterPanelColor = option;
    this.applyTexture();
  }

  applyTexture() {
    let textureFolder = 'base';
    if (this.showShutterPanel) {
      textureFolder = 'shutters'
    } else if (this.showSidePanel) {
      textureFolder = 'side-panels';
    }

    const textureFileName = `Pergola${
      this.selectedBaseColor.value
    }${
      !this.showSidePanel && !this.showShutterPanel ? '' : this.selectedSidePanelColor.value
    }${
      this.showShutterPanel ? `${this.selectedShutterPanelColor.value}` : ''
    }`;

    const textureFullPath = `${TEXTURE_PATH}/${textureFolder}/${textureFileName}.png`;

    this.api.updateTexture(
      textureFullPath,
      this.textureId,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ', textureFullPath );
      }
    );
  }

  loadTextures(textures) {
    const textureIds = textures.map((texture) => 
      new Promise((resolve, reject) => {
        this.api.addTexture(texture, (err, textureUid) => {
            if (err !== null) reject(err);
            resolve(texture);
        });
      })
    );

    return Promise.all(textureIds);
  }

  getTextureId() {
    return new Promise((resolve, reject) => {
      this.api.getTextureList((err, textureIds) => {
        if(err !== null) reject(err);

        resolve( textureIds.find(t => !t.uid.includes('tmp')).uid );
      });
    })
  }

  async showHideSidePanel(show) {
    this.showSidePanel = show;

    if (show) {
      if (!this.sidePanelTexturesLoaded) {
        const textureIds = await this.loadTextures(sidePanelTextures);
        this.sidePanelTexturesLoaded = textureIds && textureIds.length;
      }
      this.api.show(this.selectedLegHeight.sidePanelId);
      this.selectSidePanelColor(this.selectedSidePanelColor);
    } else {
      this.api.hide(this.selectedLegHeight.sidePanelId);
    }
  }

  async showHideShutterPanel(show) {
    this.showShutterPanel = show;

    if (show) {
      if (!this.shutterTexturesLoaded) {
        const textureIds = await this.loadTextures(shutterPanelTextures);
        this.shutterPanelTexturesLoaded = textureIds && textureIds.length;
      }
      this.api.show(this.shutterPanelId);
      this.selectShutterPanelColor(this.selectedShutterPanelColor);
    } else {
      this.api.hide(this.selectedLegHeight.sidePanelId);
    }
  }
}

export default Configurator;
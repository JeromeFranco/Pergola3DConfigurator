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
    value: 'sidePanelColor1',
    selected: true,
    className: 'sidePanelColor1', // this css class allows you to style option (e.g. set background image)
  },
  {
    value: 'sidePanelColor2',
    selected: false,
    className: 'sidePanelColor2',
  },
  {
    value: 'sidePanelColor3',
    selected: false,
    className: 'sidePanelColor3',
  },
];

export const shutterPanelColorOptions = [
  {
    value: 'shutterPanelColor1',
    selected: true,
    className: 'shutterPanelColor1', // this css class allows you to style option (e.g. set background image)
  },
  {
    value: 'shutterPanelColor2',
    selected: false,
    className: 'shutterPanelColor2',
  },
  {
    value: 'shutterPanelColor3',
    selected: false,
    className: 'shutterPanelColor3',
  },
];

export const colorOptions = [
  {
    value: 'black',
    selected: true,
    className: 'color1', // this css class allows you to style option (e.g. set background image)
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseBlack.png`,
    sidePanelColors: [
      { 
        value: 'sidePanelColor1', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseBlackSidepanels1.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterBrownSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterBrownSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterBrownSideWhite.png` },
        ] 
      },
      { 
        value: 'sidePanelColor2', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseBlackSidepanels2.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterGreySideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterGreySideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterGreySideWhite.png` },
        ]
      },
      { 
        value: 'sidePanelColor3', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseBlackSidepanels3.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterWhiteSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterWhiteSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseBlackShutterWhiteSideWhite.png` },
        ]
      }
    ]
  },
  {
    value: 'grey',
    selected: false,
    className: 'color2',
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseGrey.png`,
    sidePanelColors: [
      { 
        value: 'sidePanelColor1', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseGreySidepanels1.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterBrownSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterBrownSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterBrownSideWhite.png` },
        ] 
      },
      { 
        value: 'sidePanelColor2', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseGreySidepanels2.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterGreySideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterGreySideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterGreySideWhite.png` },
        ] 
      },
      { 
        value: 'sidePanelColor3', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseGreySidepanels3.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterWhiteSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterWhiteSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseGreyShutterWhiteSideWhite.png` },
        ] 
      }
    ]
  },
  {
    value: 'white',
    selected: false,
    className: 'color3',
    textureUrl: `${TEXTURE_PATH}/base/PergolaBaseWhite.png`,
    sidePanelColors: [
      { 
        value: 'sidePanelColor1', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseWhiteSidepanels1.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterBrownSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterBrownSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterBrownSideWhite.png` },
        ] 
      },
      { 
        value: 'sidePanelColor2', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseWhiteSidepanels2.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterGreySideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterGreySideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterGreySideWhite.png` },
        ] 
      },
      { 
        value: 'sidePanelColor3', 
        textureUrl: `${TEXTURE_PATH}/side-panels/Pergola_BaseWhiteSidepanels3.png`,
        shutterPanelColors: [
          { value: 'shutterPanelColor1', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterWhiteSideWoodDark.png` },
          { value: 'shutterPanelColor2', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterWhiteSideGrey.png` },
          { value: 'shutterPanelColor3', textureUrl: `${TEXTURE_PATH}/shutters/PergolaBaseWhiteShutterWhiteSideWhite.png` },
        ] 
      }
    ]
  }
];

class Configurator {
  api = null;
  textureId;
  selectedBaseColor = colorOptions.find(c => c.selected);
  selectedSidePanelColor;
  selectedShutterPanelColor;
  selectedLegHeight = null;
  showSidePanel = false;
  sidePanelTexturesLoaded = false;
  showShutterPanel = false;
  shutterPanelTexturesLoaded = false;
  shutterPanelId;
  roofPanelId;
  onLoaded;

  constructor() {
    this.selectedSidePanelColor = this.selectedBaseColor.sidePanelColors.find(sp => sp.value === (sidePanelColorOptions.find(sp => sp.selected).value));
    this.selectedShutterPanelColor = this.selectedSidePanelColor.shutterPanelColors.find(sp => sp.value === (shutterPanelColorOptions.find(sp => sp.selected).value));
  }

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
                  this.loadBaseTextures(),
                  this.getTextureId()
                ]).then(([baseTextures, textureId]) => {
                  this.textureId = textureId;
                  this.selectBaseColor(baseTextures.find(bt => bt.selected));
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
      legHeightOptions.forEach((option) => {
        option.id = Object.values(nodes)
          .find(node => node.name && node.name.includes(`Legs${option.value}`) && node.type === 'Group')
          .instanceID;

        const sidePanelId = Object.values(nodes)
          .find(node => node.name && node.name.includes(`SidePanel_${option.value}`) && node.type === 'Group')
          .instanceID;
        
        option.sidePanelId = sidePanelId;

        if (!this.showSidePanel) {
          this.api.hide(sidePanelId);
        }
      });

      this.shutterPanelId = Object.values(nodes)
          .find(node => node.name && node.name.includes(`ShutterPanel`) && node.type === 'Group')
          .instanceID;
        
      this.roofPanelId = Object.values(nodes)
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
    const { textureUrl } = this.showSidePanel ? 
      option.sidePanelColors.find(sp => sp.value === this.selectedSidePanelColor.value) : option;
      
    this.api.updateTexture(
      textureUrl,
      this.textureId,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ' + textureUid );
      }
    );

    this.selectedBaseColor = option;
  }
  
  selectSidePanelColor(option) {
    const sidePanelColor = this.selectedBaseColor.sidePanelColors.find(sp => sp.value === option.value);
    
    this.api.updateTexture(
      sidePanelColor.textureUrl,
      this.textureId,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ', sidePanelColor.textureUrl );
      }
    );

    this.selectedSidePanelColor = sidePanelColor;
  }

  selectShutterPanelColor(option) {
    const shutterPanelColor = this.selectedSidePanelColor.shutterPanelColors.find(sp => sp.value === option.value);
    
    this.api.updateTexture(
      shutterPanelColor.textureUrl,
      this.textureId,
      function ( err, textureUid ) {
          console.log( 'replaced texture with uid: ', shutterPanelColor.textureUrl );
      }
    );

    this.selectedShutterPanelColor = shutterPanelColor;
  }

  loadBaseTextures() {
    const textureIds = colorOptions.map((option) => {
      return new Promise((resolve,reject) => {
        this.api.addTexture(option.textureUrl, (err, textureUid) => {
            if(err !== null) reject(err);
            resolve(option);
        });
      });
    });

    return Promise.all(textureIds);
  }

  loadSidePanelTextures() {
    const textureIds = colorOptions
      .reduce((acc, curr) => [ ...acc, ...curr.sidePanelColors], [])
      .map((option) => new Promise((resolve,reject) => {
          this.api.addTexture(option.textureUrl, (err, textureUid) => {
              if (err !== null) reject(err);
              resolve(textureUid);
          });
        })
      );

    this.sidePanelTexturesLoaded = true;

    return Promise.all(textureIds);
  }

  loadShutterPanelTextures() {
    const textureIds = colorOptions
      .reduce((acc, curr) => [ ...acc, ...curr.sidePanelColors], [])
      .reduce((acc, curr) => [ ...acc, ...curr.shutterPanelColors], [])
      .filter((option) => option.value)
      .map((option) => new Promise((resolve,reject) => {
          this.api.addTexture(option.textureUrl, (err, textureUid) => {
              if (err !== null) reject(err);
              resolve(textureUid);
          });
        })
      );
    
    this.shutterPanelTexturesLoaded = true;

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
    if (show) {
      if (!this.sidePanelTexturesLoaded) {
        await this.loadSidePanelTextures();
      }
      this.api.show(this.selectedLegHeight.sidePanelId);
      this.selectSidePanelColor(this.selectedSidePanelColor);
    } else {
      this.api.hide(this.selectedLegHeight.sidePanelId);
    }
    this.showSidePanel = show;
  }

  async showHideShutterPanel(show) {
    if (show) {
      if (!this.shutterTexturesLoaded) {
        await this.loadShutterPanelTextures();
      }
      this.api.show(this.shutterPanelId);
      this.selectShutterPanelColor(this.selectedShutterPanelColor);
    } else {
      this.api.hide(this.selectedLegHeight.sidePanelId);
    }
    this.showShutterPanel = show;
  }
}
 export default Configurator;
function PaletteLoaderService() {

  var colours =
        {
          'palette1': {
          data: [
            {
              name: 'Olive',
              colourname: "olive"
            }, {
              name: 'Olive Drab',
              colourname: "olivedrab"
            }, {
              name: 'Dark Olive Green',
              colourname: "darkolivegreen"
            },
            {
              name: 'Forest Green',
              colourname: "forestgreen"
            }, 
            {
              name: 'Sienna',
              colourname: "sienna"
            }
          ]
        }
      };

  this.getColours = function getColours(paletteID) {


    return colours['palette1'].data;
  };
}
angular
  .module('ColourBrag')
  .service('PaletteLoaderService', PaletteLoaderService);

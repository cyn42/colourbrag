function PaletteController () {
  this.colours = [
        {
          name: 'Olive',
          colourname: "olive"
        }, {
          name: 'Olive Drab',
          colourname: "olivedrab"
        }, {
          name: 'Dark Olive Green',
          colourname: "darkolivegreen"
        }, {
          name: 'Forest Green',
          colourname: "forestgreen"
        }, {
          name: 'Sienna',
          colourname: "sienna"
        }
      ];

}

angular.
  module("ColourBrag").
  component('palette', {
    templateUrl: 'app/components/palette/palette.template.html',
    controller: PaletteController
});

function PaletteController (PaletteLoaderService,$log) {
  $log.debug("Inside the PaletteController function");
  this.colours = PaletteLoaderService.getColours();
  this.paletteID = 'palette1';

  this.addColour = function(colourLabel,colourName) {
    $log.debug("Inside the PaletteController addColour method");
    PaletteLoaderService.addColour(this.paletteID,'Cyan','cyan');
  };
}

angular.
  module("ColourBrag").
  component('palette', {
    templateUrl: 'app/components/palette/palette.template.html',
    controller: PaletteController
});

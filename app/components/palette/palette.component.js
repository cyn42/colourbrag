function PaletteController (PaletteLoaderService,$log) {
  $log.debug("Inside the PaletteController function");
  this.colours = PaletteLoaderService.getColours();
}

angular.
  module("ColourBrag").
  component('palette', {
    templateUrl: 'app/components/palette/palette.template.html',
    controller: PaletteController
});

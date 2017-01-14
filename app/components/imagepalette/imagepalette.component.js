function ImagePaletteController () {
  var ctrl = this;

  ctrl.message = "Loaded from the controller";

}

angular.
  module("ColourBrag").
  component('imagePalette', {
    templateUrl: 'app/components/imagepalette/imagepalette.template.html',
    controller: ImagePaletteController
});

describe('Palette Component', function() {

  var controller;

  beforeEach(angular.mock.module('ColourBrag'));

  beforeEach(inject(function($componentController){

        controller = $componentController('palette' );
    }));

  it('should exist', function() {
    expect(controller).toBeDefined();

  });

  it('should return a default palette ID of "palette1"', function() {
    expect(controller.paletteID).toEqual('palette1');
  });

  it('should return 5 colours', function() {
    expect(controller.colours.length).toEqual(5);
  });

  it('should return 6 colours after adding a colour', function() {
    controller.addColour('Red','red');
    expect(controller.colours.length).toEqual(6);
  });


});

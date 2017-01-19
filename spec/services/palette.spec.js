describe('Palette service', function() {

  var PaletteLoaderService;
  var TestColours = [
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
  ];

  beforeEach(angular.mock.module('ColourBrag'));

  beforeEach(inject(function(_PaletteLoaderService_) {
    PaletteLoaderService = _PaletteLoaderService_;
  }));

  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(4).toEqual(4);
  });

  it('should exist and return 5 colours', function() {
    expect(PaletteLoaderService.getColours('palette1')).toBeDefined();
    expect(PaletteLoaderService.getColours('palette1').length).toEqual(5);
  });

  it('shoud return the right colors',function() {
    expect(PaletteLoaderService.getColours('palette1')).toEqual(TestColours);
  });

  it('should increase the size of the array when a new colour is added', function() {
    //this.addColour = function addColour(paletteID, label, colourname )
    PaletteLoaderService.addColour('palette1','Cyan','cyan');
    expect(PaletteLoaderService.getColours('palette1').length).toEqual(6);
    expect(PaletteLoaderService.getColours('palette1')[5].name).toEqual('Cyan');

  });

});

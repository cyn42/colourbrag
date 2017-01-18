describe('Palette service', function() {

  var PaletteLoaderService;

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




});

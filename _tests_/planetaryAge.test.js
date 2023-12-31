import SpaceAge from "../src/planetaryAge";

describe('SpaceAge', () => {
  const myAge = new SpaceAge(26);
  const earthAge = 26;

  test('should correctly calculate age on Mercury', () => {
    const expectedAge = earthAge / 0.24;
    expect(myAge.onPlanet('Mercury')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on Venus', () => {
    const expectedAge = earthAge / 0.62;
    expect(myAge.onPlanet('Venus')).toBeCloseTo(expectedAge);
  });
  
  test('should correctly calculate age on mars', () => {
    const expectedAge = earthAge / 1.88;
    expect(myAge.onPlanet('Mars')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on jupiter', () => {
    const expectedAge = earthAge / 11.86;
    expect(myAge.onPlanet('Jupiter')).toBeCloseTo(expectedAge);
  });

  
});
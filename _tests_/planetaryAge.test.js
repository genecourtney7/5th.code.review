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

  test('should correctly calculate age on Earth', () => {
    const expectedAge = earthAge;
    expect(myAge.onPlanet('Earth')).toBeCloseTo(expectedAge);
  });
  
  test('should correctly calculate age on Mars', () => {
    const expectedAge = earthAge / 1.88;
    expect(myAge.onPlanet('Mars')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on Jupiter', () => {
    const expectedAge = earthAge / 11.86;
    expect(myAge.onPlanet('Jupiter')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on Saturn', () => {
    const expectedAge = earthAge / 29.46;
    expect(myAge.onPlanet('Saturn')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on Uranus', () => {
    const expectedAge = earthAge / 84.01;
    expect(myAge.onPlanet('Uranus')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Mercury since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 0.24;
    expect(myAge.yearsPassed('Mercury', 20)).toBeCloseTo(expectedAge); 
  });

  test('should correctly calculate years to come on Mercury until 50th Birthday', () => {
    const expectedAge = (50 - earthAge) / 0.24;
    expect(myAge.yearsToCome('Mercury', 50)).toBeCloseTo(expectedAge);
  });
});
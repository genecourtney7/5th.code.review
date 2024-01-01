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

  test('should correctly calculate age on Neptune', () => {
    const expectedAge = earthAge / 164.8;
    expect(myAge.onPlanet('Neptune')).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate age on Pluto', () => {
    const expectedAge = earthAge / 248.00;
    expect(myAge.onPlanet('Pluto')).toBeCloseTo(expectedAge);
  }); 

  test('should correctly calculate years passed on Mercury since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 0.24;
    expect(myAge.yearsPassed('Mercury', 20)).toBeCloseTo(expectedAge); 
  });

  test('should correctly calculate years passed on Venus since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 0.62;
    expect(myAge.yearsPassed('Venus', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Mars since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 1.88;
    expect(myAge.yearsPassed('Mars', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Jupiter since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 11.86;
    expect(myAge.yearsPassed('Jupiter', 20)).toBeCloseTo(expectedAge);
  });
  
  test('should correctly calculate years passed on Saturn since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 29.46;
    expect(myAge.yearsPassed('Saturn', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Uranus since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 84.01;
    expect(myAge.yearsPassed('Uranus', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Neptune since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 164.8;
    expect(myAge.yearsPassed('Neptune', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years passed on Pluto since 20th birthday', () => {
    const expectedAge = (earthAge - 20) / 248.00;
    expect(myAge.yearsPassed('Pluto', 20)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Mercury until 50th Birthday', () => {
    const expectedAge = (50 - earthAge) / 0.24;
    expect(myAge.yearsToCome('Mercury', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Venus until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 0.62;
    expect(myAge.yearsToCome('Venus', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Mars until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 1.88;
    expect(myAge.yearsToCome('Mars', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Jupiter until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 11.86;
    expect(myAge.yearsToCome('Jupiter', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Saturn until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 29.46;
    expect(myAge.yearsToCome('Saturn', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Uranus until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 84.01;
    expect(myAge.yearsToCome('Uranus', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Neptune until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 164.8;
    expect(myAge.yearsToCome('Neptune', 50)).toBeCloseTo(expectedAge);
  });

  test('should correctly calculate years to come on Pluto until 50th birthday', () => {
    const expectedAge = (50 - earthAge) / 248.00;
    expect(myAge.yearsToCome('Pluto', 50)).toBeCloseTo(expectedAge);
  });
});
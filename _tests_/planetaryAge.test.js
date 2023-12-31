import SpaceAge from "../src/planetaryAge";

describe('SpaceAge', () => {
    const myAge = new SpaceAge(26);
    const earthAge = 26;

    test('should correctly calculate age on Mercury', () => {
        const expectedAge = earthAge / 0.24;
        expect(myAge.onPlanet('Mercury')).toBeCloseTo(expectedAge);
    });

});
import {addMoneyToBudget, CityType} from "./03_02";

let city: CityType;


beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012, repaired: false,
                address: {number: 100, street: {title: 'White street'}}
            },
            {
                buildedAt: 2008, repaired: false,
                address: {number: 100, street: {title: 'Happy street'}}
            },
            {
                buildedAt: 2020, repaired: false,
                address: {number: 101, street: {title: 'White street'}}
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1080,
                address: {
                    street: {
                        title: "South Str"
                    }
                }
            }

        ],
        citizenNumber: 100000
    }
})

test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

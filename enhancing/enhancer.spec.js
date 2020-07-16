const enhancer = require('./enhancer.js');
// test away!

describe("repair(item)", () => {

    it("returns a new item with durability restored to 100", () => {
    
        const item = {
            name: "Poopsword",
            durability: 50,
            enhancement: 0
        }

        expect(enhancer.repair(item).durability).toBe(100)
    
    })

})

describe("succeed(item)", () => {

    it("increases the item's enchancement level by 1.", () => {

        const item = {
            name: "Poopsword",
            durability: 100,
            enhancement: 0
        }

        expect(enhancer.succeed(item).enhancement).toBe(1)

    })

    it("does not increase the enhancement level if the enhancement is already 20", () => {

        const item = {
            name: "Poopsword",
            durability: 100,
            enhancement: 20
        }

        expect(enhancer.succeed(item).enhancement).toBe(20)

    })

    it("does not change the durability of the item.", () => {

        const item = {
            name: "Poopsword",
            durability: 50,
            enhancement: 10
        }

        expect(enhancer.succeed(item).durability).toBe(50)

    })

})

describe("fail(item)", () => {

    it("decreases durability by 5 if the item's enhancement is less than 15", () => {

        const item = {
            name: "Poopsword",
            durability: 100,
            enhancement: 14
        }

        expect(enhancer.fail(item).durability).toBe(95)

    })

    it("decreases durability by 10 if the item's enhancement is 15 or more", () => {

        const item1 = {
            name: "Poopsword",
            durability: 100,
            enhancement: 15
        }

        const item2 = {
            name: "Poopsword",
            durability: 100,
            enhancement: 19
        }

        expect(enhancer.fail(item1).durability).toBe(90)
        expect(enhancer.fail(item2).durability).toBe(90)

    })

    it("decreases enchantment level by 1 if the item's enhancement level is greater than 16", () => {
        
        const item1 = {
            name: "Poopsword",
            durability: 100,
            enhancement: 15
        }

        const item2 = {
            name: "Poopsword",
            durability: 100,
            enhancement: 19
        }

        expect(enhancer.fail(item1).enhancement).toBe(15)
        expect(enhancer.fail(item2).enhancement).toBe(18)

    })

})

describe("get(item)", () => {

    it("doesn't modify the name if the enhancement level is 0", () => {

        const item = {
            name: "Poopsword",
            durability: 100,
            enhancement: 0
        }

        expect(enhancer.get(item).name).toBe("Poopsword")

    })

    it("changes the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name", () => {

        const item = {
            name: "Poopsword",
            durability: 100,
            enhancement: 6
        }

        expect(enhancer.get(item).name).toBe("[+6] Poopsword")

    })

})
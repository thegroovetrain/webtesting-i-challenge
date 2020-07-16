const enhancer = require('./enhancer.js');
// test away!

describe("repair(item)", () => {

    it("returns a new item with durability restored to 100", () => {
    
        const item = {
            name: "Repair Test",
            durability: 50,
            enhancement: 0
        }

        expect(enhancer.repair(item).durability).toBe(100)
    
    })

})

describe("succeed(item)", () => {

    it("increases the item's enchancement level by 1.", () => {

        const item = {
            name: "Succeed Test 1",
            durability: 100,
            enhancement: 0
        }

        expect(enhancer.succeed(item).enhancement).toBe(1)

    })

    it("does not increase the enhancement level if the enhancement is already 20", () => {

        const item = {
            name: "Succeed Test 2",
            durability: 100,
            enhancement: 20
        }

        expect(enhancer.succeed(item).enhancement).toBe(20)

    })

    it("does not change the durability of the item.", () => {

        const item = {
            name: "Succeed Test 3",
            durability: 50,
            enhancement: 10
        }

        expect(enhancer.succeed(item).durability).toBe(50)

    })

})

describe("fail(item)", () => {

    it("decreases durability by 5 if the item's enhancement is less than 15", () => {

        const item = {
            name: "Fail Test 1",
            durability: 100,
            enhancement: 14
        }

        expect(enhancer.fail(item).durability).toBe(95)

    })

    it("decreases durability by 10 if the item's enhancement is 15 or more", () => {

        const item1 = {
            name: "Fail Test 2",
            durability: 100,
            enhancement: 15
        }

        const item2 = {
            name: "Fail Test 3",
            durability: 100,
            enhancement: 19
        }

        expect(enhancer.fail(item1).durability).toBe(90)
        expect(enhancer.fail(item2).durability).toBe(90)

    })

    it("decreases enchantment level by 1 if the item's enhancement level is greater than 16", () => {
        
        const item1 = {
            name: "Fail Test 4",
            durability: 100,
            enhancement: 15
        }

        const item2 = {
            name: "Fail Test 5",
            durability: 100,
            enhancement: 19
        }

        expect(enhancer.fail(item1).enhancement).toBe(15)
        expect(enhancer.fail(item2).enhancement).toBe(18)

    })

})
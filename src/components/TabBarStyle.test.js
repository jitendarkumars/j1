const TabBarStyle = require("./TabBarStyle")
// @ponicode
describe("onButtonPress", () => {
    let inst

    beforeEach(() => {
        inst = new TabBarStyle.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onButtonPress("HomeScreen")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onButtonPress("   ")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onButtonPress("SearchScreen")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onButtonPress("NotificationsScreen")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onButtonPress("\t")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.onButtonPress(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

import { Not } from "typeorm";


describe("First", () => {
    it("deve ser possível somar 2 nímeros", () => {
        expect(2+2).toBe(4);
    })

    it("deve ser possível somar 2 nímeros", () => {
        expect(2+2).not.toBe(5);
    })
})
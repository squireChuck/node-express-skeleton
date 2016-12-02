describe("This example", function() {
    it("has a passing test.", function() {
        expect(true).toBe(true);
    });

    it("has a failing test.", function() {
        expect(true).toBe(false);
    });

    it("has a pending test.", function() {
        pending("Test pending investigation on testing randomness.");
        expect(true).toBe(false);
    });
});
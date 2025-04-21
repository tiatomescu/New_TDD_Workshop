// Don't forget to import your functions
import { driverStatus } from './Drivers.ts';

describe("Drivers", () => {
  test("driverStatus() returns too young for age < 16", () => {
    expect(driverStatus(15)).toBe("too young");
  });
  test("driverStatus() returns too old for age > 85", () => {
    expect(driverStatus(86)).toBe("too old");
  });
  test("driverStatus() returns eligible for age <= 85 and age >= 16", () => {
    expect(driverStatus(85)).toBe("eligible");
    expect(driverStatus(16)).toBe("eligible");
    expect(driverStatus(26)).toBe("eligible");
  });
});

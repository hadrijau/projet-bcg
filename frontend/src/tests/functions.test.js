import {
  addFareBecauseOfMiles,
  calculatePriceOfRide,
  computeDurationOfTheRide,
  computeEndTimeOfRide,
  isBusyPeriod,
  isTimeBetween8And6,
} from "../utils/functions";

test("computeDurationOfTheRide", () => {
  let expectedResult = "02:30:00";
  let result = computeDurationOfTheRide(9000);
  expect(expectedResult).toBe(result);
});

test("computeEndTimeOfRide", () => {
  let expectedResult = "05:40:00";
  let result = computeEndTimeOfRide("2022-11-05T02:10:00.000Z", 9000);
  expect(expectedResult).toBe(result);
});

test("isBusyPeriod returns True", () => {
  let result = isBusyPeriod("2022-11-17T15:15:00.000Z"); // 16h15
  expect(result).toBeTruthy();
});

test("isBusyPeriod returns False", () => {
  let result = isBusyPeriod("2020-07-19T20:01:00.000Z"); // 21h01
  expect(result).toBeFalsy();
});

test("isTimeBetween8And6 returns True", () => {
  let result = isTimeBetween8And6("2022-11-16T21:05:00.000Z"); // 22h05
  expect(result).toBeTruthy();
});

test("isTimeBetween8And6 returns False", () => {
  let result = isTimeBetween8And6("2020-07-19T08:11:00.000Z"); // 9h11
  expect(result).toBeFalsy();
});

test("addFareBecauseOfMiles", () => {
  let expectedResult = 25;
  let result = addFareBecauseOfMiles(10);
  expect(expectedResult).toBe(result);
});

test("calculatePriceOfRide", () => {
  let expectedResult = 6;
  let result = calculatePriceOfRide(2, "2022-11-05T12:00:00.000Z"); // exemple of the subject
  expect(expectedResult).toBe(result);
});

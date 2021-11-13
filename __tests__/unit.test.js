// unit.test.js

const { exportSpecifier, exportAllDeclaration } = require("@babel/types");
const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

// Testing Phone Numbers

test("Testing phone number: 408-123-4567", () => {
  expect(functions.isPhoneNumber("408-123-4567")).toBe(true);
});

test("Testing phone number: 408-765-4321", () => {
  expect(functions.isPhoneNumber("408-765-4321")).toBe(true);
});

test("Testing phone number: 243523463456", () => {
  expect(functions.isPhoneNumber("243523463456")).toBe(false);
});

test("Testing phone number: 9393939933", () => {
  expect(functions.isPhoneNumber("9393939933")).toBe(false);
});

// Testing Emails

test("Testing email: ilovecse110@gmail.com", () => {
  expect(functions.isEmail("ilovecse110@gmail.com")).toBe(true);
});

test("Testing email: butthisclassiskindatoughtho", () => {
  expect(functions.isEmail("utthisclassiskindatoughtho")).toBe(false);
});

test("Testing email: randomstudent@ucsd.edu", () => {
  expect(functions.isEmail("randomstudent@ucsd.edu")).toBe(true);
});

test("Testing email: definitelynotanemail", () => {
  expect(functions.isEmail("definitelynotanemail")).toBe(false);
});

// Testing Passwords

test("Testing password: password!", () => {
  expect(functions.isStrongPassword("password!")).toBe(false);
});

test("Testing password: 999secret", () => {
  expect(functions.isStrongPassword("999secret")).toBe(false);
});

test("Testing password: UnHackAble", () => {
  expect(functions.isStrongPassword("UnHackAble")).toBe(true);
});

test("Testing password: lab8_test", () => {
  expect(functions.isStrongPassword("lab8_Test_")).toBe(true);
});

// Testing Dates

test("Testing date: 12252021", () => {
  expect(functions.isDate("12252021")).toBe(false);
});

test("Testing date: 9/20/2021", () => {
  expect(functions.isDate("9/20/2021")).toBe(true);
});

test("Testing date: Jan-01-2022", () => {
  expect(functions.isDate("Jan-01-2022")).toBe(false);
});

test("Testing date: 09/09/1999", () => {
  expect(functions.isDate("09/09/1999")).toBe(true);
});

// Testing Hex Codes

test("Testing hex code: #00FFFF", () => {
  expect(functions.isHexColor("#00FFFF")).toBe(true);
});

test("Testing hex code: #3FF", () => {
  expect(functions.isHexColor("#3FF")).toBe(true);
});

test("Testing hex code: #999FFF#", () => {
  expect(functions.isHexColor("#999FFF#")).toBe(false);
});

test("Testing hex code: #1234567A", () => {
  expect(functions.isHexColor("#1234567A")).toBe(false);
});

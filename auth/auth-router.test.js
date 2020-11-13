const Users = require("../jokes/jokes-models");
const db = require("../database/dbConfig");

beforeEach(async () => {
  await db("users").truncate();
});

describe("users registration and login", () => {
  it("user and password are a string", async () => {
    await Users.add({ username: "sofia21", password: "corinmellone" });
    let users = await db("users");
    expect(users).toHaveLength(1);

    await Users.add({ username: "lunatic", password: "google" });
    users = await db("users");
    expect(users).toHaveLength(2);
  });
});

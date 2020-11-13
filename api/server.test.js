const request = require("supertest");
const server = require("./server");

describe("server module", () => {
  it("testing environment", () => {
    expect(process.env.DB_ENV).not.toBe("development");
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("[GET] /", () => {
    it("get all endpoint", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
      expect(res.type).toMatch(/json/);
    });
  });
});

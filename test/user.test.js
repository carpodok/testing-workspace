const app = require("../app");
const request = require("supertest");

describe("user", () => {
  it("returns if get user properly", async () => {
    const res = await request(app).get("/user");

    expect(res.statusCode).toEqual(200);
  });

  it("return bad request if name is missing", async () => {
    const res = await request(app).post("/register").send({});

    expect(res.statusCode).toEqual(400);
    expect(res.body.err).toEqual("Missing field!");
  });

  it("returns status code 201 if name is not missing", async () => {
    const res = await request(app).post("/register").send({ name: "Ali" });

    expect(res.statusCode).toEqual(201);
  });
});

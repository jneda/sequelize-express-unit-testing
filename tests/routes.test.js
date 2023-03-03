const request = require("supertest");
const app = require("../app");

describe("User API", () => {
  it("should show all users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("users");
  });

  it("should show a user", async () => {
    const response = await request(app).get("/api/users/3");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("user");
  });

  it("should create a new user", async () => {
    const response = await request(app).post("/api/users").send({
      firstName: "Bob",
      lastName: "Doe",
      email: "bob@doe.com",
      password: "123456789",
    });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("user");
  });

  it("should update a user", async () => {
    const response = await request(app)
      .put("/api/users/3")
      .send({ lastName: "Smith" });
    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("updatedUser");
  });

  it("should delete a user", async () => {
    const response = await request(app).del("/api/users/3");
    expect(response.statusCode).toEqual(200);
    expect(response.body).toHaveProperty("deletedUser");
  });
});

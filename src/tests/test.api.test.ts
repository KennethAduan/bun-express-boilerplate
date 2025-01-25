import { describe, expect, it } from "bun:test";
import supertest from "supertest";
import { createApp } from "../index";

describe("Test Controller", () => {
  const app = createApp();
  const request = supertest(app);

  it("should return hello world message", async () => {
    const response = await request.get("/api/v1/test");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Hello World Test Controller",
    });
  });

  //   it("should handle errors appropriately", async () => {
  //     // Mock the endpoint to force an error
  //     app.get("/api/v1/test-error", () => {
  //       throw new Error("Test error");
  //     });

  //     const response = await request.get("/api/v1/test-error");

  //     expect(response.status).toBe(500);
  //     expect(response.body).toEqual({
  //       status: "error",
  //       message: "Internal server error",
  //     });
  //   });
});

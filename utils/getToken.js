const request = require("supertest");
const BASE_URL = "https://restful-booker.herokuapp.com";

async function getAuthToken() {
    const res = await request(BASE_URL)
        .post("/auth")
        .send({
            username: "admin",
            password: "password123"
        })
        .set("Content-Type", "application/json");

    return res.body.token;
}

module.exports = getAuthToken;

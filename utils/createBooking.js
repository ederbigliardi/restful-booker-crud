const request = require("supertest");
const BASE_URL = "https://restful-booker.herokuapp.com";

async function createBooking(payload) {
    const res = await request(BASE_URL)
        .post("/booking")
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .send(payload);

    return res.body.bookingid;
}

module.exports = createBooking;

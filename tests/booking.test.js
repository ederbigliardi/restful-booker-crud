const axios = require("axios");

const baseUrl = "https://restful-booker.herokuapp.com";

let token;
let bookingId;

const bookingData = {
    firstname: "Éder",
    lastname: "Tester",
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
        checkin: "2025-08-27",
        checkout: "2025-08-30"
    },
    additionalneeds: "Café da manhã"
};

const updatedData = {
    ...bookingData,
    totalprice: 200,
    additionalneeds: "Café da manhã e almoço"
};

describe("Ciclo completo de reserva na API Restful Booker", () => {
    beforeAll(async () => {
        const authRes = await axios.post(`${baseUrl}/auth`, {
            username: "admin",
            password: "password123"
        });
        token = authRes.data.token;
    });

    test("Deve criar uma nova reserva", async () => {
        const res = await axios.post(`${baseUrl}/booking`, bookingData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        expect(res.status).toBe(200);
        expect(res.data.booking).toMatchObject(bookingData);
        bookingId = res.data.bookingid;
    });

    test("Deve atualizar a reserva criada", async () => {
        const res = await axios.put(`${baseUrl}/booking/${bookingId}`, updatedData, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                Cookie: `token=${token}`
            }
        });
        expect(res.status).toBe(200);
        expect(res.data).toMatchObject(updatedData);
    });

    test("Deve consultar a reserva atualizada", async () => {
        const res = await axios.get(`${baseUrl}/booking/${bookingId}`, {
            headers: {
                "Accept": "application/json"
            }
        });
        expect(res.status).toBe(200);
        expect(res.data).toMatchObject(updatedData);
    });

    test("Deve excluir a reserva", async () => {
        const res = await axios.delete(`${baseUrl}/booking/${bookingId}`, {
            headers: {
                "Accept": "application/json",
                Cookie: `token=${token}`
            }
        });
        expect(res.status).toBe(201);
    });

    test("Deve retornar 404 ao consultar reserva excluída", async () => {
        try {
            await axios.get(`${baseUrl}/booking/${bookingId}`, {
                headers: {
                    "Accept": "application/json"
                }
            });
        } catch (err) {
            expect(err.response.status).toBe(404);
            console.log(err.response.data);
        }
    });
});

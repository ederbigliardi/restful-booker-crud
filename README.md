# 🧪 Projeto: Testes Automatizados de Reservas com Jest + Supertest

Bem-vindo ao laboratório de testes! Este projeto foi criado para testar a criação de reservas na [Restful Booker API](https://restful-booker.herokuapp.com/) usando **Jest** e **Supertest**. 

---

## 🚀 Tecnologias Utilizadas

- ⚙️ **Node.js** — Ambiente de execução JavaScript
- 🧪 **Jest** — Framework de testes moderno e poderoso
- 🌐 **Supertest** — Para testar endpoints HTTP com estilo

---

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
🧰 Como funciona?
A função createBooking envia uma requisição POST para criar uma reserva na API. Ela recebe um payload com os dados da reserva e retorna o bookingid gerado.

🔍 Exemplo de uso:
js
const createBooking = require('./createBooking');

const payload = {
  firstname: "John",
  lastname: "Carpenter",
  totalprice: 150,
  depositpaid: true,
  bookingdates: {
    checkin: "2025-08-26",
    checkout: "2025-08-30"
  },
  additionalneeds: "Cafe da manha"
};

createBooking(payload).then((id) => {
  console.log("Reserva criada com ID:", id);
});
✅ Executando os testes
Para rodar os testes com Jest:

bash
npm test
Você pode criar seus testes no diretório __tests__ ou conforme sua estrutura preferida.

📁 Estrutura do Projeto
Código
├── createBooking.js       # Função principal para criar reservas
├── __tests__/             # Testes automatizados com Jest
│   └── createBooking.test.js
├── package.json
└── README.md
🧠 Aprendizados
Durante o desenvolvimento deste projeto, foram explorados:

Criação de testes automatizados com Jest

Manipulação de requisições HTTP com Supertest

Boas práticas de organização de código para testes

Interação com APIs públicas para fins educacionais

👨‍💻 Autor
Feito com 💻 por Éder Bigliardi 📍 Curitiba, PR — Brasil 🔗 LinkedIn • GitHub

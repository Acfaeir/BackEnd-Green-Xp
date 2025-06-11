GreenXP Backend
Este projeto representa o backend da aplicação GreenXP, um sistema de gamificação e incentivo à
reciclagem, com funcionalidades para registrar descartes, pontuar usuários, resgatar recompensas e
consultar relatórios.

 *Tecnologias Utilizadas*
 
Node.js + Express: servidor HTTP
Sequelize (ORM) + SQLite: banco de dados
bcrypt: hash de senhas

 **Estrutura do Projeto*
 
backendGreenXp/
├── backend/
│ ├── server.js → ponto de entrada da aplicação
│ ├── src/
│ │ ├── controllers/ → lógica de cada funcionalidade
│ │ ├── routes/ → endpoints separados por módulo
│ │ ├── models/ → modelos Sequelize
│ │ └── db/database.js → conexão com SQLite
│
└── banco/
 └── greenxp.sqlite → arquivo de banco SQLite
 
 *Funcionalidades*
 
Usuários
POST /usuarios/registrar: cria novo usuário
POST /usuarios/login: login com validação de senha (bcrypt)
GET /usuarios: lista todos os usuários

Reciclagem
POST /reciclagem: registra uma nova ação de reciclagem (gera pontos)
GET /reciclagem/:id_usuario: histórico por usuário

Lixeiras
POST /lixeiras: cria lixeira com QR Code
GET /lixeiras/qr/:codigo: busca lixeira pelo QR Code

Recompensas
GET /recompensas: lista todas as recompensas (preenchidas automaticamente se vazia)
POST /recompensas: cria uma nova recompensa

Resgate
POST /resgates: permite que um usuário troque seus pontos por uma recompensa

*📊 Banco de Dados*

As tabelas principais:
Usuario : cadastro, autenticação e controle de pontos
Reciclagem : registra cada descarte realizado pelo usuário
Lixeira : representa cada lixeira com um QR Code
Recompensa : define o catálogo de trocas
Resgate : histórico de recompensas resgatadas
Medalha : (futuro) sistema de conquistas por metas
Relatorio : (admin) dados gerados para fins administrativos

 Executando Localmente
# Instalando dependências
npm install
# Inicializando o banco (sem apagar dados)
npm run sync # usa sync({ alter: true })
# Iniciar o servidor
node backend/server.js

 Para o Frontend (React)
Autenticação:
Realize POST em /usuarios/login com { email, senha } .
Guarde o id_usuario e pontos retornados para futuras requisições.
Escanear QR Code:
Ao ler um QR Code de uma lixeira, faça:
GET /lixeiras/qr/{codigo}
Isso retorna os dados da lixeira (e tipo de resíduo aceito).
Registrar Reciclagem:
POST /reciclagem
{
 "id_usuario": 1,
 "id_lixeira": 2,
 "tipo_residuo": "Plástico",
 "quantidade": 1
}

Ver Recompensas:
GET /recompensas
Resgatar Recompensa:
POST /resgates
{
 "id_usuario": 1,
 "id_recompensa": 2
}

Ver Histórico do Usuário:
GET /reciclagem/{id_usuario}

 Futuras Expansões
Sistema de medalhas automáticas por meta de reciclagem
Geração de relatórios por administrador
Integração com push notification ou email
Interface de dashboard web
 Status Atual
-
Desenvolvido por Alan Cefair Dos Santos Souza Junior com foco em sustentabilidade e
engajamento estudantil 




# GreenXP Backend

This project represents the backend of the **GreenXP** application, a gamification and recycling incentive system. It includes features to register waste disposals, score users, redeem rewards, and consult reports.

---

## 🚀 Technologies Used

- **Node.js + Express**: HTTP server  
- **Sequelize (ORM) + SQLite**: database  
- **bcrypt**: password hashing

---

## 📁 Project Structure

```
backendGreenXp/
├── backend/
│   ├── server.js               → application entry point
│   ├── src/
│   │   ├── controllers/       → business logic
│   │   ├── routes/            → API endpoints by module
│   │   ├── models/            → Sequelize models
│   │   └── db/database.js     → SQLite connection
│
└── banco/
    └── greenxp.sqlite         → SQLite database file
```

---

## 📌 Features

### Users
- **POST /usuarios/registrar**: creates a new user  
- **POST /usuarios/login**: user login with password validation (bcrypt)  
- **GET /usuarios**: lists all users  

### Recycling
- **POST /reciclagem**: registers a new recycling action (awards points)  
- **GET /reciclagem/:id_usuario**: user’s recycling history  

### Bins
- **POST /lixeiras**: creates a bin with QR code  
- **GET /lixeiras/qr/:codigo**: retrieves a bin by QR code  

### Rewards
- **GET /recompensas**: lists all rewards (auto-populates if empty)  
- **POST /recompensas**: creates a new reward  

### Redemption
- **POST /resgates**: allows a user to redeem a reward using points  

---

## 📊 Database

Main tables:
- `Usuario`: user registration, authentication, and point tracking  
- `Reciclagem`: logs every recycling event  
- `Lixeira`: represents bins with QR codes  
- `Recompensa`: defines available rewards  
- `Resgate`: history of redeemed rewards  
- `Medalha`: (future) achievements for goals  
- `Relatorio`: (admin) reports for administrative purposes  

---

## 🛠 Running Locally

```bash
# Install dependencies
npm install

# Sync database (without erasing existing data)
npm run sync   # uses sync({ alter: true })

# Start the server
node backend/server.js
```

---

## 🧩 For the Frontend (React)

### 🔐 Authentication

```http
POST /usuarios/login
{
  "email": "example@email.com",
  "senha": "123456"
}
```

Response: returns user ID, name, points, and admin status.  
→ Store `id_usuario` and `pontos` for later requests.

---

### 📷 QR Code Scanning

When a bin’s QR code is scanned:

```http
GET /lixeiras/qr/{codigo}
```

Returns the bin info and accepted waste types.

---

### ♻️ Register Recycling

```http
POST /reciclagem
{
  "id_usuario": 1,
  "id_lixeira": 2,
  "tipo_residuo": "Plastic",
  "quantidade": 1
}
```

---

### 🎁 View Available Rewards

```http
GET /recompensas
```

---

### 🎁 Redeem a Reward

```http
POST /resgates
{
  "id_usuario": 1,
  "id_recompensa": 2
}
```

---

### 📜 View User History

```http
GET /reciclagem/{id_usuario}
```

---

## 🧭 Future Improvements

- Automatic medal system for recycling milestones  
- Admin report generation  
- Integration with push notifications or email  
- Web dashboard interface  

---

## ✅ Current Status

- All APIs fully implemented and tested  
- Database synced and functional  
- Ready for React frontend integration  

---

Developed by **Alan Cefair Dos Santos Souza Junior**, with a focus on sustainability and student engagement 🌱. 


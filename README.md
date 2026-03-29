# Inventory API

This project is a simple Node.js API for managing inventory items using Express and MongoDB. It allows users to perform basic CRUD operations, filter items by category, and identify low stock items.

---

## Features

- Create, read, update and delete items
- Filter items by category
- Identify items with low stock
- Seed the database with sample data
- Validate input for create and update operations
- Include a health check endpoint

---

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose

---

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Seed the database

```bash
npm run seed
```

### 3. Run the server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

---

## Routes

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /items     | Get all items           |
| GET    | /items/:id | Get a single item       |
| POST   | /items     | Create a new item       |
| PATCH  | /items/:id | Update an existing item |
| DELETE | /items/:id | Delete an item          |
| GET    | /health    | Check API status        |

---

## Query Parameters

- `category` → filter items by category
- `lowStock=true` → return only items with low stock (5 or less)

Example:

```bash
GET /items?category=Consumable&lowStock=true
```

---

## Example Request Body

Example for `POST /items`:

```json
{
  "name": "Health Potion",
  "category": "Consumable",
  "stockQuantity": 10
}
```

---

## Example Response

Example response from `GET /items`:

```json
[
  {
    "_id": "69c8d843c12153f6d4551263",
    "name": "Iron Sword",
    "category": "Weapon",
    "stockQuantity": 3,
    "lowStock": true
  }
]
```

Note: MongoDB also automatically adds an `_id` field to each item.

---

## Future Improvements

- Add authentication
- Add pagination

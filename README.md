# Healthcare Services API

This is a simple API built using Node.js, Express.js, and MongoDB to manage a list of healthcare services. The API allows you to create, retrieve, update, and delete healthcare services.

## Features

- **Add a New Healthcare Service**: Fields include `service name`, `description`, and `price`.
- **Retrieve All Healthcare Services**: Get a list of all available services.
- **Update an Existing Healthcare Service**: Modify the details of an existing service by `ID`.
- **Delete a Healthcare Service**: Remove a service from the list.
- **Basic Validation**: Ensures that required fields (e.g., `service name` and `price`) are present before saving to the database.

## Technology Stack

- **Node.js** with **Express.js** for API development.
- **MongoDB** for database management.
- **Mongoose** for object data modeling (ODM).
- **Postman** or any API testing tool to test the API.

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **MongoDB** (you can use a local MongoDB instance or MongoDB Atlas)

## Project Setup

### 1. Clone the Repository
```bash
git clone https://github.com/nitishgajendra07/healthcare-CRUD.git
cd healthcare-CRUD
```
### 2. Install the dependencies
```bash
npm install
```
### 3. Set Up Environment Variables
Create a .env file and initialize the variables that are in .env.example file. If you wish to use mongoDB locally you may even copy the following code
```bash
PORT = 
MONGODB_URI = "mongodb://127.0.0.1:27017"
DB_NAME = "healthcare"
```
### 4. Seed DB
```bash
npm run seed
```
### 5. Run the application
```bash
npm start
```
#### OR
```bash
npm run dev
```

Now use Postman to test the API endpoints
## API Endpoints

### 1. Add a New Service

- **Method:** `POST`
- **URL:** `/api/service`
- **Request Body:**

  ```json
  {
    "serviceName": "Service Name",
    "description": "Service Description",
    "price": 1000
  }
  ```
### 2. Get all services
- **Method:** `GET`
- **URL:** `/api/service`
### 3. Update a service
- **Method:** `PATCH`
- **URL:** `/api/service/:id`
- **Request Body:**

  ```json
  {
    "description": "New Service Description"
  }
  ```
  ### 4. Get all services
- **Method:** `DELETE`
- **URL:** `/api/service:id`


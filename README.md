# Task Manager REST API

A simple yet powerful Task Manager REST API built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Create, Read, Update, and Delete tasks.
- User-friendly API with error handling for various scenarios.
- MongoDB database for data storage.
- Easy-to-use RESTful API endpoints.

## Requirements

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/marcin10lw/task-manager-api.git
```

2. Navigate to the project directory:

```bash
cd task-manager-api
```

3. Install the dependencies:

```bash
npm install
```

4. Install Nodemon as a global dependency (if not already installed):

```bash
npm install -g nodemon
```

5. Create a `.env` file in the root directory and create `MONGO_URI` variable with Mongodb Atlas connection string.

6. Start the server:

```bash
npm start
```

The server should now be running locally at `http://localhost:3000`.

## Usage

To use the Task Manager API, you can interact with it via HTTP requests. You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to send requests to the API endpoints.

## API Endpoints

- **POST /api/v1/tasks**
- Create a new task.
- **GET /api/v1/tasks**
- Retrieve all tasks.
- **GET /api/v1/tasks/:id**
- Retrieve a specific task by ID.
- **PATCH /api/v1/tasks/:id**
- Update a task by ID.
- **DELETE /api/v1/tasks/:id**
- Delete a task by ID.

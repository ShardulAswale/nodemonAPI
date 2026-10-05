# Express In-Memory CRUD API

Node.js and Express example exposing CRUD operations for a small item collection.

## How it works

`index.js` stores items in an array and provides `GET /items`, `GET /items/:id`, `POST /items`, `PUT /items/:id` and `DELETE /items/:id`. Express parses JSON request bodies; create requests assign an ID and update requests replace an item's name.

## Usage

Requires Node.js and npm. Run from the repository root:

```sh
npm install
node index.js
```

The default address is `http://localhost:3000`; override it with `PORT`. For automatic development restarts, use `npx nodemon index.js`. Send JSON objects containing a `name` field when creating or updating an item.

## Notes

Data resets on restart. Authentication, durable storage and comprehensive input validation are not implemented. ID assignment based on array length can produce duplicate IDs after deletions.

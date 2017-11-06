# GraphQL Starter Server

This project is built as a boilerplate for my backend projects using my favourite technologie stack: Node.js, Typescript, GraphQL, MongoDB and everything in between (Mongoose, prettier, npm...)

## Getting Started

Just create a MongoDB database called **messenger** and let it open, then run ``npm install`` command inside the project directory to install the dependencies and finally, run ``npm start`` to run the project.

## Playing with GraphQL

Open your browser and go to [http://localhost:4000/graphiql](http://localhost:4000/graphiql) and start doing CRUD operations to the Users stored in database (you have to create some mock-users at first because the DB is empty), this is an example of creating a user:

```
mutation {
  createUser(name: "Mock", lastName: "User", email: "add@com", password: "8978", birthDate: "09/09/1973") {
    _id
    name
    lastName
  }
}
```

## Contribution

**Your contribution is very welcome** 💪💪

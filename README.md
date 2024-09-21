# MS Digital Backend Technical Interview

## Steps to run this project:

1. Run `npm i` command.
2. Setup database, the sql file to create from scratch `database.sql`, the schema is up to you, anyway, you have a
   `.env.example` to guide yourself.
3. Setup database settings inside `.env` file.
4. Check npm and node version (engines section `package.json`).
5. Run `npm start` command.

## Endpoints

All endpoints are based on REST, so, to create a new resource you must to use POST, to list GET and so on. In addition
the endpoints are in singular as standard. Server listen on `http://localhost:<port>/api/<endpoint>`

> For time reasons only the endpoints list below are available

- **Cart "/cart"**
    - POST  "/" Add new item to cart.
    - GET   "/" List all carts.
    - GET   "/summary/:id" Cart summary with all items, subtotal and total.
- **User "/user"**
    - POST "/" Create new user and as a side effect a new cart.
- **Product "/product"**
    - POST "/" Create new product.

## Request folder (Jetbrains only)

If you have a Jetbrains account, this project has a request folder with the endpoints written in HTTP request syntax,
that you could execute.

## Improvements

* Set a suite test about use cases.
* Add a dependency container for improve testability.
* Change `.env` to secret manager service for better security.
* Add multi-environment with `.env.development` and `.env.production` files.
* Add auth token validation (Protected routes by middleware).
* Add database migrations.
* Add multilanguage support for clients.
* Finish all REST operations (depends on business unit).

## Error handling

* `express-validation` for routes parameters, this allows you to create an object with a bunch of validations and
  autogenerated error messages, that you can display to client with a simple middleware. And, an own created lib to
  internal errors and response schema.

### Own Error lib (TLDR)

This couple of functions, types and classes, are supported by Express types and features.
Maps all errors and success responses in one schema call `BaseResponse`, to improve the client experience in order to
consume this API.

It allows you to pass headers, response object and provides you a bunch of typing about HTTP codes and HTTP names, to
better DX (Developer Experience).

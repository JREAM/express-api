#!/bin/bash

npx knex migrate --knexfile data/migrations/users.js
npx knex migrate --knexfile data/migrations/posts.js

npx knex seed:make 001-users
npx knex seed:make 001-posts

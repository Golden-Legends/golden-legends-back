/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/health', 'HealthController.health')
})
Route.group(() => {
  Route.post('/login', 'UsersController.login')
  Route.post('/register', 'UsersController.register')
  Route.post('/join-main-lobby', 'UsersController.joinMainLobby')
})

Route.group(() => {
  Route.get('/me', 'UsersController.me')
  Route.post('/logout', 'UsersController.logout')
}).middleware('auth')

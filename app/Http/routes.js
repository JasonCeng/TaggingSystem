'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.post('sentence/lists', 'PostsController.lists')
Route.post('sentence/create', 'PostsController.create')
Route.post('sentence/del', 'PostsController.del')

Route.post('/content/lists', 'ContentsController.lists')
Route.post('/content/create', 'ContentsController.create')
Route.post('/content/detail', 'ContentsController.detail')
Route.post('/content/del', 'ContentsController.del')
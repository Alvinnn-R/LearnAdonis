
import Route from '@ioc:Adonis/Core/Route'

Route.get('/welcome', () => { //menggunakan arrow function () =>
  return  'Welcome guys, mari kita belajar adonis nihh.'
});

Route.get('/welcome/:id', ({params}) => { //parameter object
  return  'Welcome guys, mari kita belajar adonis nihh. id anda : ' + params.id
});
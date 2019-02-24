var express = require('express');
var router = express.Router();
const fs = require('fs');


const books = [{
  nombre: 'libro1',
  editorial: 'editorial1',
  autor: 'autor1',
  edicion: 3,
  id: 1
},
{
  nombre: 'libro2',
  editorial: 'editorial2',
  autor: 'autor2',
  edicion: 6,
  id: 2
},
{
  nombre: 'libro3',
  editorial: 'editorial3',
  autor: 'autor3',
  edicion: 6,
  id: 3
}
]

//route to show all the books
router.get('/api/home', function (req, res, next) {
  fs.writeFileSync('books.json', JSON.stringify(books))
  res.json(books);
});

let contenidoDelArchivo = fs.readFileSync('books.json');
let ArchivoEnJson = JSON.parse(contenidoDelArchivo);
console.log(ArchivoEnJson);

//route to add a new book with id

//search by id

router.get('/api/home/:id', function (req, res, next) {
  const id = req.params.id

  for (let i = 0; i < ArchivoEnJson.length; i++) {
    if (id == ArchivoEnJson[i].id) {
      return res.json(ArchivoEnJson[i])
    }
  }
});

//add new user 

router.post('/api/new', function (req, res, next) {
  const book = req.body;
  console.log('nuevo libro' + book)

  const lastId = ArchivoEnJson[ArchivoEnJson.length - 1].id;
  book.id = lastId + 1;
  ArchivoEnJson.push(book);

  fs.writeFileSync('books.json', JSON.stringify(ArchivoEnJson));
  console.log(ArchivoEnJson)
  res.json(ArchivoEnJson)
});


//route to delete

router.delete('/api/book/:id', function (req, res, next) {
  const id = req.params.id;

  for (let i = 0; i < ArchivoEnJson.length; i++) {
    const currentBook = ArchivoEnJson[i];
    if (id == currentBook.id) {
      ArchivoEnJson.splice(i, 1)
    }
  }
  fs.writeFileSync('books.json', JSON.stringify(ArchivoEnJson));
  res.json(ArchivoEnJson)
  res.send('ok')

})



//filter function //filtrar por nombre o autor

// router.get('/api/filter', function (req, res, next) {
//   let search = req.query.search;
//   if (search && search.length > 0) {

//     let librosFiltrados = ArchivoEnJson.filter(b){
//       return  b.nombre.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
//         b.autor.toLowerCase().indexOf(search.toLowerCase()) >= 0;
//         res.json(librosFiltrados);
//   };
  
//   return
//   res.json(ArchivoEnJson)
// });
// })


module.exports = router;

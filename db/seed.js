const db = require('APP/db')

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234'},
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
], user => db.model('users').create(user))

const seedProducts = () => db.Promise.map([
{
  title: 'Spring Break II',
  description: 'Not ready to go back to school? Don\'t! Just keep breakin\'',
  price: 1000,
  inventory: 100,
}, {
  title: 'Skip The Holidays',
  description: 'Grinch? No worries. Go from Turkey Day to New Year\'s Day. No sweat, Ebenezer!',
  price: 5000,
  inventory: 1000,
}, {
  title: '24 Hours of Running',
  description: 'Want the added long term health benefits of running without the sweat? No problem. Come closer to being forever young.',
  price: 4560,
  inventory: 20300,
},
], product => db.model('products').create(product))

const seedCategory = () => db.Promise.map([
  {name: 'one-offs'},
  {name: 'deluxe'},
  {name: 'health benefits'},
], category => db.model('categories').create(category))

db.didSync
  .then(() => db.sync({force: true}))
  .then(() => seedProducts())
  .then(([springBreak, holidays, running]) =>
    seedCategory()
    .then(([oneOffs, deluxe, health]) =>
      Promise.all([
        springBreak.setCategory(oneOffs),
        holidays.setCategory(health),
        running.setCategory(deluxe),
      ])
    )
  )
  .then(seedUsers)
  .then((results) => console.log(`Seeded Users, Products, and Categories OK`))
  .catch(error => console.error(error))
  .finally(() => db.close())

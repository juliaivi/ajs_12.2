import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book'; 
import MusicAlbum from '../domain/MusicAlbum';


test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});
  const cart = new Cart();
  const cart1 = cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  const cart2 = cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const cart3 = cart.add(new Movie(3, 'Мстители', 'The Avengers', 2012,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '137 мин. / 02:17', 500));
  const cart4 = cart.add(new Movie(4, 'Мстители', 'The Avengers', 2015,  'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], '167 мин. / 02:17', 1000));

  test('adding 3 elements to an array', () => {
  expect(cart.items.length).toBe(4);
});
  
test('price of goods without discount', () => {
  expect(cart.totalCost()).toBe(4400);
})

test('price of goods at a discount', () => {
  expect(cart.discountPrice(20)).toBe(3520);
})

test('product removal', () => {
  cart.deleteItem(3);
  cart.deleteItem(1001);
  cart.deleteItem(1008);
  const expected = [{
    id:4,
    name:'Мстители', 
    originName:'The Avengers', 
    year:2015,  country:'США', 
    tagline:'Avengers Assemble!', 
    genre:['фантастика', 'боевик', 'фэнтези', 'приключения'], 
    time:'167 мин. / 02:17',
    price:1000
  }];
  expect(cart.items.length).toBe(1);
  expect(cart.items).toEqual(expected);
})



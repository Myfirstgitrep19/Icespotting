/* eslint-disable camelcase */
const antwerp = require('./antwerp');
const chicago = require('./chicago');
const toronto = require('./toronto');
const san_francisco = require('./san_francisco');
const legnica = require('./legnica');

module.exports.mocks = {
  '51.219448,4.402464': antwerp,
  '43.653225,-79.383186': toronto,
  '41.878113,-87.629799': chicago,
  '37.7749295,-122.4194155': san_francisco,
  '51.2070067,16.1553231': legnica,
};

const mockImages = [
  'https://www.foodiesfeed.com/wp-content/uploads/2021/05/forest-fruit-waffle.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-oranges-ice-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/08/detail-of-pavlova-strawberry-piece-of-cake-600x800.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/05/suco-de-limao-com-slash.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2019/04/mae-mu-pancakes-600x750.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2021/08/tiramisu-1024x1024.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2020/04/three-layer-smoothie-from-banana-kiwi-and-strawberry-on-a-wooden-background.jpg',
  'https://www.foodiesfeed.com/wp-content/uploads/2021/05/fresh-coconut.jpg',
  'https://media.istockphoto.com/photos/delicious-ice-creams-are-ready-to-be-eaten-picture-id1051727906?b=1&k=20&m=1051727906&s=170667a&w=0&h=-cbFgu05ZKYHfvPi1HHngNQKDLtjeARaRngK9RZKrW8=',
  'https://media.istockphoto.com/photos/soft-serve-ice-creamicy-desserts-picture-id1148955849?b=1&k=20&m=1148955849&s=170667a&w=0&h=h0lkMEoXWhwmGIizXo0QzmVSFsHtuKCvzf_WfSa_Z78=',
  'https://media.istockphoto.com/photos/strawberry-ice-cream-with-fresh-strawberries-picture-id1313871755?b=1&k=20&m=1313871755&s=170667a&w=0&h=dg2P5aDxBUfB_zrNSzLOcMHJxANbJ3ol12gg6DjHHOc=',
  'https://media.istockphoto.com/photos/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-picture-id1161805849?b=1&k=20&m=1161805849&s=170667a&w=0&h=HbK-3IByO_GGNcduAdPfcQMmVG-WlPrjnuwSYCGQguk=',
];

module.exports.addMockImage = (restaurant) => {
  const randomImage =
    mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];

  restaurant.photos = [randomImage];
  return restaurant;
};

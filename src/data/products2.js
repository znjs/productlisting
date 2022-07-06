import { nanoid } from "nanoid";

/**
 * Fields
 * => Size : S, M L XL
 * => Brand : "..."
 * => Ideal For: Men, Women, Children
 * => price: $
 * => Sorting
 */

export const products = [
  {
    _id: nanoid(),
    productName: "Men Slim Fit Checkered Spread Collar Casual Shirt",
    size: ["S", "M", "L", "XL"],
    brand: "HIGHLANDER",
    sellingPrice: 519,
    costPrice: 999,
    for: "Men",
    imageUrl:
      "https://rukminim1.flixcart.com/image/580/696/kfoapow0-0/shirt/1/3/i/s-hlsh009325-highlander-original-imafw2ghqzwrryn2.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Men Slim Fit Solid Spread Collar Casual Shirt",
    size: ["L", "XL"],
    brand: "Dennis Lingo",
    sellingPrice: 500,
    costPrice: 1849,
    for: "Men",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Men Slim Fit Solid Slim Collar Casual Shirt",
    size: ["S", "M", "L", "XL"],
    brand: "Dennis Lingo",
    sellingPrice: 500,
    costPrice: 1849,
    for: "Men",
    imageUrl:
      "https://rukminim1.flixcart.com/image/580/696/kfoapow0-0/shirt/2/n/x/xxl-c301-black-dennis-lingo-original-imafw2gg2n7ygpwv.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Women Regular Fit Printed Casual Shirt",
    size: ["S", "M"],
    brand: "PEOPLE",
    sellingPrice: 490,
    costPrice: 999,
    for: "Women",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kl6wx3k0/shirt/a/f/j/xs-110094088navy-people-original-imagydes8wysawkf.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Women Regular Fit Self Design Mandarin Collar Casual Shirt",
    size: ["M"],
    brand: "Pantaloons",
    sellingPrice: 500,
    costPrice: 999,
    for: "Women",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/k0vbgy80/shirt/a/h/g/xxl-110054170grey-annabelle-by-pantaloons-original-imafkktbbqzdqugh.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Women T Shirt Dark Blue Dress",
    size: ["S", "M", "XL"],
    brand: "Semizoxis",
    sellingPrice: 599,
    costPrice: 1099,
    for: "Women",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kp4difk0/dress/m/b/w/xl-gs-s-12-blue-xl-twinlight-original-imag3faptszhx2kh.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Boys Party(Festive) Shirt Bow Tie, Suspenders, Cap, Pant  (Grey)",
    size: ["S", "M", "L"],
    brand: "Bad Boys",
    sellingPrice: 1439,
    costPrice: 1960,
    for: "Kids",
    imageUrl:
      "https://rukminim1.flixcart.com/image/580/696/kziqvm80/kids-apparel-combo/t/o/a/12-18-months-bs1913grey-bad-boys-original-imagbgjznkehhndh.jpeg?q=50",
  },
  {
    _id: nanoid(),
    productName: "Girls Party(Festive) Jumpsuit Dress  (Black)",
    size: ["M", "L"],
    brand: "PERFECTPIVOT",
    sellingPrice: 799,
    costPrice: 1499,
    for: "Kids",
    imageUrl:
      "https://rukminim1.flixcart.com/image/880/1056/kl421e80/kids-apparel-combo/n/k/0/9-10-years-superage-perfectpivot-original-imagyah2pg99br6e.jpeg?q=50",
  },
];

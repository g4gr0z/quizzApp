let inventory = [
  {
    brand: 'Parle',
    products: [
      {
        brand: 'Parle Agro',
        products: [
          {
            brand: 'Frooti',
            products: []
          },
          {
            brand: 'Bailey',
            products: []
          }
        ]
      }
    ]
  },
  {
    brand: 'Pepsico',
    products: [
      {
        brand: 'VB',
        products: [
          {
            brand: 'Lays',
            products: []
          },
          {
            brand: 'Kurkure',
            products: [
              {
                brand: 'Mad Angles',
                products: []
              }
            ]
          }
        ]
      },
      {
        brand: 'Pepsi',
        products: []
      }
    ]
  },
  {
    brand: 'Cadbury',
    products: []
    }
];

function brandlist(obj) {
  if (Object.keys(obj).length === 0) {
    // r.push(obj.brand)
    return;
  }
  // console.log(obj);
  for (let ele of obj) {
      r.push(ele.brand);
    //   for (let ele of obj) {
          brandlist(ele.products);
    //       return r;
    //     }
        // console.log(r);
  }
}
let  r = [];
brandlist(inventory)
console.log(r)
const Categories = require('../../models-modular/categories/categories.js');
let categories = new Categories();

const supergoose = require('../supergoose.js');

describe('Categories Model (Modular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  // it('can create() a new category', () => {
  // });
  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
          console.log('create', record[key],'record=obj',obj[key])
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
  });
  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
              console.log('get',category[0][key],'cat=obj', obj[key], 'cat',category, 'obj', obj)
            });
          });
      });
  });

  it('can get() all categories', () => {
  });

  // it('can update() a category', () => {
  // });
    it('can update() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.update(record._id)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record[key]).toEqual(obj[key]);
              console.log('create', record[key],'record=obj',obj[key])
            });
          });
      })
      .catch(e => console.error('ERR', e));
  });

  // it('can delete() a category', () => {
  // });
  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    products.create(obj)
      .then(record => {
        return products.delete(record._id)
          .then(category => {
            expect(products.get(record._id).name).toBeFalsy();
          });
      })
      .catch(err => console.error);
  });

});


// const Categories = require('../categories/categories.js');
// const Products = require('../products/products.js');

// describe('Categories Model', () => {

//   let categories;

//   beforeEach(() => {
//     categories = new Categories();
//   })

//   // How might we repeat this to check on types?
//   it('sanitize() returns undefined with missing requirements', () => {
//     const schema = categories.schema;
//     var testRecord = {};
//     for (var field in schema) {
//       if (schema[field].required) {
//         testRecord[field] = null;
//       }
//     }
//     expect(categories.sanitize(testRecord)).toBeUndefined();
//   });

//   it('can post() a new category', () => {
//     let obj = { name: 'Test Category' };
//     return categories.create(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//           console.log('create', record[key],'record=obj',obj[key])
//         });
//       })
//       .catch(e => console.error('ERR', e));
//   });

//   it('can get() a category', () => {
//     let obj = { name: 'Test Category' };
//     return categories.create(obj)
//       .then(record => {
//         return categories.get(record._id)
//           .then(category => {
//             Object.keys(obj).forEach(key => {
//               expect(category[0][key]).toEqual(obj[key]);
//               console.log('get',category[0][key],'cat=obj', obj[key], 'cat',category, 'obj', obj)
//             });
//           });
//       });
//   });

//   it('can delete() a category', () => {
//     let obj = { name: 'Test Category' };
//     return categories.create(obj)
//       .then(record => {
//         return categories.delete(record._id)
//           .then(category => {
//             Object.keys(obj).forEach(key => {
//               expect(category).toBeUndefined();
//               console.log('delete', obj[key], category);
//             });
//           });
//       });
//   });

//   it('can update() a category', () => {
//     let obj = { name: 'Test Category' };
//     return categories.create(obj)
//       .then(record => {
//         return categories.update(record._id)
//           .then(record => {
//             Object.keys(obj).forEach(key => {
//               expect(record[key]).toEqual(obj[key]);
//               console.log('create', record[key],'record=obj',obj[key])
//             });
//           });
//       })
//       .catch(e => console.error('ERR', e));
//   });
// });
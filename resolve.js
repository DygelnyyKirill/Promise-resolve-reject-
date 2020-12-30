// const url1 = 'https://cubiq.ru/wp-content/uploads/2020/02/Space.jpg'
// const url2 = 'https://nashahistory.ru/sites/default/files/styles/main_img/public/maxresdefault_1_0.jpg?itok=aCZpYgGD'
// const url3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0AeMouQ9oEyKdTXBNwpMkul31gVxyfXp8Zw&usqp=CAU'

// function loadImage(url) {
//   return new Promise ((resolve) => {
//     const img = new Image();
//     img.height = 300;
//     img.src = url;
//     document.body.append(img);
//     img.addEventListener('load', () => {
//       resolve();
//     });
//   });
// }
// // loadImage(url1)
// //   .then(() => {
// //     console.log('photo 1 load');
// //     return loadImage(url3);
// //   })
// //   .then(() => {
// //     console.log('photo 2 load');
// //   });

//   loadImage(url1)
//   .then(() => loadImage(url2))
//   .then(() => loadImage(url3))
//   .then(() => console.log('photo load'));
    
 
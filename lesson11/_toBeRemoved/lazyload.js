

// PLEASE NOTE: This file should no longer be in use trouble shoot removing it when ready to begin removing files.


// lazy loader for the gallery only 

// let imagesToLoad = document.querySelectorAll('img[data-src]');

// const loadImages = (image) => {
//   image.setAttribute('src', image.getAttribute('data-src'));
//   image.onload = () => {
//     image.removeAttribute('data-src');
//   };
// };

// // imagesToLoad.forEach((img) => {
// //     loadImages(img);
// //   });


// if('IntersectionObserver' in window) {
// const observer = new IntersectionObserver((items, observer) => {
//     items.forEach((item) => {
//     if(item.isIntersecting) {
//         loadImages(item.target);
//         observer.unobserve(item.target);
//     }
//     });
// });
// imagesToLoad.forEach((img) => {
//     observer.observe(img);
// });
// } else {
// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });
// }
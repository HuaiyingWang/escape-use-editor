// const container = document.getElementById('description');
// Quill.register("modules/imageUploader", ImageUploader);

// const options = {
//   debug: 'info',
//   modules: {
//     toolbar: [
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       ['bold', 'italic'],
//       ['link','image']
//     ],
//     imageResize: {
//       displaySize: true
//     },

//     // 參考：https://github.com/NoelOConnell/quill-image-uploader
//     imageUploader: {
//       upload: (file) => {
//         return new Promise((resolve, reject) => {
//           setTimeout(() => {
//             resolve(
//               "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//             );
//           }, 3500);
//         });
//       },
//     },
//   },
//   placeholder: '寫下產品描述...',
//   theme: 'snow'
// };
// const editor = new Quill(container,options);


Quill.register("modules/imageUploader", ImageUploader);
var quill = new Quill('#description', {
    debug: 'info',
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic'],
        ['link','image']
      ],
      imageResize: {
        displaySize: true
      },
  
      // Sample：https://github.com/NoelOConnell/quill-image-uploader
      imageUploader: {
        upload: (file) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              );
            }, 3500);
          });
        },
      },
    },
    placeholder: '寫下產品描述...',
    theme: 'snow'
});


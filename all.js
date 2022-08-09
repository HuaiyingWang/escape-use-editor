// 客戶說產品描述要加入：
// - 可插入圖片連結（出現對話框，可貼上圖片連結）
// - 可做圖片大小縮放
// - 可插入文字連結
// - 可改為粗體、斜體
// - 可更改字級大小

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
      
      // https://quilljs.com/
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


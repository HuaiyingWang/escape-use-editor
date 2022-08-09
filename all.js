var quill = new Quill('#description', {
    theme: 'snow'
});
  
quill.pasteHTML('<img src=// onerror="alert(\'Not Found!\')">');
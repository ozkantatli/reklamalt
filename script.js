var node = document.getElementById("node");

function htmltoimg(){
    domtoimage.toPng(node)
    .then(function (dataUrl) {
        document.getElementById('showImg').src=dataUrl;
        imgUrl = dataUrl;
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    }); 
}

function download() {
  var a = document.createElement('a');
  a.href = imgUrl;
  a.download = "htmltoimg.png";
  a.click();
}

import domtoimage from 'dom-to-image';

var node = document.getElementById('Wrapper');
var btn = document.getElementById('button');

btn.onclick = function(){
  node.innerHTML = "im an image now"
  domtoimage.toPng(document.getElementById('Wrapper'))
  .then(function(blob){
      window.saveAs(blob,'image.png')
    });
}

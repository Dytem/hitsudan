var canvas = document.getElementById('canvassample'),
    ctx = canvas.getContext('2d'),
    moveflg = 0,
    Xpoint,
    Ypoint;
   // w = $('.wrapper').width();
   // h = $('.wrapper').height();
   // $('#canvassample').attr('width', w);
   // $('#canvassample').attr('height',h);
  
// PC対応
canvas.addEventListener('mousedown', startPoint, false);
canvas.addEventListener('mousemove', movePoint, false);
canvas.addEventListener('mouseup', endPoint, false);
// スマホ対応
canvas.addEventListener('touchstart', startPoint, false);
canvas.addEventListener('touchmove', movePoint, false);
canvas.addEventListener('touchend', endPoint, false);
  
function startPoint(e){
  e.preventDefault();
  ctx.beginPath();
  console.log(e.clientX);
  
    
  // 矢印の先っぽから始まるように調整
	mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
    
  ctx.moveTo(Xpoint, Ypoint);
}
  
function movePoint(e){
  if(e.buttons === 1 || e.witch === 1 || e.type == 'touchmove')
  {
    Xpoint = e.pageX-8;
    Ypoint = e.pageY-8;
    moveflg = 1;
      
    ctx.lineTo(Xpoint, Ypoint);
    ctx.lineCap = "round";
    ctx.lineJoin = 'round'; // 丸みを帯びた線にする
    ctx.lineWidth = 4;
    ctx.strokeStyle = "black";
    ctx.stroke();

      
  }
}
  
function endPoint(e)
{
    if(moveflg === 0)
    {
       ctx.lineTo(Xpoint-1, Ypoint-1);
       ctx.lineCap = "round";
       ctx.lineWidth = defSize * 2;
       ctx.strokeStyle = defColor;
       ctx.stroke();
         
    }
    moveflg = 0;
     
    setLocalStoreage();
}
 
function resetCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
    console.log('リセット！');
}

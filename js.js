/*Name this external file gallery.js*/
  

function upDate(previewPic){
    x=document.getElementById("image");
    x.style.backgroundColor="#8e68ff";
    x.style.backgroundImage="url("+ previewPic.src +")";
    x.innerHTML=previewPic.alt;
    x.style.color="#000000";
    x.style.fontWeight ="bold";
    
      }
  
      function unDo(){
      x=document.getElementById("image");
    x.style.backgroundImage="url('')";
    x.innerHTML="Hover over an image below to display here"
      x.style.color="#FFFFFF";
      x.style.fontWeight ="normal";
  }
      
  
  function indexing(){
  cimgs = document.querySelectorAll("img.preview");
  console.log(cimgs);
  for (var i = 0; i<cimgs.length; i++){
    console.log(i);
    cimgs[i].setAttribute("tabindex","0");
  }}

function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("editName").value = document.getElementById("name").textContent;
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function edit(){
    document.body.style.background = document.getElementById("myColor").value;
    document.getElementById("name").textContent = document.getElementById("editName").value;
}
function addItem(){
    var skill = prompt("Please enter your skill");
	var ul = document.getElementById("dynamic-list");
    var li = document.createElement("li");
    var img = document.createElement("img");
    if(skill!=""){
        li.setAttribute('id',skill);
        li.setAttribute('class',"button");
        li.addEventListener('click',removeItem, false);
        li.appendChild(document.createTextNode(skill));
        ul.appendChild(li);
        ////// Remove icon-add
        var elem = document.getElementById("icon-add");
        elem.parentNode.removeChild(elem);
        ///// Add  icon-add <img id="icon-add"src="img/icon-plus.png" onclick="addItem()" style="width:50px;cursor: pointer;">
        img.setAttribute('id',"icon-add");
        img.setAttribute('src',"img/icon-plus.png");
        img.setAttribute('onclick',"addItem()");
        img.setAttribute('style',"width:50px;cursor: pointer;");
        ul.appendChild(img);
    }
  
}
function removeItem(){
    var ul = document.getElementById("dynamic-list");
    var item = document.getElementById(this.id);
    //alert(this)
    ul.removeChild(item);
}
function removeOriginal(id){
    var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    return false;
}
function bigImg(img){
    img.style.transform = "scale(1.8)";
}
function normalImg(img){
    img.style.transform = "scale(1)";
}
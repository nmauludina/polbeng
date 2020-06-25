
// ambil dulu nav-item
var nav_item = document.getElementsByClassName("nav-item"); //inikan mpengambilan selectornya nya

console.log(nav_item);

//buat fungsi ketika di hover,.
// tapi karena lebih dari 1 class, maka buat loop
var bg_putih = document.getElementById("bg_putih_header");
for(let i = 0; i< nav_item.length; i++){
    let current_nav = nav_item[i];
    let child_items = current_nav.getElementsByClassName("item-child");

    if(child_items.length == 0){
        console.log("menu ini kosong child");
        //karena hasilnya berupa array, maka untuk mengecek bahwa dia ada isi atau tidak, di cek pake "length"
        continue;
        //skip loop, kembali ke loop awal
    }

    current_nav.onmouseover =function(){
        //ketika di hover, anak dari selector ini yaitu my-navHover-item, di tampilkan

        child_items[0].style.display = 'block';

        //selanjutnya, tampilkan backgroundnya
        bg_putih.style.display= 'block';

        //caranya, ambil tinggi dari child nya
        var anak = child_items[0]; //diambil 0, karena datanya berupa array
        var tinggi_anak = anak.clientHeight;
        // console.log(tinggi_anak);
        bg_putih.style.height = tinggi_anak+"px"; //smoga work wkwk

        //buat jg ketika mouseout
        bg_putih.onmouseout = function () {
            bg_putih.style.display = 'none';
            child_items[0].style.display = 'none';
        }

        child_items[0].onmouseout = function() {
            bg_putih.style.display = 'none';
            child_items[0].style.display = 'none';
        }
    }
}


// Hover image

var berita_foto = document.getElementsByClassName("berita-foto");
var bg_link = document.getElementsByClassName("bg_link");
var frame = document.getElementsByClassName("frame");
var child_foto = document.getElementsByClassName("child_foto");


// hover foto berita

var berita_fotoHeight = [], berita_fotoWidth = [];

for(var i = 0; i<berita_foto.length; i++){

    // sesuaikan ukuran hover dengan ukuran foto
    berita_fotoHeight[i] = berita_foto[0].clientHeight;
    berita_fotoWidth[i] = berita_foto[0].clientWidth;  
    bg_link[i].style.height = (berita_fotoHeight[0]-1) + "px";
    bg_link[i].style.width = (berita_fotoWidth[0]-1) + "px";

    let current_foto =  berita_foto[i];
    let current_bg = bg_link[i];
    let current_frame = frame[i];
    let current_child_foto = child_foto[i]

    current_foto.onmouseover = function () {
        current_bg.style.display = 'flex';
    }

    current_frame.onmouseover = function () {
        current_bg.style.display = 'flex';
    }
    current_frame.onmouseout = function () {
        current_bg.style.display = 'flex';
    }
    current_child_foto.onmouseover = function () {
        current_bg.style.display = 'flex';
    }
    current_child_foto.onmouseout = function () {
        current_bg.style.display = 'flex';
    }

    current_bg.onmouseout = function () {
        current_bg.style.display = 'none';
    }   
}


// fungsi onclick greenbar

var greenBar = document.getElementById("greenBar");

function greenBarOnclick() {
    while (greenBar.style.display === "") {
        greenBar.style.display = "none";
    }
    greenBar.style.display === "block" ? greenBar.style.display = "none" : greenBar.style.display = "block";
}


//  NAVBAR 

var collapseNav = document.getElementById("navbarNavDropdown");
var collapseBgr = document.getElementsByClassName("collapseBgr");
var navToggler = document.getElementsByClassName("navbar-toggler");
function show() {
    collapseBgr[0].style.transition = 'height ' + 0.26 + 's ease-out';
    collapseBgr[0].style.height = 157 + 'px';
}
function hide() {
    collapseBgr[0].style.transition = 'height ' + 0.6 + 's';
    collapseBgr[0].style.height = 0;
}
navToggler[0].onclick = function () {

    collapseBgr[0].style.height == 157+"px" ? hide() : show();
}
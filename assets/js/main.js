var buys=document.querySelectorAll('.buy')
console.log(buys)
var none=document.querySelector('.modal')
console.log(none)
var close=document.querySelector('.modal-close');
buys.forEach(function(buy){ console.log(buy)
    buy.onclick= function(){
    none.classList.add('open')
        }
})
close.onclick=function(){
    none.classList.remove('open');
    
}
none.onclick=function(){
    none.classList.remove('open');
} 
var menus=document.querySelectorAll('.list-mobile>li')
console.log(menus)
menus.forEach(function(menu){
    menu.onclick=function(){
        document.querySelector('.list-mobile').classList.add('none')
    }
})
var icon=document.querySelector('.menu-icons')
console.log(icon)
icon.onclick=function(){
    document.querySelector('.list-mobile').classList.remove('none')
    
    document.querySelector('.list-mobile').classList.add('open')
}

 
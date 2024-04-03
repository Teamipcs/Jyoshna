// index.js
import { foodItems } from './fooditems.js';

console.log(foodItems);
function displayitems(){
    //Named function
var biryani=document.getElementById('biryani');
var chicken=document.getElementById('chicken');
var paneer=document.getElementById('paneer');
var vegetable=document.getElementById('vegetable');
var chinese=document.getElementById('chinese');
var southIndian =document.getElementById('southIndian');
//Arrow functioins
const biryaniData=foodItems.filter(item=> item.category=='biryani');
console.log(biryaniData);
const chickenData=foodItems.filter(item=> item.category=='chicken');
console.log(chickenData);
const paneerData=foodItems.filter(item=> item.category=='paneer');
console.log(paneerData);
const vegetableData=foodItems.filter(item=> item.category=='vegetable');
console.log(vegetableData);
const chineseData=foodItems.filter(item=> item.category=='chinese');
console.log(chineseData);
const southIndianData=foodItems.filter(item=> item.category=='southIndian');
console.log(southIndianData);


biryaniData.map(item=>{
var  itemCard=document.createElement('div')
itemCard.setAttribute('id','item-card');

var cardTop=document.createElement('div');
cardTop.setAttribute('id','card-top');

var star=document.createElement('i');
star.setAttribute('class','fa fa-star');
star.setAttribute('id','rating');
star.innerText=' '+item.rating;

var heart=document.createElement('i');
heart.setAttribute('class','fa fa-heart-o add-to-cart');
heart.setAttribute('id',item.id);

 cardTop.appendChild(star);
 cardTop.appendChild(heart);

 var img=document.createElement('img');
 img.src=item.img;

 var itemName=document.createElement('p');
 itemName.setAttribute('id','item-name');
itemName.innerText=item.name;


var itemPrice=document.createElement('p');
 itemPrice.setAttribute('id','item-price');
itemPrice.innerText="Price: \u20B9"+item.price;

itemCard.appendChild(cardTop);
itemCard.appendChild(img);
itemCard.appendChild(itemName);
itemCard.appendChild(itemPrice);


biryani.appendChild(itemCard);

})

chickenData.map(item=>{
    var  itemCard=document.createElement('div')
    itemCard.setAttribute('id','item-card');
    
    var cardTop=document.createElement('div');
    cardTop.setAttribute('id','card-top');
    
    var star=document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText=' '+item.rating;
    
    var heart=document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
     cardTop.appendChild(star);
     cardTop.appendChild(heart);
    
     var img=document.createElement('img');
     img.src=item.img;
    
     var itemName=document.createElement('p');
     itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    
    var itemPrice=document.createElement('p');
     itemPrice.setAttribute('id','item-price');
    itemPrice.innerText="Price: \u20B9"+item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    
    
    chicken.appendChild(itemCard);
})
paneerData.map(item=>{
    var  itemCard=document.createElement('div')
    itemCard.setAttribute('id','item-card');
    
    var cardTop=document.createElement('div');
    cardTop.setAttribute('id','card-top');
    
    var star=document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText=' '+item.rating;
    
    var heart=document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
     cardTop.appendChild(star);
     cardTop.appendChild(heart);
    
     var img=document.createElement('img');
     img.src=item.img;
    
     var itemName=document.createElement('p');
     itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    
    var itemPrice=document.createElement('p');
     itemPrice.setAttribute('id','item-price');
    itemPrice.innerText="Price: \u20B9"+item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    
    
    paneer.appendChild(itemCard);
})


vegetableData.map(item=>{
    var  itemCard=document.createElement('div')
    itemCard.setAttribute('id','item-card');
    
    var cardTop=document.createElement('div');
    cardTop.setAttribute('id','card-top');
    
    var star=document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText=' '+item.rating;
    
    var heart=document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
     cardTop.appendChild(star);
     cardTop.appendChild(heart);
    
     var img=document.createElement('img');
     img.src=item.img;
    
     var itemName=document.createElement('p');
     itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    
    var itemPrice=document.createElement('p');
     itemPrice.setAttribute('id','item-price');
    itemPrice.innerText="Price: \u20B9"+item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    
    
    vegetable.appendChild(itemCard);
})
chineseData.map(item=>{
    var  itemCard=document.createElement('div')
    itemCard.setAttribute('id','item-card');
    
    var cardTop=document.createElement('div');
    cardTop.setAttribute('id','card-top');
    
    var star=document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText=' '+item.rating;
    
    var heart=document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
     cardTop.appendChild(star);
     cardTop.appendChild(heart);
    
     var img=document.createElement('img');
     img.src=item.img;
    
     var itemName=document.createElement('p');
     itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    
    var itemPrice=document.createElement('p');
     itemPrice.setAttribute('id','item-price');
    itemPrice.innerText="Price: \u20B9"+item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    
    
    chinese.appendChild(itemCard);
})
southIndianData.map(item=>{
    var  itemCard=document.createElement('div')
    itemCard.setAttribute('id','item-card');
    
    var cardTop=document.createElement('div');
    cardTop.setAttribute('id','card-top');
    
    var star=document.createElement('i');
    star.setAttribute('class','fa fa-star');
    star.setAttribute('id','rating');
    star.innerText=' '+item.rating;
    
    var heart=document.createElement('i');
    heart.setAttribute('class','fa fa-heart-o add-to-cart');
    heart.setAttribute('id',item.id);
    
     cardTop.appendChild(star);
     cardTop.appendChild(heart);
    
     var img=document.createElement('img');
     img.src=item.img;
    
     var itemName=document.createElement('p');
     itemName.setAttribute('id','item-name');
    itemName.innerText=item.name;
    
    
    var itemPrice=document.createElement('p');
     itemPrice.setAttribute('id','item-price');
    itemPrice.innerText="Price: \u20B9"+item.price;
    
    itemCard.appendChild(cardTop);
    itemCard.appendChild(img);
    itemCard.appendChild(itemName);
    itemCard.appendChild(itemPrice);
    
    
    southIndian.appendChild(itemCard);
})


}
 
displayitems();

const categoryListData=[...new Map(foodItems.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList=document.getElementById('category-List');
    categoryListData.map(item=>{
        var listCard=document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg=document.createElement('img');
        listImg.src=item.img;

var listName=document.createElement('a');
listName.setAttribute('class','list-name');
listName.innerText=item.category;
listName.setAttribute('href','#'+item.category);
listCard.appendChild(listImg);
listCard.appendChild(listName);


var cloneListCard = listCard.cloneNode(true);
categoryList.appendChild(cloneListCard);


    })
    }
  categoryLists();




  document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart);
  })
  var cartData=[];
  function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var i
  }
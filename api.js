// // const { json } = require("express")

// const { get } = require("mongoose");

// // const { promises } = require("nodemailer/lib/xoauth2");

// let api=new XMLHttpRequest()
// api.open("GET","https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
// api.send()
// var salek=[];
// api.addEventListener("load",function(){
//     salek=(JSON.parse(api.response).data.recipes)
//     console.log(salek);
    
//     dispaly() 
// })



// // function dispaly(){
// //     var data=``
// //     for(var i =0;      i<salek.length    ;++i){
     
// //      data+=`
// //          <div class="container">
// //         <div class="row" id="data">
// //             <div class="col">
// //                 <img src="" alt="">
// //                 <h3>${}</h3>
// //             </div>
// //         </div>
// //     </div>
// //      `
      


// //     }



// // }


// // function dispaly() {
// //     var sa = ``;
// //     for (var i = 0; i < salek.length; i++) {
// //         sa += `




// // function dispaly(){
// //     var data=``
// //     for(var i =0;      i<salek.length    ;++i){
     
// //      data+=`
// //          <div class="container">
// //         <div class="row" id="data">
// //             <div class="col">
// //                 <img src="" alt="">
// //                 <h3>${}</h3>
// //             </div>
// //         </div>
// //     </div>
// //      `
      


// //     }



// // }


// function dispaly() {
//     var sa = ``;
//     for (var i = 0; i < salek.length; i++) {
//         sa += `
//             <div class="col-md-4">
//                 <div class="card">
//                     <img src="${salek[i].image_}" class="card-img-top" alt="${salek[i].title}">
//                     <div class="card-body">
//                         <h5 class="card-title">${salek[i].title}</h5>
//                         <p class="card-text">Publisher: ${salek[i].publisher}</p>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }
//     document.getElementById("data").innerHTML = sa; // خلي عندك div بالـ id="data" في HTML
// }
    


// function one(){
//     return new Promise(function(callback){
//     console.log("1")
//         callback()
//     })


// }


// fetch()


// function two(){
//     return new Promise(function(callback){
//     console.log("2")
//         callback()
//     })


// }

// function there(){
//     return new Promise(function(callback){
//     console.log("3")
//         callback()
//     })


// }
// //    callback
// // one(function(){
// //     two(function(){
// //         there()
// //     })
// // })





// one().then(two).then(there)


// var res=[]
//  async function getPizza(){
//     var respone= await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza")
//     data= await respone.json()
//     res=data.data.recipes
//     disPlay()
// }
// // await getPizza()




// function disPlay(){
//     var cartona=``
//     for(var i =0;   i<res.length  ;i++){
//         cartona+=`<div class="card" style="width: 18rem;">
//   <img src="${res[i].image_url}" class="card-img-top" alt="${res[i].title}">

//   <div class="card-body">
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
//   </div>
// </div>`
//     }
//     document.getElementById(data).innerHTML=cartona;
// }



//  getPizza()

getRecipes("pizza")
var btn=document.querySelector(".btn")
var input=document.querySelector("input")
btn.addEventListener("click",function(){
    getRecipes(input.value);
})


var res = [];

async function getRecipes(meal) {
        var loading=document.querySelector(".loading")
 try {
       loading.classList.remove("d-none")
     var response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${meal}`);
//   console.log(response);

  
  var data = await response.json();
  res = data.data.recipes;
//   loading.classList.remove("d-none")
  console.log(res);
  
  disPlay();
//  loading.classList.remove("d-none")

 } catch (error) {
    // window.alert("فتح مخك يعم بقي مش ناقص غباء",error)
    //   loading.classList.add("d-none")
  let err= document.querySelector(".error")
  err.classList.add("img")
 }
finally{
     loading.classList.add("d-none");
}
}


function disPlay() {
  var cartona = ``;
  for (var i = 0; i < res.length; i++) {
    cartona += `
      <div class="col-md-4 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${res[i].image_url}" class="card-img-top" alt="${res[i].title}">
          <div class="card-body">
            <h5 class="card-title">${res[i].title}</h5>
            <p class="card-text text-muted">Publisher: ${res[i].publisher}</p>
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("data").innerHTML = cartona;
}






let productItemList = document.getElementById("productItemList");
// console.log(productList);
// let productAdded = document.getElementById("productAddedList");
// console.log(productAdded);
let selectProductItemList = document.getElementById("productAddedList");
// console.log(selectProductItemList);
let messageProNotAvailable = document.querySelector(".messageProNotAvailable");
// console.log(messageProNotAvailable);
let totalProductPrice = document.getElementById("totalPrice");
// console.log(totalProductPrice);

function changequantity(e , count){

    e.target.parentNode.children[1].innerText = count
    let productName =  e.target.parentNode.parentNode.children[0].innerText;
    shoopingProductData.forEach((e) => {
        if(e.name === productName){
            e.count = count;
        }
    });

    selectProductItemList.innerHTML =" ";
    let total = 0;

    shoopingProductData.forEach((e) =>{
    if(e.count > 0){
        let div = document.createElement("div");
        div.innerHTML= `
        <div class="flex bg-red-100 justify-between p-5 text-center font-medium">
         <p class="text-left w-32">${e.name}</p>
         <p class="text-center w-32">${e.count}</p>
        <span id="totalProductPrice" class="text-center w-32">${e.price}</span>
        </div>
        `
        selectProductItemList.append(div);
        total += e.count * e.price
        let priceIS = document.getElementById("priceIS");
        priceIS.innerHTML =`${total} ` 
    }
    

    
 });
 console.log(selectProductItemList.children.length);

 if(selectProductItemList.children.length === 0){
     
     let messageforEmptyCart = document.createElement('p');
     messageforEmptyCart.innerHTML = 'Product Not Added'
     messageforEmptyCart.style.textAlign ='center';
     selectProductItemList.append(messageforEmptyCart);

     priceIS.innerHTML =`0` 
  }
 

}






productItemList.addEventListener('click',(e)=>{
    let count = 0;
    if(e.target.innerText ==="+"){
        count = Number(e.target.parentNode.children[1].innerText)
        count++
        changequantity(e, count)
    }else if(e.target.innerText ==="-"){
        count = Number(e.target.parentNode.children[1].innerText)
       if(count > 0){
        count--;
        changequantity(e, count)
       }else{
        alert("you can't remove this item");
       }  
    }
})


function displayProductList(){
    shoopingProductData.forEach(e =>{
        let div = document.createElement('div');
        div.innerHTML =`
          <div class ="border text-right  flex m-3">
            <p class="text-left w-32">${e.name}</p>
            <p id="productValue" class="text-center w-32">${e.price}</p>
            <div class="flex">
                <button class="bg-red-500 border border-black h-7 w-7 rounded-full text-white">-</button>
                <span class="mx-2">0</span>
                <button class="bg-green-600 border border-black h-7 w-7 rounded-full text-white">+</button>
            </div>
           </div>
            `
            productItemList.append(div);
    });
}

window.onload = displayProductList();

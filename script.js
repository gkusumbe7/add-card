let productItemList = document.getElementById("productItemList");
// console.log(productList);
let productAdded = document.getElementById("productAddedList");
// console.log(productAdded);
let messageProNotAvailable = document.querySelector(".messageProNotAvailable");
// console.log(messageProNotAvailable);
let totalProductPrice = document.getElementById("totalProductPrice");
// console.log(totalProductPrice);

function changequantity(e , count){
    e.target.parentNode.children[1].innerText = count
    let productName =  e.target.parentNode.parentNode.children[0].innerText;
    Products.forEach((prod) => {
        if(prod.name === productName){
            prod.count = count;
        }
    });
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
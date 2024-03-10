let productItemList = document.getElementById("productItemList");
// console.log(productList);
let productAdded = document.getElementById("productAddedList");
// console.log(productAdded);
let messageProNotAvailable = document.querySelector(".messageProNotAvailable");
// console.log(messageProNotAvailable);
let totalProductPrice = document.getElementById("totalProductPrice");
// console.log(totalProductPrice);



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
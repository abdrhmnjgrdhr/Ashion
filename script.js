/* SIDE NAV BAR BEGINS*/

//SHOW

let sideNAv = document.getElementById("sideNav")

function show (){
    sideNAv.style.marginLeft="0"
}

//HIDE 

function hide (){
    sideNAv.style.marginLeft="-200%"
}

/* SIDE NAV BAR ENDS*/

/* SHOPPING CART BEGINS  */

document.addEventListener('DOMContentLoaded',loadFood)

function loadFood(){
    loadContent();
}

function loadContent(){

    //REMOVEITEM FROM CART
    let btnRemove = document.querySelectorAll('.cart-remove')
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem)
    })

    //PRODUCT ITEM CHANGE EVENT
    let qtyElements  = document.querySelectorAll('.cart-quantity')
    qtyElements.forEach((input)=>{
        input.addEventListener('keyup',changeQty)
    })

    //UPDATE TOTAL

    updateTotal();



   


}


//ROMOVE ITEM

function removeItem(){

    if(confirm('Are You Sure To Remove from your Cart?'))
    this.parentElement.remove()
}

//change qty

function changeQty (){
    if(isNaN(this.value) || this.value<1){
        this.value=0
    }

    loadContent()
}




//UPDATE TOTAL

function updateTotal(){
    const cartItem = document.querySelectorAll('.cart-box');
    const totalValue = document.querySelector('.total-price');

    let total = 0
    cartItem.forEach(product=>{
        let priceEl = product.querySelector('.cart-price');
        let p = parseFloat(priceEl.innerHTML.replace("Rs.",""));
        let qty = product.querySelector('.cart-quantity').value;
        total+= (p*qty);

        product.querySelector('.cart-amnt').innerText = 'Rs.'+ (p*qty)
    });

    totalValue.innerHTML= 'Rs.'+total
}





/* SHOPPING CART ENDS */


// BUTTON HIGHLIGTING START

const btns = document.querySelectorAll('.btns')
const boxes = document.querySelectorAll('.product  .box')

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        setActiveBtn(e);
        let btnfilter = e.target.dataset.filter;
console.log("gg",btnfilter);
        boxes.forEach((box) => {
            let boxfilter = box.dataset.item;
console.log("bb",boxfilter);
            // Check if the box has one of the selected categories
            if (btnfilter == 'all' || boxfilter.includes(btnfilter)) {
                box.style.opacity = "1"
            } else {
                box.style.opacity = "0";
            }
        })
    })
})

function setActiveBtn(e) {
    btns.forEach((button) => {
        button.classList.remove('btn-active')
    })
    e.target.classList.add('btn-active')
}

// BUTTON HIGHLIGTING END


// RADIOS SLIDER START

var counter = 1;

        setInterval(function(){
            document.getElementById('radio'+counter).checked= true
            counter = counter+1
            if(counter>3){
                counter=1;
            }
        },5000)

// RADIOS SLIDER ENDS


// COUNTDOWN DISCOUNT BEGINS
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
let endDate = "24 December 2023 10:00 PM"

        function clock(){
            const end = new Date(endDate)
            const now = new Date()
            const diff = end - now

            const d  = Math.floor(diff/1000/60/60/24)
            
            const h  = Math.floor((diff/1000/60/60)%24)
            
            const m  = Math.floor((diff/1000/60)%60)
            
            const s  = Math.floor((diff/1000)%60)

            

            days.innerHTML=d<10?'0'+d:d;
            hours.innerHTML=h<10?'0'+h:h;
            minutes.innerHTML=m<10?'0'+m:m;
            seconds.innerHTML=s<10?'0'+s:s;
        }
        clock()

        setInterval(clock,1000)

// COUNTDOWN DISCOUNT ENDS
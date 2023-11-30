const getWhat = async () => {
   try {
     const resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1');
     const data = await resp.json();
     console.log(data)
 
 
     show(data)
   } 
   catch(err) {
     console.log('Error')
   }
 
 }
 
 getWhat();
 
 const sss = document.querySelector('.wrapper')
 
 
 function show(e) {
   
   e.forEach((item) => {
     console.log(item)
     const ddd = `<div class="round"><div class='item ${item.id}'>${item.id}</div>
                  <div class='item ${item.symbol}'>${item.symbol}</div>
                  <div class='item ${item.name}'>${item.name}</div></div>`;
 
     sss.insertAdjacentHTML('beforeend', ddd)
     
     if(item.symbol=='usdt'){
      let greenItem = document.querySelector(`.${item.symbol}`)

      greenItem.parentElement.classList.add('green')
     }
 
   });
   let blue = document.querySelectorAll('.round')
   for (let i = 0; i < 5; i++) {
      blue[i].classList.add('blue')

   }
 }
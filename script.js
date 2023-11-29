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
     const ddd = `<div  class="round"><span class='item'>${item.id}</span>
                  <span class='item'>${item.symbol}</span>
                  <spbn class='item'>${item.name}</span></div>`;
 
     sss.insertAdjacentHTML('beforeend', ddd)
 
   });
 }
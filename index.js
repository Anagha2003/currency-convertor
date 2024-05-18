import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_1k6aqKRyYfnNiXalxae00mwb4Gwhr3qsm2OFdlZS');

// convertCurrency("INR","USD",3);

// if we dont export then it wont be accsseble for other packages
 export async function convertCurrency(fromCurrency,toCurrency,units){

  const res= await freecurrencyapi.latest({
     base_currency: fromCurrency,
     currencies: toCurrency
   });
   const multiplier= res.data[toCurrency];
   return multiplier*units;
  //  console.log(multiplier)
}

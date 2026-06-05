function calculateBillTotal(subtotal)  {
   var salesTax = .095 * subtotal;
   var tip = .20 * subtotal;
   

   return  subtotal + salesTax + tip;
      
}
console.log(calculateBillTotal(20));

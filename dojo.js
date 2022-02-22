
function pizzaOven (corteza, salsa, quesos, salsas) {
    var pizza = {};
    pizza.corteza =corteza;
    pizza.salsa =salsa;
    pizza.quesos =quesos;
    pizza.salsas =salsas;
    return pizza;
}

console.log(pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]))
console.log(pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]))
console.log(pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]))
console.log(pizzaOven("lanzada a mano" , "marinara" , ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]))

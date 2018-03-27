var wackyQty = [];
var wackyGlaze = [];
var products = [new createBun()];

function createBun(name, qty, glaze){
    this.name = name;
    this.qty = qty;
    this.glaze = glaze;
}

var newProduct = new createBun("Wacky Walnut", wackyQty, wackyGlaze);

console.log(newProduct instanceof createBun);

function addToCart(){
    wackyQty.push(parseInt(document.getElementById("qty-dropdown").value));
    wackyGlaze.push(document.getElementById("glz-dropdown").value);
    console.log(wackyQty);
    console.log(wackyGlaze);
    newProduct;
    console.log(newProduct);
}
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
const couponValue = inputCoupon.value; 

let descuento;

switch(couponValue) {
    case "JuanDC_es_Batman":
        descuento = 15;
    break;
    case "pero_no_le_digas_a_nadie":
        descuento = 30;
    break;
    case "es_un_secreto":
        descuento = 25;
    break;
}
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

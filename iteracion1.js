const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

const tshirtFinder = list => {
    list.forEach(element => {
        if(element.includes('Camiseta')){
            console.log(element);
        }
    });
}

tshirtFinder(products);
const shop ={
    owner:'Alia',
    address:{
        street:'kochukhet vot er goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false

}
console.log(shop);
const shopJSON= JSON.stringify(shop);
console.log(shopJSON);

const object = JSON.parse(shopJSON);
console.log(object);



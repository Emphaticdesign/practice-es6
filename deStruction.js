const person = {name:"jack william", age:"18", job:"facobooker", gfName:"ema watson", address:"kochu khet", phone:"017456545", friends:["tom hands", "mark jukarburg", "adam smith"]};
// const gfName = person.gfName;
// const phone = person.phone;
const { phone, gfName, salary, address } = person;

const complexObject = {
    name: 'abc';
    info: {
        address: "kola bagan";
        leader: "abdul kalam";
    }
}

const { leader } = complexObject.info;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

// const friend = ['sakib khan', 'rayhan hossain', 'arman khan', 'amir khan', 'salman khan', 'sahrukh khan']
// const [chotoFriend, nextFriend, ...olderFriend] = friend;
// console.log(chotoFriend, nextFriend, olderFriend);
const ages = [12, 14, 16];
const ages2 = [13, 15, 17];
const ages3 = [21, 23, 25];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2, 5,...ages3];
// console.log(allAges2);
const sochib =650;
const minister = 550;
const business = 560;
const takaPoysa = [650, 550, 560, 850];
// const maximum = Math.max(sochib, minister, business);
const maximum = Math.max(...takaPoysa);
console.log(maximum);
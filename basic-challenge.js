//Generate Random Number
const x = Math.floor(Math.random() * 100);
console.log(x);

//Generate Random String
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowwerCase = 'abcdefghijklmnopqrstuvwxyz';
const numeric = '0123456789';
const specialChar = '!"#$%&()*+,-./:;<=>?@[]\^_`{}|~';

const charSet = upperCase + lowwerCase + numeric + specialChar;

let random = '';
for ( let i = 0; i < 10; i++ ) {
    random += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

console.log(random);


//Split String into Array
const str = "Upin:Ipin:Meimei";
console.log(str.split(':'));


//Detect a Leap Year
let year = 2020;

if(year % 4 != 0){
    console.log(year + " is a Common Year");
}else if(year % 100 != 0){
    console.log(year + " is a Leap Year");
}else if(year % 400 != 0){
    console.log(year + " is a Common Year");
}else{
    console.log(year + " is a Leap Year");
}


//Print Object
let murid = [
    {
        name: "Mail",
        hobby: "Jualan"
    },
    {
        name: "Jarjit",
        hobby: "Pantun"
    },
    {
        name: "Ehsan",
        hobby: "Jadi KM"
    }
];

for(let i = 0;i < murid.length;i++){
    console.log((i+1) + ". Nama: " + murid[i].name + ", Hobi : " + murid[i].hobby);
}


//Classification
let warga = [
    {
        name:"udin",
        sex:"male",
        age:10,
        marital:"single",
        social:"student"
    },
    {
        name:"ujang",
        sex:"male",
        age:25,
        marital:"married",
        social:"employee"
    },
    {
        name:"icih",
        sex:"female",
        age:10,
        marital:"single",
        social:"student"
    },
    {
        name:"eneng",
        sex:"female",
        age:100,
        marital:"married",
        social:"employee"
    },
    {
        name:"asep",
        sex:"male",
        age:20,
        marital:"single",
        social:"employee"
    },
];

let wargaJadi = {
    sex: {
        male:[],
        female:[]
        },
    age: {
        under20:[],
        older:[]
    },
    marriage: {
        single:[],
        double:[],
    },
    status: {
        student:[],
        employee:[]
    }
};

for(let i = 0;i < warga.length;i++){
    if(warga[i].sex === "male"){
        wargaJadi.sex.male.push(warga[i].name);
    }else{
        wargaJadi.sex.female.push(warga[i].name);
    }

    if(warga[i].age < 20){
        wargaJadi.age.under20.push(warga[i].name);
    }else{
        wargaJadi.age.older.push(warga[i].name);
    }

    if(warga[i].marital === "single"){
        wargaJadi.marriage.single.push(warga[i].name);
    }else{
        wargaJadi.marriage.double.push(warga[i].name);
    }

    if(warga[i].social === "student"){
        wargaJadi.status.student.push(warga[i].name);
    }else{
        wargaJadi.status.employee.push(warga[i].name);
    }   
}

console.log("Male : " + wargaJadi.sex.male);
console.log("Female : " + wargaJadi.sex.female);
console.log("Under 20 : " + wargaJadi.age.under20);
console.log("Older : " + wargaJadi.age.older);
console.log("Single : " + wargaJadi.marriage.single);
console.log("Married : " + wargaJadi.marriage.double);
console.log("Student : " + wargaJadi.status.student);
console.log("Employee : " + wargaJadi.status.employee);


//Find A
let word = "Tongkol";
let loop = 3;
let wordSet = "";

for(let i = 0;i < loop;i++){
    wordSet += word;
}
console.log((wordSet.match(/o/g)||[]).length);
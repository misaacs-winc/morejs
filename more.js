const age = 23
if (age >= 18) {
    console.log('Welcome to VIP club');
}

else {
    console.log('You are too young to be allowed entry, Please come back when above 18 years');
}

const isFemale = true
if (isFemale) {
    console.log('You will get a free entry and a drink if you arrive before 10pm');
}

else {
    console.log('The entry fee is $25');
}

const driverStatus = 'Bob';
if (driverStatus == 'Bob') {
    console.log('You are allowed to drive, please proceed.')
}

else {
    console.log('not a bob and is therefore not allowed to drive')
}

if (age >= 18 && age <= 25) {
    console.log("You get 50% off!");
}

const firstName = 'Bram';
if (firstName == 'Bram' || firstName == 'Sarah') {
    console.log('You are entitled to a free beer to celebrate our 50th anniversary');
}

else { "I'm afraid you just have to pay for your drink" }

const totalAmount = 100
if (totalAmount >= 25 && totalAmount <= 49) {
    console.log('you get free (vega) bitterballen.');
}

else if (totalAmount >= 50 && totalAmount <= 99) {
    console.log('you get free portion of nachos.');
}

else if (totalAmount >= 100) {
    console.log('you get free bpttle of Champagne.');
}

else { 'No special offer for you today!' }
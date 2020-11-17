const Sound = require('../models/sound');
const mongoose = require('mongoose');
require('dotenv').config();
const category = ["Rap", "Song", "Spoken"]
const descr1 = ["Dette klippet", "Snutten du hører på nå", "Denne lille greia her", "Sangen min", "Takk for at du hører på, denne sangen", 
"Det tok meg lang tid å tørre å laste opp dette, men denne sangen", "Her er den, endelig har den kommet det dere har ventet på, dette coveret",
"Hei folkens! Dette", "Håper dere har en fin dag folkens! Melodien her"]
const descr2 = [" betyr mye for meg.", " lagde jeg når bestefaren min døde.", " spilte min far for meg hver kveld.", " lagde jeg og en kompis.",
    " hjalp meg gjennom en tøff periode.", " la jeg ut for å sjekke hva folk syns.", " lot jeg ligge lenge på mobilen før jeg turte å laste den opp.",
" var eneste grunnen til at jeg er her i dag.", " er noe som dere endelig skal få gleden av å høre. Jeg vet jo nemlig hvor lenge dere har ventet."]
const descr3 = [" Håper du liker den!", " Jeg tror jeg kommer til å bli kjendis.", " Gjerne lag ditt eget cover", " Tror ikke du kan skrive noe like bra som meg",
    " Virkelig betydd mye om du kunne følge meg på Twitter"]
const title = ["Yes", "I am free", "Okey then", "Deepest blue", "Orange heart", "I will always", "This one boy", "Never forget you", "My powers", "Stronger than ever", "Okey girl",
    "The one who ran", "Got heart?", "I tea, twenty eight ten", "My brothers song", "Mitt hjerte", "Sangen din", "Trofast rose", "Potetåkeren", "Hjelpes!", "Karibien"]
const owner = ["Jon", "Hanna", "Mike", "Julie", "Kari", "Anders", "Tom", "Thomas", "Bernard", "Trine", "Asgeir", "Arnold", "Marie", "Noldus", "Arild",
    "Isabelle", "Ukulelemannen", "Gitar-gutten", "Piano-Peder", "Sputnik", "Donald Trumpet"]

mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database connected successfully`))
    .catch(err => console.log(err));

mongoose.Promise = global.Promise;



const sentence = () => descr1[Math.floor(Math.random() * descr1.length)] + descr2[Math.floor(Math.random() * descr2.length)]
    + descr3[Math.floor(Math.random() * descr3.length)];

const categor = () => category[Math.floor(Math.random() * category.length)]

const titl = () => title.pop()
const owne = () => owner.pop()

const like = () => Math.floor(Math.random() * 20)

const filename = () => String(Math.floor(Math.random() * 8)) + ".mp3"

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomDate(new Date(2018, 0, 1), new Date())

const thing = {
    title: titl(),
    date: randomDate(new Date(2018, 0, 1), new Date()),
    owner: owne(),
    filename: filename(),
    category: categor(),
    description: sentence(),
    likes: like()
}

for (i=0; i<20; i++) {
    const thing = {
        title: titl(),
        date: randomDate(new Date(2018, 0, 1), new Date()),
        owner: owne(),
        filename: filename(),
        category: categor(),
        description: sentence(),
        likes: like()
    }
    Sound.create(thing)
}



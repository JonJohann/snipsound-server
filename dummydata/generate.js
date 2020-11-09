const category = ["rap", "song", "spoken"]
const descr1 = ["Dette klippet", "Snutten du hører på nå", "Denne lille greia her", "Sangen min", "Takk for at du hører på, denne sangen"]
const descr2 = [" betyr mye for meg.", " lagde jeg når bestefaren min døde.", " spilte min far for meg hver kveld.", " lagde jeg og en kompis.", 
" hjalp meg gjennom en tøff periode.", " la jeg ut for å sjekke hva folk syns."]
const descr3 = [" Håper du liker den!", " Jeg tror jeg kommer til å bli kjendis.", " Gjerne lag ditt eget cover", " Tror ikke du kan skrive noe like bra som meg",
"Japp"]
const title = ["Deepest blue", "Orange heart", "I will always", "This one boy", "Never forget you", "My powers", "Stronger than ever", "Okey girl", 
"The one who ran", "Got heart?", "I tea, twenty eight ten", "My brothers song"]
const owner = ["Jon", "Hanna", "Mike", "Julie", "Kari", "Anders", "Tom", "Thomas", "Bernard", "Trine", "Asgeir", "Arnold", "Marie", "Noldus", "Arild", 
"Isabelle"]

const sentence = () => descr1[Math.floor(Math.random() * descr1.length)] + descr2[Math.floor(Math.random() * descr2.length)] 
+ descr3[Math.floor(Math.random() * descr3.length)];

const categor = () => category[Math.floor(Math.random() *category.length)]

const titl = () => title[Math.floor(Math.random()*title.length)]
const owne = () => owner[Math.floor(Math.random()*owner.length)]

const like = () => Math.floor(Math.random * 20)

console.log(categor())


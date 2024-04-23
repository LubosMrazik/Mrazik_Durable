//object představuje prvek reálného světa
//například: osoba, počítač, letadlo, budova, soubor
//objecty mohou vykonávát nějaké činnosti, které nazýváme funkce/metody
//každý object má vlastnosti
//například: výška, věk, jméno

//object osoba, vlastnosti bez uvozovek : hodnota
/*let person1 = {
    animal: "human",
    firstName: "Jan",
    lastName: "Novák",
    address: "Zlín",
    adult: true,
    bag: ["apple", "cookie", "water", "beer", "bread"]
}
let person2 = {
    animal: "bear",
    firstName: "Pepík",
    lastName: "Jaroslav",
    address: "Černý les",
    adult: true,
    bag: ["honey", "chicken", "apple", "carrot"]
}*/

//pole objectů se chová stejně jako klasické pole, k objectu přistupujeme pomocí indexu
let persons = [
    {
        firstName: "Jan",
        lastName: "Novák",
        address: "Zlín",
        adult: true,
        bag: ["apple", "cookie", "water", "beer", "bread"],
        image: "assets/images/person1.jpg",
        description: "Jan Novák!!!!!!"
    },
    {
        firstName: "Pepík",
        lastName: "Jaroslav",
        address: "Černý les",
        adult: true,
        bag: ["honey", "chicken", "apple", "carrot"],
        description: "Pepík!!!!!!"
    },
    {
        firstName: "Lubomír",
        lastName: "Zakopal",
        address: "Praha",
        adult: false,
        description: "idk"
    }
];

function nextPerson() {

}

console.log(persons[0]); //přistoupím k prvnímu prvku pole
console.log(persons[0]["firstName"]); // přístup k atributu daného prvku

//vloží nový object do pole
//persons.push(person1);
//persons.push(person2);



//výběr jednoho elementu na základě selectoru
//projde celý dokument a jakmile najde první shodný element, tak ho uloží do proměnné "heading"
let heading = document.querySelector("h1");
//heading.innerText = person1.firstName + " " + person1.lastName;

let paragraph= document.querySelector("p");
//přístup do pole
/*paragraph.innerText = person1.bag[1];
//výpis obsahu pole
for(let i = 0; i < person1.bag.length; i++) {
    document.write(person1.bag[i]);
    document.write(", ");
}*/
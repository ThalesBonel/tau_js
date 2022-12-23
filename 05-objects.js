const cookie = {
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function() {
        console.log(`Im eating ${this.name}`);
    }
};

console.log(cookie.name);
cookie.name = "Another Name"
console.log(cookie);
console.log(cookie["+Yummy"])

cookie.eatCookie();

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name
        this.isGlutenFree = isGlutenFree
    }

    eatCookie() {
        console.log(`Im eating ${this.name}`)
    }
}
const myCookie = new Cookie("Iced Oatmeal", true);
myCookie.eatCookie();

console.log(myCookie)
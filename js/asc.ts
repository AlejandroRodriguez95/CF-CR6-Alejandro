var all = [];
// Named the class "Place" instead of "Location", because "Location" is already used in
// one of the libraries that I use
class Place {
    city: string;
    name: string;
    zip: number;
    address: string;
    img: string;
    created: Date;
    constructor(city: string, name: string, zip: number, address: string, img: string, created: Date) {
        this.city = city;
        this.name = name;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.created = created;
        all.push(this);
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">City: ${this.city}</p>
            <p class="card-text">Address: ${this.address}, ${this.zip}</p>
        </div>
        <p class="border p-3 text-center rounded bg-warning">Created: ${this.created}</p>
    </div>
        `
    }
}

class Restaurant extends Place {
    type: string;
    telephone: string;
    web: string;
    constructor(city: string, name: string, zip: number, address: string, img: string, created: Date, type: string, telephone: string, web: string) {
        super(city, name, zip, address, img, created);
        this.type = type;
        this.telephone = telephone;
        this.web = web;
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">Restaurant type: ${this.type}</p>
            <p class="card-text">City: ${this.city}</p>
            <p class="card-text">Address: ${this.address}, ${this.zip}</p>
            <div class="card-footer text-muted">
                <p>Telephone: ${this.telephone}</p>
                <p>Website: <a href="${this.web}">${this.web}</a></p>
              </div>
        </div>
        <p class="border p-3 text-center rounded bg-warning">Created: ${this.created}</p>
    </div>

        `
    }
}

class Events extends Place {
    date: string;
    time: string;
    price: number;
    web: string;
    constructor(city: string, name: string, zip: number, address: string, img: string, created: Date, date: string, time: string, price: number, web: string) {
        super(city, name, zip, address, img, created);
        this.date = date;
        this.time = time;
        this.price = price;
        this.web = web;
    }
    render() {
        return `
    <div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.img}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">When? ${this.date}, ${this.time}</p>
            <p class="card-text">City: ${this.city}</p>
            <p class="card-text">Address: ${this.city}, ${this.zip}</p>
            <div class="card-footer text-muted">
                <p>Price: Eur ${this.price}</p>
                <p>Website: <a href="${this.web}">${this.web}</a></p>
            </div>
        </div>
        <p class="border p-3 text-center rounded bg-warning">Created: ${this.created}</p>   
    </div>
        `
    }
}





new Place('Vienna', 'St. Charles Church', 1010, 'Karlsplatz 1', 'img/img0.jpg', new Date(2019, 3, 24, 12, 45));
new Place('Vienna', 'Zoo Vienna', 1130, 'Maxingstraße 13b', 'img/img1.jpg', new Date(2010, 5, 20, 11, 5),);
new Restaurant('Vienna', 'Lemon Leaf Thai Restaurant', 1050, 'Kettenbrückengasse 19', 'img/img2.png', new Date(2000, 8, 10, 15, 32), 'Thai', '+43(1)5812308', 'www.lemonleaf.at');
new Restaurant('Vienna', 'Sixta-Restaurant', 1050, 'Schönbrunner Straße 21', 'img/img3.png', new Date(2010, 4, 15, 0, 45), 'WhoKnows', '+4315852856l, +4315852856', 'http://www.sixta-restaurant.at/');
new Events('Vienna', 'Kris Kristofferson', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/img4.jpg', new Date(2018, 11, 3, 17, 00), "October 15, 2021", "17:00", 58.50, 'http://kriskristofferson.com/');
new Events('Vienna', 'Lenny Kravitz', 1150, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1,', 'img/img5.jpg', new Date(2015, 8, 15, 10, 8), "December 9, 2029", "19:30", 48.80, 'www.lennykravitz.com/');

all.sort((b,a) => b.created  - a.created);
for(let x in all)
{
    $("#locations").append(all[x].render());
}

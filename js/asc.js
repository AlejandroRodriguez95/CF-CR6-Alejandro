var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var all = [];
// Named the class "Place" instead of "Location", because "Location" is already used in
// one of the libraries that I use
var Place = /** @class */ (function () {
    function Place(city, name, zip, address, img, created) {
        this.city = city;
        this.name = name;
        this.zip = zip;
        this.address = address;
        this.img = img;
        this.created = created;
        all.push(this);
    }
    Place.prototype.render = function () {
        return "\n    <div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.img + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">City: " + this.city + "</p>\n            <p class=\"card-text\">Address: " + this.address + ", " + this.zip + "</p>\n        </div>\n        <p class=\"border p-3 text-center rounded bg-warning\">Created: " + this.created + "</p>\n    </div>\n        ";
    };
    return Place;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, name, zip, address, img, created, type, telephone, web) {
        var _this = _super.call(this, city, name, zip, address, img, created) || this;
        _this.type = type;
        _this.telephone = telephone;
        _this.web = web;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return "\n    <div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.img + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">Restaurant type: " + this.type + "</p>\n            <p class=\"card-text\">City: " + this.city + "</p>\n            <p class=\"card-text\">Address: " + this.address + ", " + this.zip + "</p>\n            <div class=\"card-footer text-muted\">\n                <p>Telephone: " + this.telephone + "</p>\n                <p>Website: <a href=\"" + this.web + "\">" + this.web + "</a></p>\n              </div>\n        </div>\n        <p class=\"border p-3 text-center rounded bg-warning\">Created: " + this.created + "</p>\n    </div>\n\n        ";
    };
    return Restaurant;
}(Place));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, name, zip, address, img, created, date, time, price, web) {
        var _this = _super.call(this, city, name, zip, address, img, created) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        _this.web = web;
        return _this;
    }
    Events.prototype.render = function () {
        return "\n    <div class=\"card col-md-6 col-lg-3 border bg-light\">\n        <img class=\"card-img-top p-2\" src=\"" + this.img + "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Name: " + this.name + "</h5>\n            <p class=\"card-text\">When? " + this.date + ", " + this.time + "</p>\n            <p class=\"card-text\">City: " + this.city + "</p>\n            <p class=\"card-text\">Address: " + this.city + ", " + this.zip + "</p>\n            <div class=\"card-footer text-muted\">\n                <p>Price: Eur " + this.price + "</p>\n                <p>Website: <a href=\"" + this.web + "\">" + this.web + "</a></p>\n            </div>\n        </div>\n        <p class=\"border p-3 text-center rounded bg-warning\">Created: " + this.created + "</p>   \n    </div>\n        ";
    };
    return Events;
}(Place));
new Place('Vienna', 'St. Charles Church', 1010, 'Karlsplatz 1', 'img/img0.jpg', new Date(2019, 3, 24, 12, 45));
new Place('Vienna', 'Zoo Vienna', 1130, 'Maxingstraße 13b', 'img/img1.jpg', new Date(2010, 5, 20, 11, 5));
new Restaurant('Vienna', 'Lemon Leaf Thai Restaurant', 1050, 'Kettenbrückengasse 19', 'img/img2.png', new Date(2000, 8, 10, 15, 32), 'Thai', '+43(1)5812308', 'www.lemonleaf.at');
new Restaurant('Vienna', 'Sixta-Restaurant', 1050, 'Schönbrunner Straße 21', 'img/img3.png', new Date(2010, 4, 15, 0, 45), 'WhoKnows', '+4315852856l, +4315852856', 'http://www.sixta-restaurant.at/');
new Events('Vienna', 'Kris Kristofferson', 1150, 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/img4.jpg', new Date(2018, 11, 3, 17, 00), "October 15, 2021", "17:00", 58.50, 'http://kriskristofferson.com/');
new Events('Vienna', 'Lenny Kravitz', 1150, 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1,', 'img/img5.jpg', new Date(2015, 8, 15, 10, 8), "December 9, 2029", "19:30", 48.80, 'www.lennykravitz.com/');
all.sort(function (b, a) { return b.created - a.created; });
for (var x in all) {
    $("#locations").append(all[x].render());
}

const data = {

    locations:[],

    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location);
    }

}

data.location = '  Test   ';
data.location = '  Test2   ';
console.log(data.location);
console.log(data);
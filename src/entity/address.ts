export default class Address {

    _street: string;
    _city: string;
    _zip: string;
    _number: number;

    constructor(street: string, city: string, zip: string, number: number) {
        this._street = street;
        this._city = city;
        this._zip = zip;
        this._number = number;
        this.validate();
    }       

    validate() {
        if (this._street.length === 0) {
            throw new Error('Address street cannot be empty');
        }

        if (this._city.length === 0) {
            throw new Error('Address city cannot be empty');
        }

        if (this._zip.length === 0) {
            throw new Error('Address zip cannot be empty');
        }

        if (this._number === 0) {
            throw new Error('Address number cannot be empty');
        }
    }

    toString() {
        return `${this._street}, ${this._number} - ${this._zip} - ${this._city}`;
    }
}
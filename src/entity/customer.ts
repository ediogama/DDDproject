class Customer {

    _id: string;
    _name: string;
    _address: string;
    _isActive: boolean = false;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this._address = address;
        this.validate();
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error('Customer name cannot be empty');
        }

        if (this._id.length === 0) {
            throw new Error('Customer id cannot be empty');
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address.length === 0) {
            throw new Error('Customer address cannot be empty');
        }
        this._isActive = true;
    }

    deactivate() {
        this._isActive = false;
    }
}
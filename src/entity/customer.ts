import Address from "./address";

export default class Customer {

    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    get id(): string {
        return this._id;
    }

    validate() {
        if (this._name.length === 0) {
            throw new Error('Name is required');
        }

        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
    }

    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if (this._address === undefined) {
            throw new Error('Customer address cannot be empty');
        }
        this._active = true;
    }

    isActive(): boolean {
        return this._active;
    }

    deactivate() {
        this._active = false;
    }

    set Address(address: Address) {
        this._address = address;
    }
}
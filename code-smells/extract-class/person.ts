class Person {
  private _name: string;
  private _telePhoneNumber: TelePhoneNumber;

  constructor() {
    this._telePhoneNumber = new TelePhoneNumber();
  }

  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telePhoneNumber.toString;
  }

  get officeAreaCode() {
    return this._telePhoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telePhoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telePhoneNumber.number;
  }
  set officeNumber(arg) {
    this._telePhoneNumber.number = arg;
  }
}

class TelePhoneNumber {
  private _number: string;
  private _areaCode: string;

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }
  set number(arg) {
    this._number = arg;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

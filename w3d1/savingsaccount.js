class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        if (interest <= 0) {
            throw new RangeError("Interest rate has to be greater than zero");
        }
        this._interest = interest;
    }

    addInterest() {
        let interest = this.getBalance() * this.getInterest() / 100;
        this.deposit(interest);
    }

    toString() {
        return "Savings Account " + this.getNumber() + ": balance: " + this.getBalance() + " interest: " + this.getInterest();
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this.getNumber() + ": balance: " + this.getBalance() + " interest: " + this.getInterest();
    }
}
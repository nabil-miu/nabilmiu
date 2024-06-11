class Bank {
    static nextNumber = 0;

    constructor() {
        this._accounts = [];
    }

    addAccount() {
        let account = new Account(Bank.nextNumber);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        let account = new SavingsAccount(Bank.nextNumber, interest);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    addCheckingAccount(overdraft) {
        let account = new CheckingAccount(Bank.nextNumber, overdraft);
        this._accounts.push(account);
        Bank.nextNumber++;
        return account.getNumber();
    }

    closeAccount(number) {
        let index = this._accounts.findIndex(account => account.getNumber() === number);
        this._accounts.splice(index, 1);
    }

    accountReport() {
        return this._accounts.map(account => account.toString()).join("\n");
    }
    endOfMonth() {
        return this._accounts.map(account => account.endOfMonth()).join("\n");
    }
}
// testing account
describe("account:deposit", function () {
    it("deposit amount has to be greater than zero",
        function () {
            let account = new Account(1);
            assert.throws(() => account.deposit(-1), RangeError, "Deposit amount has to be greater than zero");
        });
});

describe("account:withdraw", function () {
    it("withdraw amount has to be greater than zero",
        function () {
            let account = new Account(1);
            assert.throws(() => account.withdraw(-1), RangeError, "Withdraw amount has to be greater than zero");
        });
});

describe("account:withdraw", function () {
    it("Insufficient funds",
        function () {
            let account = new Account(1);
            assert.throws(() => account.withdraw(1), Error, "Insufficient funds");
        });
});

describe("account:toString", function () {
    it("representation of this account",
        function () {
            let account = new Account(1);
            assert.equal(account.toString(), "Account 1: balance 0");
        });
});

// Testing SavingsAccount
describe("savingsAccount:setInterest", function () {
    it("interest rate has to be greater than zero",
        function () {
            let account = new SavingsAccount(1, 0.01);
            assert.throws(() => account.setInterest(-1), RangeError, "Interest rate has to be greater than zero");
        });
});

describe("savingsAccount:addInterest", function () {
    it("add interest to the balance",
        function () {
            let account = new SavingsAccount(1, 0.01);
            account.deposit(100);
            account.addInterest();
            assert.equal(account.getBalance(), 100.01);
        });
});

describe("savingsAccount:toString", function () {
    it("representation of this account",
        function () {
            let account = new SavingsAccount(1, 0.01);
            assert.equal(account.toString(), "Savings Account 1: balance: 0 interest: 0.01");
        });
});

describe("savingsAccount:endOfMonth", function () {
    it("add interest to the balance",
        function () {
            let account = new SavingsAccount(1, 0.01);
            account.deposit(100);
            assert.equal(account.endOfMonth(), "Interest added SavingsAccount 1: balance: 100.01 interest: 0.01");
        });
});

//Testing CheckingAccount
describe("checkingAccount:setOverdraft", function () {
    it("overdraft limit has to be greater than zero",
        function () {
            let account = new CheckingAccount(1, 100);
            assert.throws(() => account.setOverdraftLimit(-1), RangeError, "Overdraft limit has to be greater than zero");
        });
});

describe("checkingAccount:withdraw", function () {
    it("Insufficient funds through overdraft limit",
        function () {
            let account = new CheckingAccount(1, 100);
            assert.throws(() => account.withdraw(102), Error, "Insufficient funds");
        });
});

describe("checkingAccount:withdraw", function () {
    it("Insufficient funds",
        function () {
            let account = new CheckingAccount(1, 100);
            account.deposit(150);
            account.withdraw(50);
            assert.equal(100, account.getBalance());
        });
});

describe("checkingAccount:toString", function () {
    it("representation of this account",
        function () {
            let account = new CheckingAccount(1, 100);
            assert.equal(account.toString(), "Checking Account 1: balance: 0 overdraft limit: 100");
        });
});

describe("checkingAccount:endOfMonth", function () {
    it("no action",
        function () {
            let account = new CheckingAccount(1, 100);
            assert.equal(account.endOfMonth(), "");
        });
});

// Testing Bank

describe("bank:addAccount", function () {
    it("add account to the bank",
        function () {
            let bank = new Bank();
            bank.addAccount();
            assert.equal(1, bank._accounts.length);
        });
});

describe("bank:addSavingsAccount", function () {
    it("add savings account to the bank",
        function () {
            let bank = new Bank();
            bank.addSavingsAccount(0.01);
            assert.equal(1, bank._accounts.length);
        });
});

describe("bank:addCheckingAccount", function () {
    it("add checking account to the bank",
        function () {
            let bank = new Bank();
            bank.addCheckingAccount(100);
            assert.equal(1, bank._accounts.length);
        });
});

describe("bank:closeAccount", function () {
    it("close account",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.closeAccount(1);
            assert.equal(0, bank._accounts.length);
        });
});

describe("bank:accountReport", function () {
    it("account report",
        function () {
            let bank = new Bank();
            bank.addAccount();
            assert.equal(`Account ${--Bank.nextNumber}: balance 0`, bank.accountReport());
        });
});

describe("bank:endOfMonth", function () {
    it("end of month",
        function () {
            let bank = new Bank();
            bank.addAccount();
            assert.equal("", bank.endOfMonth());
        });
});

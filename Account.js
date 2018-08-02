class Account{

    constructor(accountName, accountBalance)
    {
        this.accountName = accountName;
        this.accountBalance = accountBalance;
    }

    withdrawal(amount)
    {
        this.accountBalance -= amount;
    }

    deposit(amount)
    {
        this.accountBalance += amount;
    }

    balance()
    {
        return this.accountBalance;
    }
}

function main() {
    var account = new Account("Ballin", 100);
    (account.deposit(20));
    console.log(account);
    var newAccount = new Account("Matt's Account", 1000);
    var newAccount2 = new Account("My Account", 0);
    newAccount.withdrawal(100);
    newAccount2.deposit(100);
    //console.log(newAccount() + newAccount2);
    //alert(newAccount+ newAccount2);
    console.log(newAccount.balance());
    console.log(newAccount2.balance());
}

main();
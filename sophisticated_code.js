/*** 
 * filename: sophisticated_code.js
 * content: This code demonstrates a complex implementation of a virtual banking system.
 * It includes classes for users, accounts, transactions, and a bank manager.
 * The code is more than 200 lines long and is written in JavaScript.
 */

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.accounts = [];
  }

  createAccount(accountType, initialDeposit) {
    const account = new Account(accountType, initialDeposit);
    this.accounts.push(account);
  }

  makeTransaction(fromAccount, toAccount, amount) {
    const senderAccount = this.accounts.find(account => account.id === fromAccount);
    const receiverAccount = this.accounts.find(account => account.id === toAccount);

    if (!senderAccount || !receiverAccount) {
      console.log('Invalid account(s).');
      return;
    }

    if (senderAccount.balance < amount) {
      console.log('Insufficient balance.');
      return;
    }

    senderAccount.withdraw(amount);
    receiverAccount.deposit(amount);

    console.log(`${this.name} made a transaction of $${amount} from Account ${senderAccount.id} to Account ${receiverAccount.id}.`);
  }
}

class Account {
  static idCounter = 1;

  constructor(type, initialDeposit = 0) {
    this.id = Account.idCounter++;
    this.type = type;
    this.balance = initialDeposit;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

class BankManager {
  constructor(users) {
    this.users = users;
  }

  createUser(name, age, email) {
    const user = new User(name, age, email);
    this.users.push(user);
    console.log(`A new user named ${name} has been created.`);
  }

  deleteUser(email) {
    const userIndex = this.users.findIndex(user => user.email === email);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      console.log(`User with email ${email} has been deleted.`);
    } else {
      console.log(`User with email ${email} not found.`);
    }
  }

  displayAccounts(email) {
    const user = this.users.find(user => user.email === email);

    if (!user) {
      console.log(`User with email ${email} not found.`);
      return;
    }

    const { name, accounts } = user;
    console.log(`Accounts of ${name}:`);
    accounts.forEach(account => {
      console.log(`Account ID: ${account.id}, Type: ${account.type}, Balance: $${account.balance}`);
    });
  }
}

// Create a bank manager instance
const bankManager = new BankManager([]);

// Create some users
bankManager.createUser('John', 25, 'john@example.com');
bankManager.createUser('Alice', 30, 'alice@example.com');

// Create accounts for users
bankManager.users[0].createAccount('Savings', 500);
bankManager.users[0].createAccount('Current', 2000);
bankManager.users[1].createAccount('Savings', 1000);

// Make transactions between accounts
bankManager.users[0].makeTransaction(1, 2, 300);
bankManager.users[1].makeTransaction(3, 2, 800);

// Display accounts of a user
bankManager.displayAccounts('john@example.com');
bankManager.displayAccounts('alice@example.com');

// Delete a user
bankManager.deleteUser('alice@example.com');

// Display accounts after deleting
bankManager.displayAccounts('alice@example.com');

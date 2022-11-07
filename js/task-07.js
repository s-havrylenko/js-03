/*
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.
*/

/*
Типов транзацкий всего два.
Можно положить либо снять деньги со счета.
*/

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};


// Каждая транзакция это объект со свойствами: id, type и amount

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],
  

  /*
  Метод создает и возвращает объект транзакции.
  Принимает сумму и тип транзакции.
  */
  createTransaction(amount, type) {
    const transaction = {
      id: 'Name',
      type,
      amount,
    };

    this.transactions.push(transaction);
    
    console.log(transaction);

    if (type === Transaction.DEPOSIT) {
      this.deposit(amount);
    } else {
      this.withdraw(amount);
    }

    this.getBalance(this.balance);
  },

  /*
  Метод отвечающий за добавление суммы к балансу.
  Принимает сумму тpанзакции.
  Вызывает createTransaction для создания объекта транзакции
  после чего добавляет его в историю транзакций
  */
  deposit(amount) {
    console.log('deposit amount', amount);

    this.balance += amount;
  },

  /*
  Метод отвечающий за снятие суммы с баланса.
  Принимает сумму танзакции.
  Вызывает createTransaction для создания объекта транзакции
  после чего добавляет его в историю транзакций.
  
  Если amount больше чем текущий баланс, выводи сообщение
  о том, что снятие такой суммы не возможно, недостаточно средств.
   
  */
  withdraw(amount) {
    console.log('withdraw amount', amount);
    
    this.balance -= amount;

  },

  // Метод возвращает текущий баланс
  
  getBalance(balance) {
    return console.log('Текущий баланс', balance);
  },

  // Метод ищет и возвращает объект транзации по id
  
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      const values = Object.values(transaction);
      // console.log(values);

      if (values.includes(id)) {
        return console.log('Oбъекты транзации взависимости от id:', this.transactions);
      }
    }    
  },

  /*
  Метод возвращает количество средств
  определенного типа транзакции из всей истории транзакций
  */
  getTransactionTotal(type) {
    let typeBalance = 0;

    for (const transaction of this.transactions) {
      // console.log(transaction.type);

      if (transaction.type === type) {
        typeBalance += transaction.amount;
      }
    }

    return console.log(`Количество средств пo транзакции ${type}:`, typeBalance);
  },
};


account.createTransaction(2500, Transaction.DEPOSIT);
account.createTransaction(1500, Transaction.DEPOSIT);
account.createTransaction(500, Transaction.WITHDRAW);
account.createTransaction(1000, Transaction.WITHDRAW);
account.createTransaction(3500, Transaction.DEPOSIT);
account.createTransaction(200, Transaction.WITHDRAW);

account.getTransactionDetails('Name');

account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);

// console.log('История транзакций', account.transactions);
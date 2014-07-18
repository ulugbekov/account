function Account() {
	this.number  = this.create_credit_card();
	this.type 	 = this.get_card_type();
	this.balance = Math.ceil(Math.random() * 10);
}

Account.credit_types = ["Visa", "Master"];

Account.prototype.debit = function(amount) {
	if (this.valid(amount) && this.can_charge(amount)) {
		this.balance -= amount
		return true
	} else {
		throw new Error("You have low balance\n");
	}
}

Account.prototype.credit = function(amount) {
	this.balance += amount;
}

Account.prototype.get_card_type = function(amount) {
	return Account.credit_types[Math.floor(Math.random() * (Account.credit_types.length))];
}

Account.prototype.create_credit_card = function() {
	number = ""
	for (var i = 3; i >= 0; i--) {
		number +=  Math.ceil(Math.random()*(9999-1000) + 1000 ) // Math.ceil(Math.random() * 1000);
		if (i != 0) {
			number += "-"
		};
	};
	return number;
}

Account.prototype.valid = function(amount) {
	if (amount > 0) {
		return true;
	} else {
		throw new Error("Amount should be positive value");
	}
}

Account.prototype.can_charge = function(amount) {
	if (this.balance >= amount) {
		return true;
	} else {
		return false;
	}
}

module.exports = Account;

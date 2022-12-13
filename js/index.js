class DrinkMachine {
	build() {
		this.boilWater();
		this.brewCoffeeGriends();
		this.pourInCup();
		this.addSugarAndMilk();
	}
};

class Coffee extends DrinkMachine {
	boilWater() {
		console.log("кип'ятити воду");
	}

	brewCoffeeGriends() {
		console.log('Заваріть каву окропом');
	}

	pourInCup() {
		console.log('налити каву в чашку');
	}

	addSugarAndMilk() {
		console.log('цукор і молоко');
	}
}

class Tea extends DrinkMachine {
	boilWater() {
		console.log("кип'ятити воду");
	}

	brewCoffeeGriends() {
		console.log('Заварку заварити в окропі');
	}

	pourInCup() {
		console.log('налити чай в чашку');
	}

	addSugarAndMilk() {
		console.log('додати сахар');
	}
}

const coffeeDrinkMachine = new Coffee();
const teaDrinkMachine = new Tea();

coffeeDrinkMachine.build();
teaDrinkMachine.build();

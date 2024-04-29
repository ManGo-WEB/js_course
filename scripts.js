"use strict"

let money = +prompt('Ваш бюджет на месяц?'),
	time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timedate: time,
	savings: false
};

for (let i = 0; i < 2; i++) {
	let question = prompt('Введите обязательную статью расходов в этом месяце'),
		answer = prompt('Во сколько обойдется?');

	if ((typeof (question)) === 'string' && (typeof (question) != null && (typeof (answer) != null)) && question != '' && answer != '' && question.length < 50) {

		console.log('Done');
		appData.expenses[question] = answer;
	} else {
		i = i - 1;
	}
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log("Произошла ошибка!");
}
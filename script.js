let id = 1;

function padZeroes(id) {
	let str = id.toString();
	switch (str.length) {
		case 1:
			return '00' + str;
		case 2:
			return '0' + str;
		default:
			return str;		
	}
}

function addExpense() {
	const expenseID = padZeroes(id);
	const date = document.getElementById('date').value;
	const desc = document.getElementById('desc').value;
	const amount = document.getElementById('amount').value;
	const location = document.getElementById('location').value;
    
    let tr = document.createElement('tr');
    tr.id = expenseID;

    let tableID = document.createElement('td');
    tableID.innerHTML = expenseID;
    tr.appendChild(tableID);

    let tableDate = document.createElement('td');
    tableDate.innerHTML = date;
    tr.appendChild(tableDate);

    let tableDesc = document.createElement('td');
    tableDesc.innerHTML = desc;
    tr.appendChild(tableDesc);

    let tableAmount = document.createElement('td');
    tableAmount.innerHTML = amount;
    tr.appendChild(tableAmount);

    let tableLocation = document.createElement('td');
    tableLocation.innerHTML = location;
    tr.appendChild(tableLocation);

    let button = document.createElement('button');
	button.className = 'delete';
	button.setAttribute('onclick', `deleteExpense('${expenseID}')`);
	button.innerHTML = '<strong>X</strong>';
	tr.appendChild(button);

    document.getElementById('data').appendChild(tr);

	id++;
}

function deleteExpense(id) {
	const table = document.getElementById('data');
	const expense = document.getElementById(id);
	table.removeChild(expense);
}

//Todos
//1. Refactor Code
//2. Add logic that forces user to enter all information into fields
//3. Finish Styling
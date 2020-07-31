let id = 1;

function createID(idNum) {
	let str = idNum.toString();
	id++;
	switch (str.length) {
		case 1:
			return '00' + str;
		case 2:
			return '0' + str;
		default:
			return str;		
	}
}

function createCell(id) {
	const userInput = document.getElementById(id).value;
    let cell = document.createElement('td');
    cell.innerHTML = userInput;
    return cell;
}

function createTableHead() {
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	let labels = ['ID', 'DATE', 'DESCRIPTION', 'LOCATION', 'AMOUNT', 'RMV']
	for (let i = 0;  i < labels.length; i++ ) {
		let td = document.createElement('td')
		td.innerHTML = labels[i];
		tr.appendChild(td);
	}
	thead.appendChild(tr);
	document.getElementById('expense-table').appendChild(thead);
}

function deleteExpense(id) {
	const table = document.getElementById('data');
	const expense = document.getElementById(id);
	table.removeChild(expense);
}

function clearInputs() {
	document.getElementById('date').value = '';
	document.getElementById('desc').value = '';
	document.getElementById('location').value = '';
	document.getElementById('amount').value = '';
}
document.getElementById('add').addEventListener('click', function(e) {
    const date = createCell('date');
    if (date.innerHTML === '') {return;}
    
    const desc = createCell('desc');
    if (desc.innerHTML === '') {return;} 
    
    const location = createCell('location');
    if (location.innerHTML === '') {return;}  
    
    const amount = createCell('amount');
    if (amount.innerHTML === '') {return;}
    amount.innerHTML = `$${Number(amount.innerHTML).toFixed(2)}`;
    
    const deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.addEventListener('click', function(e) {deleteExpense(expenseID);})
	deleteButton.innerHTML = '<strong>X</strong>';
	
	const expenseID = createID(id);
	if (expenseID === '001') {createTableHead();}
	
	let tr = document.createElement('tr');
    tr.id = expenseID;

    const rowID = document.createElement('td');
    rowID.innerHTML = expenseID;

	tr.appendChild(rowID);
	tr.appendChild(date);
	tr.appendChild(desc);
	tr.appendChild(location);
	tr.appendChild(amount);
	tr.appendChild(deleteButton);
    document.getElementById('data').appendChild(tr);

    clearInputs();
});
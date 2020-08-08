let id = 1;
const table = document.getElementById('expense-table');
const tableBody = document.getElementById('data');

function clearInputs() {
	document.getElementById('date').value = '';
	document.getElementById('desc').value = '';
	document.getElementById('location').value = '';
	document.getElementById('amount').value = '';
}

function createCell(id) {
	const userInput = document.getElementById(id).value;
    let cell = document.createElement('td');
    cell.textContent = userInput;
    return cell;
}

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

function createTableHead() {
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	let labels = ['ID', 'DATE', 'DESCRIPTION', 'LOCATION', 'AMOUNT', 'RMV']
	for (let i = 0;  i < labels.length; i++ ) {
		let td = document.createElement('td')
		td.textContent = labels[i];
		tr.appendChild(td);
	}
	thead.appendChild(tr);
	table.appendChild(thead);
}

function deleteExpense(id) {
	const expense = document.getElementById(id);
	tableBody.removeChild(expense);
}

function createDeleteButton(id) {
	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.addEventListener('click', function(e) {deleteExpense(id);})
	deleteButton.textContent = 'X';
	return deleteButton;
}

document.getElementById('add').addEventListener('click', function(e) {
    const date = createCell('date');
    const desc = createCell('desc');
    const location = createCell('location');
    const amount = createCell('amount');
    amount.textContent = `$${Number(amount.textContent).toFixed(2)}`;

    const noDate = (date.textContent === '');
    const noDesc = (desc.textContent === '');
    const noLocation = (location.textContent === '');
    const noAmount = (amount.textContent === '');
    
    if (noDate || noDesc || noLocation || noAmount) {
    	return;
    }

	const expenseID = createID(id); 
    deleteButton = createDeleteButton(expenseID);
	
	if (expenseID === '001') {
		createTableHead();
	}
	
	let tr = document.createElement('tr');
    tr.id = expenseID;

    const rowID = document.createElement('td');
    rowID.textContent = expenseID;

	tr.appendChild(rowID);
	tr.appendChild(date);
	tr.appendChild(desc);
	tr.appendChild(location);
	tr.appendChild(amount);
	tr.appendChild(deleteButton);
    tableBody.appendChild(tr);

    clearInputs();
});
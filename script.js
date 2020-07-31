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

function deleteExpense(id) {
	const table = document.getElementById('data');
	const expense = document.getElementById(id);
	table.removeChild(expense);
}

document.getElementById('add').addEventListener('click', function(e) {
	const expenseID = createID(id);
	
	let tr = document.createElement('tr');
    tr.id = expenseID;

    const rowID = document.createElement('td');
    rowID.innerHTML = expenseID;
    tr.appendChild(rowID);

	const date = document.getElementById('date').value;
	if (date === '') {return;}
    let rowDate = document.createElement('td');
    rowDate.innerHTML = date;
    tr.appendChild(rowDate);

	const desc = document.getElementById('desc').value;   
	if (desc === '') {return;} 
    let rowDesc = document.createElement('td');
    rowDesc.innerHTML = desc;
    tr.appendChild(rowDesc);

    const location = document.getElementById('location').value;
	if (location === '') {return;}    
    let rowLocation = document.createElement('td');
    rowLocation.innerHTML = location;
    tr.appendChild(rowLocation);

	const amount = document.getElementById('amount').value;
    if (amount === 0) {return;}
    let rowAmount = document.createElement('td');
    rowAmount.innerHTML = `$${Number(amount).toFixed(2)}`;
    tr.appendChild(rowAmount);

    const deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.addEventListener('click', function(e) {deleteExpense(expenseID);})
	deleteButton.innerHTML = '<strong>X</strong>';
	tr.appendChild(deleteButton);

    document.getElementById('data').appendChild(tr);
});
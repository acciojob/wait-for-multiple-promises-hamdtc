//your JS code here. If required.
const table = document.getElementById("myTable");

// Add a loading row
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.setAttribute("colspan", 2);
loadingCell.textContent = "Loading...";

// Create 3 promises that resolve after a random time between 1 and 3 seconds
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 2 + 1), Math.random() * 2000 + 1000))
];

// Wait for all promises to resolve using Promise.all()
Promise.all(promises).then(results => {
  // Remove the loading row
  table.deleteRow(loadingRow.rowIndex);

  // Add rows for each promise result
  results.forEach((result, index) => {
    const row = table.insertRow();
    const promiseCell = row.insertCell();
    promiseCell.textContent = `Promise ${index + 1}`;
    const timeCell = row.insertCell();
    timeCell.textContent = result.toFixed(3);
  });

  // Add a row for the total time
  const totalRow = table.insertRow();
  const totalCell = totalRow.insertCell();
  totalCell.textContent = "Total";
  const totalTimeCell = totalRow.insertCell();
  const totalTime = results.reduce((total, result) => total + result, 0);
  totalTimeCell.textContent = totalTime.toFixed(3);
});
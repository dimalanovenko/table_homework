function sortTable(columnIndex) {
    const table = document.getElementById("data-table");
    const rows = Array.from(table.rows).slice(1);
    let isAscending = table.getAttribute("data-sort-asc") === "true";
    
    rows.sort(function(a, b) {
        const cellA = a.cells[columnIndex].innerText;
        const cellB = b.cells[columnIndex].innerText;
        
        if (!isNaN(cellA) && !isNaN(cellB)) {
            return isAscending ? cellA - cellB : cellB - cellA;
        }
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });
    
    isAscending = !isAscending;
    table.setAttribute("data-sort-asc", isAscending);

    rows.forEach(function(row) {
        table.tBodies[0].appendChild(row);
    });
}

document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const status = document.getElementById('status').value;
    const value = document.getElementById('value').value;

    if (!name || !location || !status || !value) {
        alert('Preencha todos os campos!');
        return;
    }

    const propertyList = document.getElementById('property-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${location}</td>
        <td>${status.replace('_', ' ')}</td>
        <td>${parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
    `;
    propertyList.appendChild(row);

    document.getElementById('property-form').reset();
});

document.getElementById('export-btn').addEventListener('click', function() {
    // Adiciona os cabeçalhos manualmente
    const data = [
        ['name', 'location', 'status', 'value'] // Cabeçalhos
    ];

    // Captura os dados das linhas da tabela
    const rows = document.querySelectorAll('#property-list tr');
    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        const rowData = Array.from(cells).map(cell => cell.innerText);
        data.push(rowData);
    });

    // Converte os dados para uma planilha Excel
    const ws = XLSX.utils.aoa_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Imóveis");

    // Exporta o arquivo
    XLSX.writeFile(wb, 'imoveis_atualizado.xlsx');
});

const form = document.getElementById('coordinateForm');
const resultDiv = document.getElementById('result');

const minHranice = 0;  
const maxHranice = 50; 

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (x >= minHranice && x <= maxHranice && y >= minHranice && y <= maxHranice) {
        resultDiv.textContent = "Bod leží uvnitř čtverce nebo na jeho hranici.";
        resultDiv.className = "green";  
    } else {
        resultDiv.textContent = "Bod leží mimo čtverec.";
        resultDiv.className = "red";  
    }
});

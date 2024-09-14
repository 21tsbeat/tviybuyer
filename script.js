document.getElementById('delivery-calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const method = document.getElementById('method').value;

    if (!isNaN(weight)) {
        const cost = calculateDeliveryCost(weight, method);
        document.getElementById('result').textContent = `Стоимость доставки: ${cost} грн.`;
    } else {
        document.getElementById('result').textContent = 'Пожалуйста, введите корректный вес.';
    }
});

function calculateDeliveryCost(weight, method) {
    const aviaCostPerKg = 800;  // Стоимость за кг для авиа
    const seaCostPerKg = 330;   // Стоимость за кг для морем

    if (method === 'avia') {
        return weight * aviaCostPerKg;
    } else if (method === 'sea') {
        return weight * seaCostPerKg;
    }
}

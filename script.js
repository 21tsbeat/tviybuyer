document.getElementById('delivery-calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);  // Получаем дробное значение веса
    const method = document.getElementById('method').value;

    if (!isNaN(weight) && weight > 0) {
        const cost = calculateDeliveryCost(weight, method);
        document.getElementById('result').textContent = `Приблизна вартість доставки: ${cost.toFixed(2)} грн.`;
    } else {
        document.getElementById('result').textContent = 'Будь ласка, введіть коректну вагу.';
    }
});

function calculateDeliveryCost(weight, method) {
    const aviaCostPerKg = 800;  // Вартість за кг для авіа
    const seaCostPerKg = 330;   // Вартість за кг для морем

    if (method === 'avia') {
        return weight * aviaCostPerKg;
    } else if (method === 'sea') {
        return weight * seaCostPerKg;
    }
}

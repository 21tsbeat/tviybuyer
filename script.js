document.getElementById('delivery-calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);

    if (!isNaN(weight) && !isNaN(distance)) {
        const cost = calculateDeliveryCost(weight, distance);
        document.getElementById('result').textContent = `Стоимость доставки: ${cost} руб.`;
    } else {
        document.getElementById('result').textContent = 'Пожалуйста, введите корректные данные.';
    }
});

function calculateDeliveryCost(weight, distance) {
    const costPerKg = 5; // Стоимость за кг
    const costPerKm = 2; // Стоимость за км
    return (weight * costPerKg) + (distance * costPerKm);
}

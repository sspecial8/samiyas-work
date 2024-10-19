document.getElementById('submit').addEventListener('click', calculatePrice);

function calculatePrice() {
    let basePrice = 100;

    let educationCoeff = parseFloat(document.getElementById('education').value);
    basePrice *= educationCoeff;

    let netWorthCoeff = parseFloat(document.getElementById('networth').value);
    basePrice *= netWorthCoeff;

    let castePrice = parseFloat(document.getElementById('caste').value);
    basePrice += castePrice;

    if (document.getElementById('music').checked) basePrice += parseFloat(document.getElementById('music').value);
    if (document.getElementById('cook').checked) basePrice += parseFloat(document.getElementById('cook').value);
    if (document.getElementById('easygoing').checked) basePrice += parseFloat(document.getElementById('easygoing').value);
    if (document.getElementById('sing').checked) basePrice += parseFloat(document.getElementById('sing').value);

    let ageElems = document.getElementsByName('age');
    for (let i = 0; i < ageElems.length; i++) {
        if (ageElems[i].checked) {
            basePrice *= parseFloat(ageElems[i].value);
            break;
        }
    }

    if (document.getElementById('parentGossip').checked) basePrice *= parseFloat(document.getElementById('parentGossip').value);
    if (document.getElementById('characterGossip').checked) basePrice *= parseFloat(document.getElementById('characterGossip').value);
    if (document.getElementById('generalGossip').checked) basePrice += parseFloat(document.getElementById('generalGossip').value);

    document.getElementById('result').innerText = "Final Price: $" + basePrice.toFixed(2);
}

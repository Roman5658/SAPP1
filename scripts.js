function navigateTo(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.classList.remove('active'));
    document.getElementById(menuId).classList.add('active');
}

function selectMaterial(materialId) {
    const selectedMaterial = document.getElementById(`material-${materialId}`);
    const quantity = selectedMaterial.getAttribute('data-quantity');
    document.getElementById('localization-message').textContent = `Idź do - GL-005-01 i zabierz ${quantity} szt.`;
    navigateTo('localization-menu');
}

function selectReturnMaterial(materialId) {
    const selectedMaterial = document.getElementById(`return-material-${materialId}`);
    const quantity = selectedMaterial.getAttribute('data-quantity');
    document.getElementById('fill-material-message').textContent = `Zwróć ${quantity} szt. materiału.`;
    navigateTo('fill-material-menu');
}

function confirmQuantity() {
    const quantityInput = document.getElementById('quantity-input');
    const quantity = quantityInput.value;
    const errorMessage = document.getElementById('error-message');
    const confirmationMessage = document.getElementById('confirmation-message');

    errorMessage.textContent = '';
    confirmationMessage.textContent = '';

    if (!quantity || isNaN(quantity) || quantity <= 0) {
        errorMessage.textContent = 'Wprowadź poprawną ilość.';
        return;
    }

    confirmationMessage.textContent = `Potwierdzono ilość: ${quantity} szt.`;
    quantityInput.value = '';
}

function confirm() {
    alert('Potwierdzone!');
}

function cancel() {
    alert('Anulowane!');
}

function handleCommand(event) {
    if (event.key === 'Enter') {
        executeCommand();
    }
}

function executeCommand() {
    const commandInput = document.getElementById('command-input');
    const command = commandInput.value.trim();

    if (command) {
        alert(`Wykonano komendę: ${command}`);
        commandInput.value = '';
    } else {
        alert('Wprowadź komendę.');
    }
}

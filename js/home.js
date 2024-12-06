// donation button
document.getElementById('toggle-donation-btn').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('toggle-donation-btn').classList.add('bg-lime-300');
    document.getElementById('toggle-history-btn').classList.remove('bg-lime-300');
});

// history button

document.getElementById('toggle-history-btn').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('toggle-donation-btn').classList.remove('bg-lime-300');
    document.getElementById('toggle-history-btn').classList.add('bg-lime-300');
})

// Noakhali form

document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentNoakhaliDonation = getElementText('noakhali-current-donation');
    const noakhaliDonationInput = getInputFieldValue('noakhali-donation-input');
    if (isNaN(noakhaliDonationInput) === false && totalBalance > noakhaliDonationInput) {
        const totalNoakhaliDonation = currentNoakhaliDonation + noakhaliDonationInput;
        const newTotalBalance = totalBalance - noakhaliDonationInput;
        document.getElementById('noakhali-current-donation').innerText = totalNoakhaliDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('noakhali-donation-input').value = '';
        console.log
    }
    else {
        alert('Please check your input');
    }
});



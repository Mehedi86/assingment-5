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
    }
    else {
        alert('Please check your input');
    }
});

// feni form

document.getElementById('feni-donation-btn').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentFeniDonation = getElementText('feni-current-donation');
    const feniDonationInput = getInputFieldValue('feni-donation-input');

    if (isNaN(feniDonationInput) === false && totalBalance > feniDonationInput) {
        const totalFeniDonation = currentFeniDonation + feniDonationInput;
        const newTotalBalance = totalBalance - feniDonationInput;

        document.getElementById('feni-current-donation').innerText = totalFeniDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('feni-donation-input').value = '';
    }
    else {
        alert('Please check your input');
    }
});

// for quota movement doantion form

document.getElementById('quota-doanation-form').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentQuotaDonation = getElementText('quota-current-donation');
    const quotaDonationInput = getInputFieldValue('quota-donation-input');

    if (isNaN(quotaDonationInput) === false && totalBalance > quotaDonationInput) {
        const totalQuotaDonation = currentQuotaDonation + quotaDonationInput;
        const newTotalBalance = totalBalance - quotaDonationInput;

        document.getElementById('quota-current-donation').innerText = totalQuotaDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('quota-donation-input').value = '';
    }
    else {
        alert('Please check your input');
    }

});

// blog button workings
document.getElementById('blog-button').addEventListener('click', function () {

    window.location.href = 'blog.html';
});


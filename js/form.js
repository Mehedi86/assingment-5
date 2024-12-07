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
});

// time 

const date = new Date();

// Noakhali form

document.getElementById('noakhali-donation-btn').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentNoakhaliDonation = getElementText('noakhali-current-donation');
    const noakhaliDonationInput = getInputFieldValue('noakhali-donation-input');
    if (isNaN(noakhaliDonationInput) === false && totalBalance > noakhaliDonationInput && noakhaliDonationInput > 0) {
        const totalNoakhaliDonation = currentNoakhaliDonation + noakhaliDonationInput;
        const newTotalBalance = totalBalance - noakhaliDonationInput;
        document.getElementById('noakhali-current-donation').innerText = totalNoakhaliDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('noakhali-donation-input').value = '';

        const historyInnerHtml = document.getElementById('history-section').innerHTML;

        const newHtml = `<div class="w-10/12 p-4 mx-auto m-4 border-2 rounded-lg">
            <h1 class="text-xl font-bold text-black py-2">${noakhaliDonationInput} Taka is Donated for Flood Relief in Noakhali, Bangladesh</h1>
            <p class="text-lg text-neutral-600">Date: ${date}</p>
            </div>`;

        document.getElementById('history-section').innerHTML = historyInnerHtml + newHtml;
    }
    else {
        document.getElementById('my_modal_1').close();
        alert('Please check your input');
        
    }
});

// feni form

document.getElementById('feni-donation-btn').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentFeniDonation = getElementText('feni-current-donation');
    const feniDonationInput = getInputFieldValue('feni-donation-input');

    if (isNaN(feniDonationInput) === false && totalBalance > feniDonationInput && feniDonationInput > 0) {
        const totalFeniDonation = currentFeniDonation + feniDonationInput;
        const newTotalBalance = totalBalance - feniDonationInput;

        document.getElementById('feni-current-donation').innerText = totalFeniDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('feni-donation-input').value = '';

        const historyInnerHtml = document.getElementById('history-section').innerHTML;

        const newHtml = `<div class="w-10/12 p-4 mx-auto m-4 border-2 rounded-lg">
            <h1 class="text-xl font-bold text-black py-2">${feniDonationInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
            <p class="text-lg text-neutral-600">Date: ${date}</p>
            </div>`;

        document.getElementById('history-section').innerHTML = historyInnerHtml + newHtml;
    }
    else {
        document.getElementById('my_modal_1').close();
        alert('Please check your input');
    }
});

// for quota movement doantion form

document.getElementById('quota-doanation-form').addEventListener('click', function () {
    const totalBalance = getElementText('total-balance');
    const currentQuotaDonation = getElementText('quota-current-donation');
    const quotaDonationInput = getInputFieldValue('quota-donation-input');

    if (isNaN(quotaDonationInput) === false && totalBalance > quotaDonationInput && quotaDonationInput > 0) {
        const totalQuotaDonation = currentQuotaDonation + quotaDonationInput;
        const newTotalBalance = totalBalance - quotaDonationInput;

        document.getElementById('quota-current-donation').innerText = totalQuotaDonation;

        document.getElementById('total-balance').innerText = newTotalBalance;

        document.getElementById('quota-donation-input').value = '';

        const historyInnerHtml = document.getElementById('history-section').innerHTML;
        my_modal_1.showModal();

        const newHtml = `<div class="w-10/12 p-4 mx-auto m-4 border-2 rounded-lg">
            <h1 class="text-xl font-bold text-black py-2">${quotaDonationInput} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
            <p class="text-lg text-neutral-600">Date: ${date}</p>
            </div>`;

        document.getElementById('history-section').innerHTML = historyInnerHtml + newHtml;
    }
    else {
        document.getElementById('my_modal_1').close();
        alert('Please check your input');
    }

});

// blog button workings
document.getElementById('blog-button').addEventListener('click', function () {

    window.location.href = 'blog.html';
});



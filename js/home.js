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

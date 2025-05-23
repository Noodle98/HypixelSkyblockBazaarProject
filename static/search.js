document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('item_input');
    const resultsEl = document.getElementById('results');

    let debounceTimeout;

    searchInput.addEventListener('input', function () {
        const query = this.value.trim();

        clearTimeout(debounceTimeout); // Cancel any pending request

        if (query.length < 2) {
            resultsEl.innerHTML = '';
            return;
        }

        // Set new delay
        debounceTimeout = setTimeout(async () => {
            try {
                const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
                const data = await response.json();

                resultsEl.innerHTML = '';
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    resultsEl.appendChild(li);
                });
            } catch (err) {
                console.error('Search error:', err);
            }
        }, 300); // 👈 300ms delay
    });
});

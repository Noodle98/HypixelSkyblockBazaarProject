document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('item_input');
    const resultsEl = document.getElementById('results');

    searchInput.addEventListener('input', async function () {
        const query = this.value.trim();

        if (query.length < 2) {
            resultsEl.innerHTML = '';
            return;
        }

        try {
            const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
            const data = await response.json();

            console.log("Search results:", data);

            resultsEl.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                resultsEl.appendChild(li);
            });
        } catch (err) {
            console.error('Search error:', err);
        }
    });
});
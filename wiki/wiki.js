document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Page loaded!");

    fetch("wiki.json")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(wikiJson => {
            const placeholder = document.getElementById("wikiContent");
            let out = "";

            for (let wiki of wikiJson.slice(0, 6)) {
                out += `
                    <div class="wiki">
                        <h4 class="search-item">${wiki.wikiName}</h4>
                        <p><code class="search-item">${wiki.wikiCommand}</code></p>
                        <p class="search-item">${wiki.wikiDescription}</p>
                        
                        ${wiki.wikiImages ? `<img src="${wiki.wikiImages}" alt="${wiki.wikiName}">` : ''}
                        <span class="tag">${wiki.wikiCategory}</span>
                        <hr>
                        <br><br>
                    </div>
                `;
            }

            placeholder.innerHTML = out;

            const searchBox = document.getElementById('searchBox');
            const items = document.querySelectorAll('.search-item');

            searchBox.addEventListener('input', function () {
                const query = this.value.toLowerCase();

                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    const parent = item.closest('.wiki'); // Get full block
                    if (parent) {
                        parent.style.display = text.includes(query) ? 'block' : 'none';
                    }
                });
            });
        })
        .catch(error => console.error("❌ Error fetching wiki content:", error));
});

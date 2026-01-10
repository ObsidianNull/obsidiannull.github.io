(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const listEl = document.getElementById('writeupsList');
    if (!listEl) return;

    fetch('resources/writeups/index.json', { cache: 'no-cache' })
      .then(resp => {
        if (!resp.ok) throw new Error('Failed to load write-ups index');
        return resp.json();
      })
      .then(items => {
        if (!Array.isArray(items) || items.length === 0) {
          listEl.innerHTML = `<div class="writeups-empty">No write-ups published yet. Check back soon.</div>`;
          return;
        }
        const filtersEl = document.getElementById('writeupsFilters');
        // Build tag set for filters
        const tagSet = new Set();
        items.forEach(item => (item.tags || []).forEach(t => tagSet.add(String(t))));

        // Render filters if container exists
        if (filtersEl) {
          renderFilters(filtersEl, Array.from(tagSet).sort(), listEl);
        }
        const frag = document.createDocumentFragment();
        items.forEach(item => {
          const card = document.createElement('article');
          card.className = 'writeup-card fade-in';

          const tagsHtml = (item.tags || []).map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('');
          const dateStr = formatDate(item.date);
          const isMarkdown = /\.md$/i.test(item.url || '');
          const href = isMarkdown 
            ? `resources/writeups/view.html?src=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}&date=${encodeURIComponent(item.date || '')}`
            : escapeUrl(item.url);

          // Add tags to dataset for filtering
          card.dataset.tags = (item.tags || []).map(String).join(',');

          card.innerHTML = `
            <div class="writeup-content">
              <h3 class="writeup-title">${escapeHtml(item.title)}</h3>
              <div class="writeup-meta">
                <span class="writeup-date"><i class="far fa-calendar"></i> ${dateStr}</span>
                <span class="writeup-tags">${tagsHtml}</span>
              </div>
              <p class="writeup-excerpt">${escapeHtml(item.excerpt || '')}</p>
            </div>
            <div class="writeup-actions">
              <a class=\"read-more\" href=\"${href}\">Read ↗</a>
            </div>
          `;

          frag.appendChild(card);
        });
        listEl.innerHTML = '';
        listEl.appendChild(frag);
      })
      .catch(err => {
        console.error(err);
        listEl.innerHTML = `<div class="writeups-error">Unable to load write-ups right now.</div>`;
      });
  });

  function escapeHtml(str){
    return String(str || '').replace(/[&<>"]+/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
  }
  function escapeUrl(str){
    try { return encodeURI(str); } catch(e) { return '#'; }
  }
  function formatDate(iso){
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    const opts = { year: 'numeric', month: 'short', day: '2-digit' };
    return d.toLocaleDateString(undefined, opts);
  }

  function renderFilters(container, tags, listEl) {
    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'All';
    allBtn.dataset.filter = 'all';
    container.appendChild(allBtn);

    tags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn';
      btn.textContent = tag;
      btn.dataset.filter = tag;
      container.appendChild(btn);
    });

    container.addEventListener('click', (e) => {
      const target = e.target;
      if (!target || !target.classList.contains('filter-btn')) return;

      // Toggle active
      Array.from(container.querySelectorAll('.filter-btn')).forEach(b => b.classList.remove('active'));
      target.classList.add('active');

      const filter = target.dataset.filter;
      const cards = Array.from(listEl.querySelectorAll('.writeup-card'));
      cards.forEach(card => {
        if (filter === 'all') {
          card.style.display = '';
        } else {
          const cardTags = (card.dataset.tags || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
          const match = cardTags.includes(String(filter).toLowerCase());
          card.style.display = match ? '' : 'none';
        }
      });
    });
  }
})();

/* ========================================
   TÜRK MUTFAĞI - ANA JAVASCRIPT DOSYASI
   Temel JavaScript ile yazılmıştır
   ======================================== */

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function () {

    // ---------- MOBİL MENÜ ----------
    var menuBtn = document.querySelector('.mobile-menu-btn');
    var nav = document.querySelector('.header-nav');

    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    // ---------- ARAMA ÇUBUĞU ----------
    var searchForms = document.querySelectorAll('.search-bar');
    for (var i = 0; i < searchForms.length; i++) {
        searchForms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            var input = this.querySelector('input');
            var query = input.value.trim();
            if (query.length > 0) {
                window.location.href = 'arama.html?q=' + encodeURIComponent(query);
            }
        });
    }

    // ---------- YEMEK DETAY SEKMELERİ ----------
    var tabs = document.querySelectorAll('.detail-tab');
    var tabContents = document.querySelectorAll('.tab-content');

    for (var t = 0; t < tabs.length; t++) {
        tabs[t].addEventListener('click', function () {
            // Tüm sekmelerin aktif sınıfını kaldır
            for (var j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('active');
            }
            for (var k = 0; k < tabContents.length; k++) {
                tabContents[k].classList.remove('active');
            }

            // Tıklanan sekmeyi aktif yap
            this.classList.add('active');
            var target = this.getAttribute('data-tab');
            var targetContent = document.getElementById(target);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    }

    // ---------- İL ARAMA FİLTRESİ ----------
    var citySearchInput = document.querySelector('.city-search input');
    if (citySearchInput) {
        citySearchInput.addEventListener('input', function () {
            var filter = this.value.toLowerCase().trim();
            var cityLinks = document.querySelectorAll('.city-grid a');

            for (var c = 0; c < cityLinks.length; c++) {
                var cityName = cityLinks[c].textContent.toLowerCase();
                if (cityName.indexOf(filter) > -1) {
                    cityLinks[c].style.display = '';
                } else {
                    cityLinks[c].style.display = 'none';
                }
            }
        });
    }

    // ---------- BÖLGE SEKMELERİ ----------
    var regionTabs = document.querySelectorAll('.region-tab');
    for (var r = 0; r < regionTabs.length; r++) {
        regionTabs[r].addEventListener('click', function () {
            // Tüm bölge sekmelerinin aktif sınıfını kaldır
            for (var rt = 0; rt < regionTabs.length; rt++) {
                regionTabs[rt].classList.remove('active');
            }
            // Tıklanan bölgeyi aktif yap
            this.classList.add('active');
        });
    }

    // ---------- TARİFİ YAZDIR ----------
    var printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', function () {
            window.print();
        });
    }

    // ---------- TÜM İLLERİ GÖSTER / GİZLE ----------
    var showMoreBtn = document.querySelector('.show-more-btn');
    if (showMoreBtn) {
        var cityGrid = document.querySelector('.city-grid');
        var allCities = cityGrid ? cityGrid.querySelectorAll('a') : [];
        var isExpanded = false;

        // Başlangıçta sadece ilk 16 ili göster
        for (var s = 16; s < allCities.length; s++) {
            allCities[s].style.display = 'none';
        }

        showMoreBtn.addEventListener('click', function () {
            isExpanded = !isExpanded;
            for (var s = 16; s < allCities.length; s++) {
                allCities[s].style.display = isExpanded ? '' : 'none';
            }
            this.textContent = isExpanded ? 'Daha az göster ▲' : 'Tüm illeri göster ▼';
        });
    }

    // ---------- ARAMA SAYFASI FİLTRE ----------
    var filterSelects = document.querySelectorAll('.filter-group select');
    for (var f = 0; f < filterSelects.length; f++) {
        filterSelects[f].addEventListener('change', function () {
            // Filtre değiştiğinde görsel geri bildirim (temel sürüm)
            this.style.borderColor = '#1a2332';
            var self = this;
            setTimeout(function () {
                self.style.borderColor = '#ddd';
            }, 1000);
        });
    }

    // ---------- ARAMA SAYFASINDA SORGUYU GÖSTER ----------
    var urlParams = new URLSearchParams(window.location.search);
    var queryParam = urlParams.get('q');

    var searchInput = document.querySelector('.search-page .search-bar input');
    if (searchInput && queryParam) {
        searchInput.value = queryParam;
    }

    var searchInfo = document.querySelector('.search-results-info strong');
    if (searchInfo && queryParam) {
        searchInfo.textContent = '"' + queryParam + '"';
    }

    // ---------- AKTİF SAYFA LİNKİNİ İŞARETLE ----------
    var currentPage = window.location.pathname.split('/').pop();
    var navLinks = document.querySelectorAll('.header-nav a');
    for (var n = 0; n < navLinks.length; n++) {
        var href = navLinks[n].getAttribute('href');
        if (href === currentPage) {
            navLinks[n].classList.add('active');
        }
    }

});

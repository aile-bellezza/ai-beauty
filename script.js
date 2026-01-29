/**
 * Aile Bellezza - AI Beauty Landing Page Scripts
 * パーティクルアニメーション、インタラクティブエフェクト、多言語対応
 */

// ============================================
// 多言語対応（i18n）
// ============================================

// 翻訳データ
const translations = {
    ja: {
        // ナビゲーション
        'nav.home': 'ホーム',
        'nav.gallery': 'ギャラリー',
        'nav.plans': 'プラン',
        'nav.support': 'サポート',

        // ヒーロー
        'hero.subtitle': '美しさの翼 — AIで描く幻想世界',
        'hero.description': '最先端のAI技術を駆使して、息をのむような美しいアートワークを創造しています。幻想的な世界観と繊細な表現力で、あなたの心に響く作品をお届けします。',
        'hero.btn_support': 'サポートする',
        'hero.btn_gallery': '作品を見る',
        'hero.stat_posts': '投稿作品',
        'hero.stat_possibilities': '創造の可能性',

        // アバウト
        'about.title': 'クリエイターについて',
        'about.card1_title': 'AIアートの創造',
        'about.card1_desc': '最新のAI技術とクリエイティブな感性を融合させ、唯一無二のアート作品を生み出しています。',
        'about.card2_title': '幻想的な世界観',
        'about.card2_desc': 'ファンタジー、サイバーパンク、エレガントなビジュアルを組み合わせた独自のスタイル。',
        'about.card3_title': '高品質なコンテンツ',
        'about.card3_desc': '細部までこだわった高解像度作品を定期的に公開。限定コンテンツも多数ご用意。',

        // ギャラリー
        'gallery.title': '作品ギャラリー',
        'gallery.subtitle': 'AIが紡ぐ幻想的なビジュアル',
        'gallery.btn_view_all': 'すべての作品を見る →',

        // プラン
        'plans.title': 'サポータープラン',
        'plans.subtitle': 'あなたのサポートが創作の力になります',
        'plans.fan_name': 'ファン',
        'plans.supporter_name': 'サポーター',
        'plans.per_month': '/月',
        'plans.popular': '人気',
        'plans.btn_choose': 'このプランを選ぶ',
        'plans.fan_f1': '✓ 全投稿へのアクセス',
        'plans.fan_f2': '✓ コミュニティ参加',
        'plans.fan_f3': '✓ 新作のいち早い閲覧',
        'plans.sup_f1': '✓ ファンプランの全特典',
        'plans.sup_f2': '✓ 高解像度ダウンロード',
        'plans.sup_f3': '✓ 限定コレクション',
        'plans.sup_f4': '✓ 制作過程の公開',
        'plans.vip_f1': '✓ すべての特典',
        'plans.vip_f2': '✓ VIP限定コンテンツ',
        'plans.vip_f3': '✓ リクエスト優先',
        'plans.vip_f4': '✓ 直接メッセージ',

        // CTA
        'cta.title': '創作の旅に参加しませんか？',
        'cta.description': 'サポーターになって、限定コンテンツや舞台裏をお楽しみください。',
        'cta.btn_support': '今すぐサポートする'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.plans': 'Plans',
        'nav.support': 'Support',

        // Hero
        'hero.subtitle': 'Wings of Beauty — Fantasy Worlds by AI',
        'hero.description': 'Creating breathtaking artworks using cutting-edge AI technology. Delivering works that touch your heart with fantastical worldviews and delicate expression.',
        'hero.btn_support': 'Support Now',
        'hero.btn_gallery': 'View Works',
        'hero.stat_posts': 'Posts',
        'hero.stat_possibilities': 'Creative Possibilities',

        // About
        'about.title': 'About the Creator',
        'about.card1_title': 'AI Art Creation',
        'about.card1_desc': 'Combining the latest AI technology with creative sensibility to produce one-of-a-kind artworks.',
        'about.card2_title': 'Fantastical Worldview',
        'about.card2_desc': 'A unique style blending fantasy, cyberpunk, and elegant visuals.',
        'about.card3_title': 'Premium Content',
        'about.card3_desc': 'Regularly publishing high-resolution works with attention to detail. Exclusive content also available.',

        // Gallery
        'gallery.title': 'Art Gallery',
        'gallery.subtitle': 'Fantastical Visuals Woven by AI',
        'gallery.btn_view_all': 'View All Works →',

        // Plans
        'plans.title': 'Membership Plans',
        'plans.subtitle': 'Your support fuels my creativity',
        'plans.fan_name': 'Fan',
        'plans.supporter_name': 'Supporter',
        'plans.per_month': '/mo',
        'plans.popular': 'Popular',
        'plans.btn_choose': 'Choose This Plan',
        'plans.fan_f1': '✓ Access to all posts',
        'plans.fan_f2': '✓ Community access',
        'plans.fan_f3': '✓ Early access to new works',
        'plans.sup_f1': '✓ All Fan benefits',
        'plans.sup_f2': '✓ High-resolution downloads',
        'plans.sup_f3': '✓ Exclusive collections',
        'plans.sup_f4': '✓ Behind-the-scenes content',
        'plans.vip_f1': '✓ All benefits',
        'plans.vip_f2': '✓ VIP-exclusive content',
        'plans.vip_f3': '✓ Priority requests',
        'plans.vip_f4': '✓ Direct messages',

        // CTA
        'cta.title': 'Join the Creative Journey?',
        'cta.description': 'Become a supporter and enjoy exclusive content and behind-the-scenes access.',
        'cta.btn_support': 'Support Now'
    }
};

// 言語切り替えシステム
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'ja';
        this.init();
    }

    init() {
        // 言語ボタンのイベントリスナー
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.setLanguage(lang);
            });
        });

        // 初期言語を適用
        this.setLanguage(this.currentLang);
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);

        // ボタンのアクティブ状態を更新
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // HTML lang属性を更新
        document.documentElement.lang = lang;

        // 翻訳を適用
        this.applyTranslations();
    }

    applyTranslations() {
        const langData = translations[this.currentLang];

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (langData[key]) {
                el.textContent = langData[key];
            }
        });
    }
}

// ============================================
// ヒーロースライドショー
// ============================================
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.hero-slide');
        this.dots = document.querySelectorAll('.slide-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.intervalTime = 5000; // 5秒間隔

        if (this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        // ドットクリックイベント
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetInterval();
            });
        });

        // 自動スライド開始
        this.startAutoSlide();

        // マウスホバー時は自動スライド停止
        const slider = document.querySelector('.hero-slideshow');
        if (slider) {
            slider.addEventListener('mouseenter', () => this.stopAutoSlide());
            slider.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }

    goToSlide(index) {
        // 現在のスライドを非アクティブに
        this.slides[this.currentSlide].classList.remove('active');
        this.dots[this.currentSlide].classList.remove('active');

        // 新しいスライドをアクティブに
        this.currentSlide = index;
        this.slides[this.currentSlide].classList.add('active');
        this.dots[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(next);
    }

    startAutoSlide() {
        this.slideInterval = setInterval(() => this.nextSlide(), this.intervalTime);
    }

    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }

    resetInterval() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

// パーティクルシステム
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: null, y: null, radius: 150 };

        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        this.resize();

        // パーティクルを生成
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(new Particle(this.canvas));
        }
    }

    bindEvents() {
        // リサイズイベント
        window.addEventListener('resize', () => this.resize());

        // マウス追従
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // パーティクルを更新・描画
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].update(this.canvas, this.mouse);
            this.particles[i].draw(this.ctx);
        }

        // パーティクル間の接続線を描画
        this.connectParticles();

        requestAnimationFrame(() => this.animate());
    }

    connectParticles() {
        const maxDistance = 120;

        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    const opacity = (1 - distance / maxDistance) * 0.5;
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }
    }
}

// パーティクルクラス
class Particle {
    constructor(canvas) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getRandomColor();
    }

    getRandomColor() {
        const colors = [
            'rgba(168, 85, 247, 0.8)',  // パープル
            'rgba(236, 72, 153, 0.8)',   // ピンク
            'rgba(6, 182, 212, 0.8)',    // シアン
            'rgba(79, 172, 254, 0.8)'    // ブルー
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    update(canvas, mouse) {
        // 位置を更新
        this.x += this.speedX;
        this.y += this.speedY;

        // マウスとのインタラクション
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const force = (mouse.radius - distance) / mouse.radius;
                const angle = Math.atan2(dy, dx);
                this.x -= Math.cos(angle) * force * 2;
                this.y -= Math.sin(angle) * force * 2;
            }
        }

        // 境界チェック
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// スクロールアニメーション（強化版）
class ScrollAnimator {
    constructor() {
        // 対象要素を拡大
        this.elements = document.querySelectorAll(
            '.glass-card, .section-header, .gallery-item, .plan-card, .stat-item, .hero-buttons, .cta-content'
        );
        this.init();
    }

    init() {
        // Intersection Observerを設定
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -80px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // スタッガードアニメーション用の遅延を計算
                    const delay = this.getStaggerDelay(entry.target);
                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                }
            });
        }, options);

        this.elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), 
                                   transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`;
            observer.observe(el);
        });
    }

    // スタッガード遅延を計算（同じ親内の要素に遅延を適用）
    getStaggerDelay(element) {
        const parent = element.parentElement;
        const siblings = parent.querySelectorAll('.glass-card, .gallery-item, .plan-card, .stat-item');
        const index = Array.from(siblings).indexOf(element);
        return index * 100; // 100msずつ遅延
    }
}

// アニメーションクラスを追加するスタイル
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// モバイルメニュー
class MobileMenu {
    constructor() {
        this.btn = document.querySelector('.mobile-menu-btn');
        this.nav = document.querySelector('.nav-links');
        this.isOpen = false;

        if (this.btn && this.nav) {
            // クリックイベント
            this.btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle();
            });

            // タッチイベント（モバイル用）
            this.btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.toggle();
            });

            // ナビリンクをクリックしたらメニューを閉じる
            this.nav.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (this.isOpen) {
                        this.close();
                    }
                });
            });

            // 初期状態を設定（CSSクラスを使用）
            this.nav.classList.add('mobile-menu-nav');
        }
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.isOpen = true;
        this.nav.classList.add('mobile-open');
        this.btn.classList.add('active');
        this.btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.isOpen = false;
        this.nav.classList.remove('mobile-open');
        this.btn.classList.remove('active');
        this.btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
}

// スムーススクロール
class SmoothScroll {
    constructor() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            // クリックとタッチの両方に対応
            const handleNavigation = (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    // モバイルメニューが開いている場合は閉じる
                    if (window.mobileMenu && window.mobileMenu.isOpen) {
                        window.mobileMenu.close();
                    }

                    // 少し遅延させてからスクロール（メニューが閉じるのを待つ）
                    setTimeout(() => {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            };

            link.addEventListener('click', handleNavigation);

            // モバイル用タッチイベント
            link.addEventListener('touchend', (e) => {
                // 外部リンクはスキップ
                const href = link.getAttribute('href');
                if (!href.startsWith('#')) return;

                e.preventDefault();
                handleNavigation(e);
            });
        });
    }
}

// ナビバーのスクロールエフェクト
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;

        window.addEventListener('scroll', () => this.onScroll());
    }

    onScroll() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            this.navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            this.navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }

        this.lastScroll = currentScroll;
    }
}

// アクティブナビゲーション（現在のセクションをハイライト）
class ActiveNav {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

        // スクロールイベントでアクティブ状態を更新
        window.addEventListener('scroll', () => this.updateActiveLink());

        // 初期状態を設定
        this.updateActiveLink();
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 150; // ヘッダーの高さを考慮

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // すべてのリンクからアクティブクラスを削除
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // 現在のセクションに対応するリンクをアクティブに
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
}

// コンテンツローダー（JSONから読み込み）
class ContentLoader {
    constructor() {
        this.loadContent();
    }

    async loadContent() {
        try {
            const response = await fetch('data/content.json');
            const data = await response.json();

            // 投稿数を更新
            this.updateStats(data.stats);

            // ギャラリーを更新
            this.updateGallery(data.gallery);

            console.log('📦 コンテンツをJSONから読み込みました');
        } catch (error) {
            console.log('ℹ️ content.jsonが見つかりません。デフォルト表示を使用します。');
        }
    }

    updateStats(stats) {
        if (!stats) return;

        // 投稿数を更新
        const postNumber = document.querySelector('.stat-number');
        if (postNumber && stats.posts) {
            postNumber.textContent = stats.posts;
        }
    }

    updateGallery(gallery) {
        if (!gallery || gallery.length === 0) return;

        const galleryGrid = document.querySelector('.gallery-grid');
        if (!galleryGrid) return;

        // ギャラリーをクリアして再構築
        galleryGrid.innerHTML = '';

        gallery.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item glass-card';
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="gallery-image">
                <div class="gallery-overlay">
                    <span class="gallery-title">${item.title}</span>
                </div>
            `;
            galleryGrid.appendChild(galleryItem);
        });
    }
}

// ============================================
// ギャラリーフィルター（完全書き直し版）
// ============================================
class GalleryFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.galleryGrid = document.querySelector('.gallery-grid');
        this.showMoreBtn = document.getElementById('show-more-btn');
        this.showMoreContainer = document.querySelector('.gallery-show-more');
        this.isExpanded = false;
        this.currentFilter = 'all';

        if (this.filterBtns.length > 0 && this.galleryGrid) {
            this.init();
        }
    }

    init() {
        console.log('🎨 GalleryFilter初期化');

        // フィルターボタンにイベントリスナーを設定
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.currentFilter = btn.dataset.filter;
                console.log('🔍 フィルター:', this.currentFilter);
                this.applyFilter();
                this.setActiveButton(btn);
            });
        });

        // もっと見るボタン
        if (this.showMoreBtn) {
            this.showMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('📖 もっと見るクリック');
                this.toggleShowMore();
            });
        }
    }

    applyFilter() {
        const items = this.galleryGrid.querySelectorAll('.gallery-item');

        items.forEach(item => {
            const category = item.dataset.category;
            const isHiddenByDefault = item.classList.contains('gallery-hidden');
            const matchesFilter = (this.currentFilter === 'all' || category === this.currentFilter);

            if (matchesFilter) {
                // フィルターにマッチ
                item.classList.remove('hidden');
                // gallery-hiddenかつ非展開なら非表示のまま
                if (isHiddenByDefault && !this.isExpanded) {
                    item.style.display = 'none';
                } else {
                    item.style.display = '';
                }
            } else {
                // フィルターにマッチしない → 非表示
                item.classList.add('hidden');
                item.style.display = 'none';
            }
        });

        this.updateShowMoreButton();
    }

    setActiveButton(activeBtn) {
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        activeBtn.classList.add('active');
    }

    toggleShowMore() {
        this.isExpanded = !this.isExpanded;
        console.log('展開状態:', this.isExpanded);

        const hiddenItems = this.galleryGrid.querySelectorAll('.gallery-item.gallery-hidden');

        hiddenItems.forEach(item => {
            const category = item.dataset.category;
            const matchesFilter = (this.currentFilter === 'all' || category === this.currentFilter);

            if (this.isExpanded && matchesFilter) {
                item.style.display = '';
                item.classList.add('gallery-shown');
            } else {
                item.style.display = 'none';
                item.classList.remove('gallery-shown');
            }
        });

        // ボタンテキスト更新
        if (this.showMoreBtn) {
            const btnText = this.showMoreBtn.querySelector('span:not(.btn-icon)');
            const btnIcon = this.showMoreBtn.querySelector('.btn-icon');
            if (btnText) btnText.textContent = this.isExpanded ? '閉じる' : 'もっと見る';
            if (btnIcon) btnIcon.textContent = this.isExpanded ? '↑' : '↓';
        }
    }

    updateShowMoreButton() {
        if (!this.showMoreContainer) return;

        const hiddenItems = this.galleryGrid.querySelectorAll('.gallery-item.gallery-hidden');
        let hasMatchingHidden = false;

        hiddenItems.forEach(item => {
            const category = item.dataset.category;
            if (this.currentFilter === 'all' || category === this.currentFilter) {
                hasMatchingHidden = true;
            }
        });

        this.showMoreContainer.style.display = hasMatchingHidden ? '' : 'none';
    }
}

// ============================================
// ライトボックス
// ============================================
class Lightbox {
    constructor() {
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImage = document.querySelector('.lightbox-image');
        this.lightboxCaption = document.querySelector('.lightbox-caption');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.currentIndex = 0;
        this.images = [];

        if (this.lightbox && this.galleryItems.length > 0) {
            this.init();
        }
    }

    init() {
        // 画像配列を作成
        this.galleryItems.forEach((item, index) => {
            const img = item.querySelector('.gallery-image');
            const title = item.querySelector('.gallery-title');
            this.images.push({
                src: img.src,
                alt: img.alt,
                title: title ? title.textContent : ''
            });

            // クリックイベント
            item.addEventListener('click', () => this.open(index));
        });

        // 閉じるボタン
        const closeBtn = document.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        // 前後ボタン
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
        if (prevBtn) prevBtn.addEventListener('click', () => this.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => this.next());

        // 背景クリックで閉じる
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.close();
            }
        });

        // キーボード操作
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.close();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
                case 'ArrowRight':
                    this.next();
                    break;
            }
        });
    }

    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('active');
        this.lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('active');
        this.lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    prev() {
        // 非表示でないアイテムのみを対象に
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    updateImage() {
        const image = this.images[this.currentIndex];
        this.lightboxImage.src = image.src;
        this.lightboxImage.alt = image.alt;
        this.lightboxCaption.textContent = image.title;
    }
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // ローディング画面を非表示にする
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // ローディングアニメーション完了後に非表示
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 1500); // 1.5秒後にフェードアウト
    }

    // パーティクルシステムを初期化
    const canvas = document.getElementById('particles');
    if (canvas) {
        new ParticleSystem(canvas);
    }

    // 各コンポーネントを初期化
    new ScrollAnimator();
    window.mobileMenu = new MobileMenu(); // グローバルに保存
    new SmoothScroll();
    new NavbarScroll();
    new ActiveNav(); // アクティブナビゲーション
    new ContentLoader(); // JSONからコンテンツを読み込み
    new I18n(); // 多言語対応システム
    new HeroSlider(); // ヒーロースライドショー
    new GalleryFilter(); // ギャラリーフィルター
    new Lightbox(); // ライトボックス

    console.log('✨ Aile Bellezza Landing Page Initialized');
});

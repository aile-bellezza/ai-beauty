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

        // 比較
        'comparison.title': '会員限定のメリット',

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

        // Comparison
        'comparison.title': 'Member Benefits',

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

// ============================================
// ショッピングカートシステム
// ============================================
class CartSystem {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.cartDrawer = document.querySelector('.cart-drawer');
        this.cartOverlay = document.querySelector('.cart-overlay');
        this.cartItemsContainer = document.querySelector('.cart-items');
        this.totalElement = document.querySelector('.total-amount');
        this.badgeElement = document.querySelector('.cart-badge');
        this.isOpen = false;

        this.init();
    }

    init() {
        // カートボタン（開閉）
        document.querySelector('.cart-btn').addEventListener('click', () => this.toggle());
        document.querySelector('.cart-close').addEventListener('click', () => this.close());
        this.cartOverlay.addEventListener('click', () => this.close());

        // 「買い物を続ける」ボタン
        document.body.addEventListener('click', (e) => {
            if (e.target.classList.contains('continue-shopping')) {
                this.close();
            }
        });

        // 初期表示更新
        this.updateUI();

        // カート追加イベントのリスナー（動的要素対応のためdocumentに委譲）
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart-btn');
            if (btn) {
                const product = {
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: parseInt(btn.dataset.price),
                    image: btn.dataset.image
                };
                this.addItem(product);
                // フィードバック（ボタンのアニメーションなど）
                this.animateButton(btn);
            }
        });

        // 削除ボタンイベント
        this.cartItemsContainer.addEventListener('click', (e) => {
            if (e.target.closest('.remove-item')) {
                const id = e.target.closest('.remove-item').dataset.id;
                this.removeItem(id);
            }
        });
    }

    toggle() {
        if (this.isOpen) this.close();
        else this.open();
    }

    open() {
        this.cartDrawer.classList.add('active');
        this.cartOverlay.classList.add('active');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.cartDrawer.classList.remove('active');
        this.cartOverlay.classList.remove('active');
        this.isOpen = false;
        document.body.style.overflow = '';
    }

    addItem(product) {
        // すでに存在するかチェック
        const existingItem = this.cart.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }
        this.save();
        this.updateUI();
        this.open(); // 追加したらカートを開く
    }

    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.save();
        this.updateUI();
    }

    save() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    updateUI() {
        // バッジ更新
        const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.badgeElement.textContent = totalCount;
        this.badgeElement.classList.toggle('visible', totalCount > 0);

        // カート内アイテム描画
        if (this.cart.length === 0) {
            this.cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <p>カートは空です</p>
                    <button class="btn btn-secondary continue-shopping">買い物を続ける</button>
                </div>
            `;
            this.totalElement.textContent = '$0';
            return;
        }

        this.cartItemsContainer.innerHTML = this.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">$${item.price} x ${item.quantity}</div>
                </div>
                <button class="remove-item" data-id="${item.id}" aria-label="削除">&times;</button>
            </div>
        `).join('');

        // 合計金額計算
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.totalElement.textContent = `$${total}`;
    }

    animateButton(btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Added';
        btn.classList.add('added');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('added');
        }, 2000);
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

            // ギャラリーを更新 (JSONにカテゴリ情報がないため、HTMLの記述を優先)
            // this.updateGallery(data.gallery);

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
// ギャラリーシェア（カード上のボタン）
// ============================================
class GalleryShare {
    constructor() {
        this.items = document.querySelectorAll('.gallery-item');
        if (this.items.length > 0) {
            this.init();
        }
    }

    init() {
        // 各アイテムにシェアボタンを注入
        this.items.forEach(item => {
            const overlay = item.querySelector('.gallery-overlay');
            if (overlay) {
                this.injectShareButtons(overlay, item);
            }
        });

        // イベントリスナー（委譲）
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.gallery-share-btn');
            if (btn) {
                e.preventDefault();
                e.stopPropagation(); // Lightboxが開かないようにする
                this.handleShare(btn);
            }
        });
    }

    injectShareButtons(overlay, item) {
        // 既存のボタンがあれば追加しない
        if (overlay.querySelector('.gallery-actions')) return;

        const title = item.querySelector('.gallery-title')?.textContent || '';
        // 画像パス解決（相対パスを絶対パスにするか、そのまま使うか）
        // ここではOGP用ではなく、テキストシェアの一部として扱うため、ページURLをメインにする

        const actionsHtml = `
            <div class="gallery-actions">
                <button class="gallery-share-btn" data-platform="instagram" aria-label="Visit Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </button>
                <button class="gallery-share-btn" data-platform="threads" aria-label="Visit Threads">
                    <svg width="18" height="18" viewBox="0 0 192 192" fill="currentColor">
                        <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/>
                    </svg>
                </button>
            </div>
        `;

        overlay.insertAdjacentHTML('beforeend', actionsHtml);
    }

    handleShare(btn) {
        const platform = btn.dataset.platform;

        if (platform === 'instagram') {
            window.open('https://www.instagram.com/aile_bellezza/?locale=ja_JP', '_blank');
        } else if (platform === 'threads') {
            window.open('https://www.threads.net/@take_ai_le?hl=ja', '_blank');
        }
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
        // ロックされたアイテムとロックされていないアイテムを分離
        const allItems = Array.from(this.galleryItems);
        const unlockedItems = allItems.filter(item => !item.classList.contains('locked'));

        // ロックされたアイテムにはPatreon誘導イベントを設定
        allItems.filter(item => item.classList.contains('locked')).forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open('https://www.patreon.com/aile_bellezza', '_blank');
            });
        });

        // 画像配列を作成（ロックされていないものだけ）
        unlockedItems.forEach((item, index) => {
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

        // シェアボタン
        this.initShareButtons();
    }

    initShareButtons() {
        const shareButtons = document.querySelectorAll('.share-btn');
        shareButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const platform = btn.dataset.platform;
                this.share(platform);
            });
        });
    }

    share(platform) {
        const currentImage = this.images[this.currentIndex];
        const pageUrl = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(`${currentImage.title} | Aile Bellezza`);

        switch (platform) {
            case 'instagram':
                window.open('https://www.instagram.com/aile_bellezza/?locale=ja_JP', '_blank');
                break;
            case 'threads':
                window.open('https://www.threads.net/@take_ai_le?hl=ja', '_blank');
                break;
            case 'copy':
                navigator.clipboard.writeText(window.location.href).then(() => {
                    const copyBtn = document.querySelector('.share-copy');
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.classList.remove('copied');
                    }, 2000);
                });
                break;
        }
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
    // new ContentLoader(); // JSONからコンテンツを読み込み (HTMLの静的データを優先するため無効化)
    new I18n(); // 多言語対応システム
    new HeroSlider(); // ヒーロースライドショー
    new GalleryFilter(); // ギャラリーフィルター
    new GalleryShare(); // ギャラリーシェアボタン
    new Lightbox(); // ライトボックス
    new CartSystem(); // カートシステム
    new NewsletterForm(); // ニュースレターフォーム
    new MouseStalker(); // マウスストーカー
    new FloatingCTA(); // フローティングCTA

    console.log('✨ Aile Bellezza Landing Page Initialized');
});

// ============================================
// マウスストーカー（光の粒子）
// ============================================
class MouseStalker {
    constructor() {
        // PCのみ有効（タッチデバイスでは無効）
        if (window.matchMedia('(hover: hover)').matches) {
            this.init();
        }
    }

    init() {
        this.cursor = document.createElement('div');
        this.cursor.classList.add('cursor-stalker');
        document.body.appendChild(this.cursor);

        this.lastX = 0;
        this.lastY = 0;

        document.addEventListener('mousemove', (e) => this.onMouseMove(e));

        // リンクホバー時のエフェクト拡大（オプション）
        // const links = document.querySelectorAll('a, button');
        // links.forEach(link => {
        //     link.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
        //     link.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        // });
    }

    onMouseMove(e) {
        this.cursor.style.left = e.clientX + 'px';
        this.cursor.style.top = e.clientY + 'px';

        // 勢いがある時だけパーティクル生成
        const dist = Math.hypot(e.clientX - this.lastX, e.clientY - this.lastY);
        if (dist > 5) {
            this.createParticle(e.clientX, e.clientY);
        }

        this.lastX = e.clientX;
        this.lastY = e.clientY;
    }

    createParticle(x, y) {
        if (Math.random() > 0.2) return; // 生成頻度調整

        const particle = document.createElement('div');
        particle.classList.add('cursor-particle');
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        document.body.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// ============================================
// ニュースレターフォーム
// ============================================
class NewsletterForm {
    constructor() {
        this.form = document.getElementById('newsletter-form');
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(this.form);
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // 送信中の表示
        submitBtn.innerHTML = '<span>Sending...</span>';
        submitBtn.disabled = true;

        try {
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // 成功時
                this.showSuccess();
                this.form.reset();
            } else {
                // エラー時
                this.showError();
            }
        } catch (error) {
            console.error('Newsletter submission error:', error);
            this.showError();
        }

        // ボタンをリセット
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }

    showSuccess() {
        const successMsg = document.querySelector('.newsletter-success');
        if (successMsg) {
            successMsg.style.display = 'block';
            // 5秒後に非表示
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 5000);
        }
    }

    showError() {
        alert('送信に失敗しました。もう一度お試しください。');
    }
}

// ============================================
// フローティングCTA
// ============================================
class FloatingCTA {
    constructor() {
        this.cta = document.querySelector('.floating-cta');
        if (this.cta) {
            window.addEventListener('scroll', () => this.toggle());
            // 初期状態チェック
            this.toggle();
        }
    }

    toggle() {
        if (window.scrollY > 500) {
            this.cta.classList.add('visible');
        } else {
            this.cta.classList.remove('visible');
        }
    }
}

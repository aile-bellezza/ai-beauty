/**
 * Aile Bellezza - Patreon Landing Page Scripts
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
        'nav.support': 'Patreonで支援',

        // ヒーロー
        'hero.subtitle': '美しさの翼 — AIで描く幻想世界',
        'hero.description': '最先端のAI技術を駆使して、息をのむような美しいアートワークを創造しています。幻想的な世界観と繊細な表現力で、あなたの心に響く作品をお届けします。',
        'hero.btn_support': 'Patreonでサポート',
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
        'cta.description': 'Patreonでサポーターになって、限定コンテンツや舞台裏をお楽しみください。',
        'cta.btn_support': '今すぐPatreonで支援する'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.gallery': 'Gallery',
        'nav.plans': 'Plans',
        'nav.support': 'Support on Patreon',

        // Hero
        'hero.subtitle': 'Wings of Beauty — Fantasy Worlds by AI',
        'hero.description': 'Creating breathtaking artworks using cutting-edge AI technology. Delivering works that touch your heart with fantastical worldviews and delicate expression.',
        'hero.btn_support': 'Support on Patreon',
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
        'cta.description': 'Become a supporter on Patreon and enjoy exclusive content and behind-the-scenes access.',
        'cta.btn_support': 'Support on Patreon Now'
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

// スクロールアニメーション
class ScrollAnimator {
    constructor() {
        this.elements = document.querySelectorAll('.glass-card, .section-header');
        this.init();
    }

    init() {
        // Intersection Observerを設定
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, options);

        this.elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
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

        if (this.btn) {
            this.btn.addEventListener('click', () => this.toggle());
        }
    }

    toggle() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.nav.style.display = 'flex';
            this.nav.style.flexDirection = 'column';
            this.nav.style.position = 'absolute';
            this.nav.style.top = '100%';
            this.nav.style.left = '0';
            this.nav.style.right = '0';
            this.nav.style.background = 'rgba(10, 10, 15, 0.95)';
            this.nav.style.padding = '1rem';
            this.nav.style.backdropFilter = 'blur(20px)';
        } else {
            this.nav.style.display = 'none';
        }
    }
}

// スムーススクロール
class SmoothScroll {
    constructor() {
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
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

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // パーティクルシステムを初期化
    const canvas = document.getElementById('particles');
    if (canvas) {
        new ParticleSystem(canvas);
    }

    // 各コンポーネントを初期化
    new ScrollAnimator();
    new MobileMenu();
    new SmoothScroll();
    new NavbarScroll();
    new I18n(); // 多言語対応システム

    console.log('✨ Aile Bellezza Landing Page Initialized');
});

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 企业标签切换功能
    const companyTags = document.querySelectorAll('.company-tag');
    const companyPages = document.querySelectorAll('.company-page');

    companyTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const company = this.getAttribute('data-company');

            // 更新标签激活状态
            companyTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 切换页面显示
            companyPages.forEach(page => {
                page.classList.remove('active');
                if (page.id === company + '-page') {
                    page.classList.add('active');
                }
            });

            // 滚动到顶部
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // 维度标签切换功能
    const dimensionTabs = document.querySelectorAll('.dimension-tab');
    const dimensionContent = document.getElementById('dimension-content');

    dimensionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const dimension = this.getAttribute('data-dimension');

            // 更新标签激活状态
            dimensionTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 更新内容（添加淡入动画）
            dimensionContent.style.opacity = '0';
            dimensionContent.style.transform = 'translateY(10px)';

            setTimeout(() => {
                if (tuyaContent.dimensions[dimension]) {
                    dimensionContent.innerHTML = tuyaContent.dimensions[dimension].content;
                }

                // 恢复显示
                dimensionContent.style.transition = 'all 0.3s ease';
                dimensionContent.style.opacity = '1';
                dimensionContent.style.transform = 'translateY(0)';
            }, 150);
        });
    });

    // 时期卡片交互效果
    const periodCards = document.querySelectorAll('.period-card');

    periodCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击动画效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // 可以在这里添加展开详细内容的逻辑
            const period = this.getAttribute('data-period');
            console.log('点击了时期:', period);
        });

        // 鼠标进入效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        // 鼠标离开效果
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // 数据卡片悬停效果
    const dataCards = document.querySelectorAll('.data-card');

    dataCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const trend = this.querySelector('.data-trend');
            if (trend && trend.classList.contains('up')) {
                trend.style.transform = 'scale(1.2)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const trend = this.querySelector('.data-trend');
            if (trend) {
                trend.style.transform = '';
            }
        });
    });

    // 核心能力卡片交互效果
    const capabilityItems = document.querySelectorAll('.capability-item');

    capabilityItems.forEach(item => {
        item.addEventListener('click', function() {
            // 点击动画
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // 时间轴交互效果
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const year = this.querySelector('.timeline-year');
            year.style.background = 'linear-gradient(135deg, #00A068, #00B87B)';
        });

        item.addEventListener('mouseleave', function() {
            const year = this.querySelector('.timeline-year');
            year.style.background = 'linear-gradient(135deg, var(--primary-color), var(--primary-light))';
        });
    });

    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 135, 85, 0.3)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-md)';
        }

        lastScrollTop = scrollTop;
    });

    // 添加页面加载动画
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    // 响应式导航栏处理（移动端）
    function handleResponsiveNav() {
        const windowWidth = window.innerWidth;
        const navbarTitle = document.querySelector('.navbar-title');

        if (windowWidth < 768) {
            navbarTitle.style.fontSize = '18px';
        } else {
            navbarTitle.style.fontSize = '24px';
        }
    }

    // 初始化和窗口大小改变时执行
    handleResponsiveNav();
    window.addEventListener('resize', handleResponsiveNav);

    // 添加卡片进入视口动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    document.querySelectorAll('.period-card, .data-card, .capability-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    console.log('网站初始化完成');
});

// 小米生态链详情页通用交互脚本

// 维度标签切换功能
document.addEventListener('DOMContentLoaded', function() {
    const dimensionTabs = document.querySelectorAll('.dimension-tab');
    const dimensionContent = document.getElementById('dimension-content');

    // 默认加载第一个维度的内容
    if (dimensionTabs.length > 0 && dimensionContent && typeof dimensionContentData !== 'undefined') {
        const firstTab = dimensionTabs[0];
        const dimension = firstTab.dataset.dimension;
        loadDimensionContent(dimension);
    }

    dimensionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动状态
            dimensionTabs.forEach(t => t.classList.remove('active'));

            // 添加当前活动状态
            this.classList.add('active');

            // 获取选中的维度并加载内容
            const dimension = this.dataset.dimension;
            loadDimensionContent(dimension);
        });
    });
});

// 加载维度内容
function loadDimensionContent(dimension) {
    const dimensionContent = document.getElementById('dimension-content');
    if (dimensionContent && typeof dimensionContentData !== 'undefined') {
        const data = dimensionContentData[dimension];
        if (data) {
            dimensionContent.innerHTML = data.content;
        }
    }
}

// 卡片悬停效果
const periodCards = document.querySelectorAll('.period-card');
periodCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// 时间轴动画
const timelineItems = document.querySelectorAll('.timeline-item');
if (timelineItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// 数据卡片动画
const dataCards = document.querySelectorAll('.data-card');
if (dataCards.length > 0) {
    const dataObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });
    
    dataCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.4s ease ${index * 0.08}s`;
        dataObserver.observe(card);
    });
}

// 能力卡片动画
const capabilityItems = document.querySelectorAll('.capability-item');
if (capabilityItems.length > 0) {
    const capabilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.5 });
    
    capabilityItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.4s ease ${index * 0.08}s`;
        capabilityObserver.observe(item);
    });
}

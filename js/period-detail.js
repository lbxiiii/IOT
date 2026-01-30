// 专题页面通用交互逻辑

document.addEventListener('DOMContentLoaded', function() {
    const dimensionTabs = document.querySelectorAll('.dimension-tab');
    const dimensionContent = document.getElementById('dimension-content');

    // 获取当前页面对应的数据对象
    const currentScript = document.querySelector('script[src*="content.js"]');
    const scriptSrc = currentScript ? currentScript.src : '';

    let currentData;
    if (scriptSrc.includes('2014-2016')) {
        currentData = period20142016Data;
    } else if (scriptSrc.includes('2017-2019')) {
        currentData = period20172019Data;
    } else if (scriptSrc.includes('2020-2021')) {
        currentData = period20202021Data;
    } else if (scriptSrc.includes('2022-2026')) {
        currentData = period20222026Data;
    } else if (scriptSrc.includes('deep-analysis')) {
        currentData = deepAnalysisData;
    } else if (scriptSrc.includes('experience-reuse')) {
        currentData = experienceReuseData;
    }

    if (!currentData) {
        console.error('无法找到对应的数据对象');
        return;
    }

    dimensionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const dimension = this.getAttribute('data-dimension');

            // 更新标签激活状态
            dimensionTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            // 更新内容区域
            updateDimensionContent(dimension);
        });
    });

    function updateDimensionContent(dimension) {
        if (currentData[dimension]) {
            dimensionContent.style.opacity = '0';
            dimensionContent.style.transform = 'translateY(10px)';

            setTimeout(() => {
                dimensionContent.innerHTML = currentData[dimension];
                dimensionContent.style.opacity = '1';
                dimensionContent.style.transform = 'translateY(0)';
            }, 150);
        }
    }

    // 初始化显示第一个维度
    if (dimensionTabs.length > 0) {
        dimensionTabs[0].click();
    }
});

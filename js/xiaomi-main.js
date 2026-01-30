// 小米生态链主页面交互脚本

// 维度标签切换功能
document.addEventListener('DOMContentLoaded', function() {
    const dimensionTabs = document.querySelectorAll('.dimension-tab');
    const dimensionContent = document.getElementById('dimension-content');
    
    // 维度内容数据
    const xiaomiDimensionContent = {
        strategy: {
            title: "战略定位",
            content: `
                <h2>战略定位分析</h2>
                <p>小米生态链的核心战略定位是"参股不控股、赋能不替代"，通过投资专业团队，结合小米的品牌、渠道、供应链支持，快速打造爆款产品。</p>
                
                <h3>核心战略理念</h3>
                <ul>
                    <li><strong>参股不控股</strong>：小米通常对生态链公司持股20%左右，最多不超过30%，让创业团队保持绝对控股权，激发创业活力。</li>
                    <li><strong>赋能不替代</strong>：小米为生态链企业提供品牌、渠道、供应链、技术等全方位赋能，但不替代其独立经营。</li>
                    <li><strong>手机核心战略</strong>：生态链以手机为核心向外辐射，形成"手机 + 周边产品 + 智能家居"的完整场景闭环。</li>
                </ul>
            `
        },
        technology: {
            title: "技术支撑",
            content: `
                <h2>技术支撑体系</h2>
                <p>小米向生态链企业输出了多项核心技术能力，包括MIUI系统、mIoT连接协议、AIoT云服务平台等，为生态链企业的快速成长提供了重要基础。</p>
                
                <h3>核心技术输出</h3>
                <ul>
                    <li><strong>MIUI系统与软件生态</strong>：开放MIUI技术接口，实现与小米手机的深度集成。</li>
                    <li><strong>mIoT连接协议</strong>：统一的通信标准，支持WiFi、蓝牙、ZigBee等多种连接方式。</li>
                    <li><strong>AIoT云服务平台</strong>：提供云端计算和存储服务，支持数据分析、智能决策等高级功能。</li>
                    <li><strong>工业设计标准</strong>：输出小米的设计理念和标准，形成统一的设计风格。</li>
                </ul>
            `
        },
        customer: {
            title: "客户分析",
            content: `
                <h2>客户分析</h2>
                <p>小米生态链的终端用户以25-35岁的年轻人为主体，主要集中在一二线城市，追求品质生活但价格敏感。</p>
                
                <h3>用户特征</h3>
                <ul>
                    <li><strong>年龄分布</strong>：25-35岁为主，其中70%为理工男。</li>
                    <li><strong>地域分布</strong>：主要集中在一二线城市。</li>
                    <li><strong>收入水平</strong>：月收入5000-15000元的中产阶级。</li>
                    <li><strong>消费特征</strong>：对性价比要求极高，对新技术、新产品充满兴趣。</li>
                </ul>
            `
        },
        profit: {
            title: "盈利模式",
            content: `
                <h2>盈利模式分析</h2>
                <p>小米生态链采用多维度盈利体系，包括硬件销售利润、服务收入、流量变现和投资收益。</p>
                
                <h3>盈利特点</h3>
                <ul>
                    <li><strong>薄利多销</strong>：通过规模效应和供应链优势，保持合理的硬件利润率。</li>
                    <li><strong>服务收入</strong>：基于设备的增值服务，如数据分析、订阅服务等。</li>
                    <li><strong>投资收益</strong>：通过股权增值获得投资收益。</li>
                    <li><strong>生态协同</strong>：产品之间形成协同效应，提升用户生命周期价值。</li>
                </ul>
            `
        },
        risk: {
            title: "风险管控",
            content: `
                <h2>风险管控体系</h2>
                <p>小米建立了完善的风险管控机制，包括投资风险控制、产品质量控制和品牌风险管控。</p>
                
                <h3>管控措施</h3>
                <ul>
                    <li><strong>分散投资策略</strong>：通过多品类布局降低风险。</li>
                    <li><strong>严格品控标准</strong>：每个产品都必须通过小米内部实验室的多项测试。</li>
                    <li><strong>品牌授权控制</strong>：严格管控"小米"品牌的使用。</li>
                    <li><strong>质量追溯机制</strong>：建立完善的产品质量追溯机制。</li>
                </ul>
            `
        },
        organization: {
            title: "组织能力",
            content: `
                <h2>组织能力分析</h2>
                <p>小米生态链的成功离不开其强大的组织能力支撑，包括专业化团队建设、赋能体系构建等。</p>
                
                <h3>核心能力</h3>
                <ul>
                    <li><strong>刘德的领导作用</strong>：提供方向指引和战略决策。</li>
                    <li><strong>专业化团队</strong>：具备投资、技术、市场等多方面经验。</li>
                    <li><strong>快速决策机制</strong>：能够在短时间内完成投资决策。</li>
                    <li><strong>全面赋能</strong>：提供产品设计、供应链、营销等全方位支持。</li>
                </ul>
            `
        },
        investment: {
            title: "资金投入",
            content: `
                <h2>资金投入分析</h2>
                <p>小米对生态链的资金投入具有明显的阶段性特征，初期探索阶段投资规模较小，快速扩张阶段加大投资力度。</p>
                
                <h3>投资特点</h3>
                <ul>
                    <li><strong>精准投资</strong>：选择具有强大技术实力的企业进行投资。</li>
                    <li><strong>资金配套</strong>：投资不仅仅是资金，还包括资源配套。</li>
                    <li><strong>阶段投入</strong>：根据企业发展阶段分阶段投入资金。</li>
                    <li><strong>严格控制节奏</strong>：确保每笔投资都能产生预期效果。</li>
                </ul>
            `
        },
        empowerment: {
            title: "生态赋能",
            content: `
                <h2>生态赋能体系</h2>
                <p>小米为生态链企业提供了全方位的赋能支持，包括品牌赋能、渠道赋能、技术赋能等。</p>
                
                <h3>赋能内容</h3>
                <ul>
                    <li><strong>品牌赋能</strong>：小米品牌提供强大的品牌背书。</li>
                    <li><strong>渠道赋能</strong>：小米商城、小米之家等线上线下渠道。</li>
                    <li><strong>技术赋能</strong>：开放技术平台，提供技术指导和培训。</li>
                    <li><strong>供应链赋能</strong>：共享供应链资源，降低采购成本。</li>
                </ul>
            `
        },
        management: {
            title: "管理机制",
            content: `
                <h2>管理机制分析</h2>
                <p>小米生态链在管理机制上进行了创新，形成了"参股不控股"的管理模式。</p>
                
                <h3>管理特点</h3>
                <ul>
                    <li><strong>股权结构设计</strong>：小米持股20%左右，创业团队保持控股权。</li>
                    <li><strong>协同管理</strong>：产品定义、供应链、营销等方面的协同。</li>
                    <li><strong>标准化管理</strong>：统一的品质标准、设计标准、服务标准。</li>
                    <li><strong>经营自主权</strong>：生态链企业保持独立经营。</li>
                </ul>
            `
        },
        product: {
            title: "产品矩阵",
            content: `
                <h2>产品矩阵分析</h2>
                <p>小米生态链构建了丰富的产品矩阵，包括移动电源、手环、空气净化器、路由器等。</p>
                
                <h3>核心产品</h3>
                <ul>
                    <li><strong>小米移动电源</strong>：69元10400mAh，现象级爆品。</li>
                    <li><strong>小米手环</strong>：79元，30天续航，销量超过2亿台。</li>
                    <li><strong>空气净化器</strong>：高性价比，快速占领市场。</li>
                    <li><strong>智能家居产品</strong>：路由器、插座、灯具等。</li>
                </ul>
            `
        },
        globalization: {
            title: "全球化",
            content: `
                <h2>全球化布局</h2>
                <p>小米生态链已经开始布局全球化，进入东南亚、欧洲等国际市场。</p>
                
                <h3>国际布局</h3>
                <ul>
                    <li><strong>东南亚市场</strong>：印度、印尼等市场取得成功。</li>
                    <li><strong>欧洲市场</strong>：开始进入欧洲市场。</li>
                    <li><strong>全球供应链</strong>：与全球顶级供应商建立合作关系。</li>
                    <li><strong>本地化策略</strong>：针对不同市场进行本地化调整。</li>
                </ul>
            `
        },
        competitive: {
            title: "竞争优势",
            content: `
                <h2>核心竞争力分析</h2>
                <p>小米生态链形成了多个核心竞争优势，包括模式优势、资源优势、能力优势等。</p>
                
                <h3>竞争优势</h3>
                <ul>
                    <li><strong>模式优势</strong>：投资+赋能模式，快速扩张，低成本试错。</li>
                    <li><strong>资源优势</strong>：品牌、渠道、供应链、用户等全方位资源。</li>
                    <li><strong>能力优势</strong>：产品定义、供应链整合、营销、生态协同等能力。</li>
                    <li><strong>与竞品对比</strong>：相比360、阿里等竞品，具有明显的差异化优势。</li>
                </ul>
            `
        }
    };
    
    // 默认加载第一个维度的内容
    if (dimensionTabs.length > 0 && dimensionContent) {
        const firstTab = dimensionTabs[0];
        const dimension = firstTab.dataset.dimension;
        loadContent(dimension);
    }
    
    dimensionTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // 移除所有活动状态
            dimensionTabs.forEach(t => t.classList.remove('active'));
            
            // 添加当前活动状态
            this.classList.add('active');
            
            // 加载对应内容
            const dimension = this.dataset.dimension;
            loadContent(dimension);
        });
    });
    
    function loadContent(dimension) {
        const data = xiaomiDimensionContent[dimension];
        if (data) {
            dimensionContent.innerHTML = data.content;
        }
    }
});

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

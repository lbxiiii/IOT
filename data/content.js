// 涂鸦智能内容数据
const tuyaContent = {
    // 分析维度内容
    dimensions: {
        strategy: {
            title: "顶层战略与定位",
            content: `
                <h3>顶层战略与定位</h3>
                <h4>战略演进历程</h4>
                <p>涂鸦智能的战略发展经历了四个关键阶段，每个阶段都有明确的核心定位和战略目标：</p>
                <ul>
                    <li><strong>2014-2016年：双线并进探索期</strong> - 从"工具型IoT方案商"定位出发，通过双线并进的方式探索硬件和平台两个方向，最终确定专注平台的发展路径</li>
                    <li><strong>2017-2019年：开放PaaS平台期</strong> - 提出IoT OS战略，从技术驱动转向生态驱动，构建开放平台吸引开发者</li>
                    <li><strong>2020-2021年：规模优先扩张期</strong> - "规模优先、全球化提速"战略核心，快速抢占市场份额，成功上市</li>
                    <li><strong>2022-2026年：质量优先转型期</strong> - "从规模优先到质量优先"，聚焦优质客户，全面拥抱AI，实现首次GAAP盈利</li>
                </ul>
                <h4>战略调整的关键决策</h4>
                <p>早期智能音箱项目失败后，涂鸦及时调整战略，将资源聚焦于平台建设；全屋智能战略在执行过程中遇到挑战，通过优化产品线和市场策略进行修正；SaaS业务扩张过快后，采用更精准的客户筛选和投入策略。</p>
                <h4>战略定位评估</h4>
                <p>涂鸦智能的"技术中立"平台定位有效避免了与客户的直接竞争，"全球化"布局分散了市场风险，"AIoT"转型顺应了技术发展趋势，整体战略定位具有前瞻性和可持续性。</p>
            `
        },
        tech: {
            title: "技术支撑",
            content: `
                <h3>技术支撑</h3>
                <h4>技术架构演进</h4>
                <ul>
                    <li><strong>IoT Cloud阶段（2014-2016）</strong> - 基础云平台架构，支持设备连接和基础数据管理</li>
                    <li><strong>IoT OS阶段（2017-2019）</strong> - 引入操作系统概念，提供设备端到云端的一体化解决方案</li>
                    <li><strong>TuyaOS阶段（2020-2021）</strong> - 分层抽象架构，实现"一次开发，多端部署"</li>
                    <li><strong>TuyaOS+AI Agent阶段（2022-2026）</strong> - 全面集成GenAI能力，接入全球主流大模型</li>
                </ul>
                <h4>核心技术栈</h4>
                <ul>
                    <li><strong>设备端</strong> - TuyaOS、多种芯片平台支持（ESP32、STM32、RISC-V等）</li>
                    <li><strong>通信层</strong> - 支持MQTT、HTTP、WebSocket等多种协议</li>
                    <li><strong>云平台</strong> - 分布式架构、高可用设计、边缘计算支持</li>
                    <li><strong>AI引擎</strong> - TAPE自动生成引擎、Pegasus推荐引擎、FFC-link通信协议</li>
                </ul>
                <h4>关键技术突破</h4>
                <p>ESP8266模组成本从10美元压至5美元内；TAPE引擎实现APP自动化生成；Matter协议支持确保设备互操作性；366个Matter证书数量行业领先。</p>
                <h4>研发投入数据</h4>
                <p>研发人员占比73.8%，持续保持高研发投入，专利数量持续增长，在IoT、AI、边缘计算等领域形成技术壁垒。</p>
            `
        },
        market: {
            title: "流量获取与生态协同",
            content: `
                <h3>流量获取与生态协同</h3>
                <h4>流量获取策略演进</h4>
                <ul>
                    <li><strong>扫街式获客（2014-2016）</strong> - "百日百家计划"，主动拜访传统家电企业，积累首批客户</li>
                    <li><strong>平台化获客（2017-2019）</strong> - 通过开放平台吸引开发者自发入驻，实现指数级增长</li>
                    <li><strong>全球化获客（2020-2021）</strong> - 6大总部+7大数据中心，本地化运营团队深耕区域市场</li>
                    <li><strong>精准化获客（2022-2026）</strong> - 聚焦Premium优质客户，提升客户质量和盈利能力</li>
                </ul>
                <h4>客户增长曲线</h4>
                <p>从2016年的几十家客户，到2019年的18万家客户，再到2025年的5500+PaaS客户，涂鸦实现了从数量到质量的转变。海外客户占比从早期不足20%提升至83%，全球化成效显著。</p>
                <h4>生态协同举措</h4>
                <ul>
                    <li><strong>智商免费计划</strong> - 降低开发门槛，吸引更多中小开发者</li>
                    <li><strong>星云计划</strong> - 扶持66个品牌成长，提供资源和技术支持</li>
                    <li><strong>三大计划</strong> - 替芯计划、超级工厂计划、大航海计划，全方位赋能合作伙伴</li>
                </ul>
                <h4>合作伙伴体系</h4>
                <p>与芯片商（Espressif、Nordic、TI）、云服务商（AWS、Google Cloud、阿里云）、零售商、资本方（腾讯、宽带资本）建立深度合作关系，形成完整生态闭环。</p>
            `
        },
        platform: {
            title: "平台能力与护城河",
            content: `
                <h3>平台能力与护城河</h3>
                <h4>平台能力体系</h4>
                <ul>
                    <li><strong>标准化能力</strong> - 统一的开发规范、接口标准、认证体系，确保跨平台兼容</li>
                    <li><strong>规模化能力</strong> - 支持7200万台设备同时在线，处理能力行业领先</li>
                    <li><strong>生态能力</strong> - 162.2万开发者、9万+Powered by Tuya产品、220+国家覆盖</li>
                </ul>
                <h4>开发效率演进</h4>
                <p>从传统智能开发需要半年时间，到涂鸦平台只需15天，再到低代码开发仅需6小时，最后实现零代码开发，开发效率提升百倍以上。</p>
                <h4>护城河构建</h4>
                <ul>
                    <li><strong>技术壁垒</strong> - 完整的IoT平台技术栈，TAPE、TuyaOS等核心技术</li>
                    <li><strong>生态壁垒</strong> - 百万级开发者、千家级客户构成的庞大生态网络</li>
                    <li><strong>规模壁垒</strong> - 全球化布局、多数据中心支撑的规模优势</li>
                    <li><strong>客户壁垒</strong> - 世界500强、区域领先企业的深度绑定，转换成本高</li>
                </ul>
                <h4>竞争优势对比</h4>
                <p>vs阿里云IoT：技术中立、专注垂直场景；vs小米IoT：全球化程度高、生态开放；vs华为IoT：轻量化、快速开发。涂鸦在开放性、全球化、垂直场景深耕方面具有差异化优势。</p>
            `
        },
        developer: {
            title: "厂商/开发者技术赋能",
            content: `
                <h3>厂商/开发者技术赋能</h3>
                <h4>服务对象结构</h4>
                <ul>
                    <li><strong>世界500强企业</strong> - 长虹、康佳、格力等传统家电巨头，提供定制化解决方案</li>
                    <li><strong>区域领先企业</strong> - 各国当地头部品牌，提供标准化+本地化服务</li>
                    <li><strong>中小企业</strong> - 初创企业、传统制造业转型，提供低代码快速开发工具</li>
                </ul>
                <h4>赋能内容</h4>
                <ul>
                    <li><strong>工具赋能</strong> - 低代码开发平台、App自动化生成、SDK/API完整工具链</li>
                    <li><strong>平台赋能</strong> - 云平台、大数据分析、AI算法等基础能力开放</li>
                    <li><strong>服务赋能</strong> - 技术支持、培训认证、市场推广、供应链对接</li>
                </ul>
                <h4>赋能案例</h4>
                <ul>
                    <li><strong>长虹空调</strong> - 从传统家电到智能空调转型，3个月完成产品开发</li>
                    <li><strong>康佳家电</strong> - 全屋智能解决方案，覆盖多品类产品线</li>
                    <li><strong>超级猩猩</strong> - 智能健身房解决方案，提升用户体验和运营效率</li>
                    <li><strong>梦想加</strong> - 智能办公空间管理，实现空间智能化运营</li>
                </ul>
                <h4>开发者赋能体系</h4>
                <p>建立完整的培训体系（线上课程、线下工作坊）、认证体系（涂鸦认证开发者）、文档体系（中英文技术文档、SDK文档）、社区体系（开发者论坛、技术交流群）。</p>
            `
        },
        service: {
            title: "服务能力体系",
            content: `
                <h3>服务能力体系</h3>
                <h4>服务体系架构</h4>
                <ul>
                    <li><strong>基础服务</strong> - 7x24小时技术支持、标准API文档、SDK下载</li>
                    <li><strong>专业服务</strong> - 定制化开发、技术咨询、项目管理、测试认证</li>
                    <li><strong>增值服务</strong> - 市场推广、渠道对接、供应链金融、人才招聘</li>
                </ul>
                <h4>服务覆盖</h4>
                <p>覆盖220+国家和地区，服务5500+客户，从世界500强到中小企业，从传统制造业到新兴互联网企业，全方位覆盖IoT行业需求。</p>
                <h4>服务质量指标</h4>
                <ul>
                    <li><strong>服务可用性</strong> - 99.9%服务可用性保障，7大全球数据中心支撑</li>
                    <li><strong>响应时间</strong> - 工单平均响应时间<2小时，问题解决率>95%</li>
                    <li><strong>客户满意度</strong> - Premium客户续费率>90%，NPS评分>70</li>
                </ul>
                <h4>服务案例</h4>
                <ul>
                    <li><strong>智慧酒店</strong> - 为万豪、洲际等国际酒店集团提供智能化改造方案</li>
                    <li><strong>智慧社区</strong> - 覆盖1000+社区，提供门禁、安防、能源管理一体化方案</li>
                    <li><strong>智能制造</strong> - 帮助传统工厂实现设备智能化、数据可视化、预测性维护</li>
                </ul>
            `
        },
        global: {
            title: "全球化与合规",
            content: `
                <h3>全球化与合规</h3>
                <h4>全球化布局</h4>
                <ul>
                    <li><strong>6大总部</strong> - 中国、美国、日本、德国、印度、澳大利亚</li>
                    <li><strong>7大数据中心</strong> - 全球分布式部署，确保低延迟和高可用</li>
                    <li><strong>本地化运营</strong> - 各地区设立本地团队，深入了解本地市场需求</li>
                </ul>
                <h4>区域市场表现</h4>
                <p>海外收入占比83%，其中欧洲市场贡献1/3，北美市场增长最快，亚太市场稳健发展，新兴市场潜力巨大。全球化布局有效分散了单一市场风险。</p>
                <h4>合规体系建设</h4>
                <ul>
                    <li><strong>数据保护</strong> - GDPR、CCPA等全球46项数据保护法规合规</li>
                    <li><strong>产品认证</strong> - CE、FCC、CCC、UL等60+产品认证</li>
                    <li><strong>贸易合规</strong> - 各国进出口法规、关税政策合规</li>
                </ul>
                <h4>合规认证</h4>
                <p>通过ISO27001信息安全认证、SOC2 Type II认证、ISO9001质量管理体系认证，建立了完善的风险管理和内控体系。</p>
                <h4>全球化挑战</h4>
                <ul>
                    <li><strong>本地化运营</strong> - 文化差异、语言障碍、市场认知差异</li>
                    <li><strong>地缘政治</strong> - 中美贸易摩擦、数据跨境流动限制</li>
                    <li><strong>法律环境</strong> - 各国法律法规差异大，合规成本高</li>
                </ul>
            `
        },
        organization: {
            title: "组织架构与适配",
            content: `
                <h3>组织架构与适配</h3>
                <h4>组织架构演进</h4>
                <ul>
                    <li><strong>创业期（2014-2016）</strong> - 扁平化组织，创始人直接管理，快速决策</li>
                    <li><strong>扩张期（2017-2019）</strong> - 引入管理层级，建立部门化结构，适应规模增长</li>
                    <li><strong>上市公司（2020-2021）</strong> - 完善治理结构，设立董事会、独立董事，合规化运营</li>
                    <li><strong>优化期（2022-2026）</strong> - 人员精简，提升人效，区域化管理，灵活应变</li>
                </ul>
                <h4>核心管理层</h4>
                <p>4位创始人（王学集、林耀成、陈沛泓、杨懿）合作超过10年，形成稳定的领导核心。同时引入国际化人才，包括来自Google、Amazon等科技公司的资深工程师和管理者。</p>
                <h4>人员结构变化</h4>
                <ul>
                    <li><strong>总人数</strong> - 从早期的几十人增长到数千人，2022年后精简优化</li>
                    <li><strong>研发占比</strong> - 保持73.8%的研发人员占比，技术导向明显</li>
                    <li><strong>地域分布</strong> - 中国、美国、欧洲、日本、印度等地均衡分布</li>
                </ul>
                <h4>组织能力建设</h4>
                <ul>
                    <li><strong>跨部门协作</strong> - 建立项目制团队，快速响应客户需求</li>
                    <li><strong>项目管理</strong> - 敏捷开发方法论，快速迭代产品</li>
                    <li><strong>文化融合</strong> - 打造开放、创新、客户至上的企业文化</li>
                </ul>
                <h4>管理优化案例</h4>
                <p>上市后建立完善的ESG体系，区域化管理降低沟通成本，AI工具提升管理效率，人效较2年前提升3倍。</p>
            `
        },
        resource: {
            title: "资源整合",
            content: `
                <h3>资源整合</h3>
                <h4>资金资源</h4>
                <ul>
                    <li><strong>天使轮融资</strong> - 2014年，获得初始启动资金</li>
                    <li><strong>A轮融资</strong> - 2015年，获得千万级美元融资</li>
                    <li><strong>B轮融资</strong> - 2017年，获得2亿美元融资，估值突破10亿美元</li>
                    <li><strong>C轮融资</strong> - 2018年，获得2.2亿美元融资，估值接近30亿美元</li>
                    <li><strong>IPO</strong> - 2021年，纽交所上市，募资2.15亿美元，市值140亿美元</li>
                    <li><strong>港股双重上市</strong> - 2022年，港交所二次上市</li>
                </ul>
                <h4>技术资源</h4>
                <ul>
                    <li><strong>自研技术</strong> - TAPE引擎、TuyaOS、Pegasus推荐引擎等核心IP</li>
                    <li><strong>技术合作</strong> - 与芯片厂商、云服务商深度合作，整合产业链技术资源</li>
                    <li><strong>标准参与</strong> - 参与Matter等国际标准制定，提升行业影响力</li>
                </ul>
                <h4>人才资源</h4>
                <ul>
                    <li><strong>核心团队</strong> - 创始人团队稳定性高，核心技术人员服务多年</li>
                    <li><strong>全球化招聘</strong> - 在美国、欧洲、日本等地招募顶尖人才</li>
                    <li><strong>激励机制</strong> - 股权激励、期权计划，绑定核心人才</li>
                </ul>
                <h4>渠道资源</h4>
                <ul>
                    <li><strong>全球渠道</strong> - 在220+国家建立销售和服务渠道</li>
                    <li><strong>生态伙伴</strong> - 与芯片商、零售商、集成商形成渠道联盟</li>
                </ul>
                <h4>资源整合效果</h4>
                <p>通过有效的资源整合，涂鸦实现了从初创公司到上市公司的跨越，技术壁垒不断提升，生态规模持续扩大，全球影响力稳步增强。</p>
            `
        },
        profit: {
            title: "盈利模式",
            content: `
                <h3>盈利模式</h3>
                <h4>盈利模式演进</h4>
                <ul>
                    <li><strong>PaaS阶段</strong> - 以设备接入费和平台服务费为主要收入来源</li>
                    <li><strong>PaaS+SaaS阶段</strong> - 在PaaS基础上，增加SaaS订阅服务收入</li>
                    <li><strong>多元化阶段</strong> - IoT PaaS、SaaS、智慧解决方案三驾马车，收入结构优化</li>
                </ul>
                <h4>收入结构（2025Q1-3）</h4>
                <ul>
                    <li><strong>IoT PaaS</strong> - 占比72.7%，核心收入来源，稳定增长</li>
                    <li><strong>SaaS</strong> - 占比13.3%，订阅制服务，毛利率高</li>
                    <li><strong>智慧解决方案</strong> - 占比14.0%，垂直场景定制，差异化竞争</li>
                </ul>
                <h4>定价策略</h4>
                <ul>
                    <li><strong>标准化定价</strong> - PaaS基础服务采用阶梯定价，规模效应明显</li>
                    <li><strong>差异化定价</strong> - Premium客户享受定制化服务，定价更高</li>
                    <li><strong>订阅制</strong> - SaaS服务采用月度/年度订阅，持续现金流</li>
                </ul>
                <h4>财务数据</h4>
                <ul>
                    <li><strong>营收增长</strong> - 从早期数千万到2025年的数亿美元规模</li>
                    <li><strong>毛利率</strong> - 稳定在47.4%左右，高于行业平均水平</li>
                    <li><strong>净利润</strong> - 2024年首次GAAP盈利500万美元，2025Q1-3净利润3858万</li>
                    <li><strong>净利润率</strong> - 随着规模效应显现，净利润率持续提升</li>
                </ul>
                <h4>盈利路径</h4>
                <p>规模化阶段快速抢占市场份额 → 质量优先阶段提升客户质量 → AI驱动阶段创造新增长点。通过多元化收入结构和持续的降本增效，实现可持续的盈利增长。</p>
            `
        },
        personnel: {
            title: "人员投入",
            content: `
                <h3>人员投入</h3>
                <h4>人员规模变化</h4>
                <p>从2014年创立时的几十人，到2019年快速扩张期的数千人，再到2022年后的精简优化，涂鸦的人员规模经历了快速增长到质量优化的转变。</p>
                <h4>人员结构</h4>
                <ul>
                    <li><strong>研发人员占比</strong> - 73.8%，技术导向明显，保持核心竞争力</li>
                    <li><strong>技术人员</strong> - 算法工程师、前后端开发、嵌入式开发</li>
                    <li><strong>市场人员</strong> - 销售、市场推广、品牌营销</li>
                    <li><strong>支持人员</strong> - 客服、财务、法务、HR</li>
                </ul>
                <h4>招聘策略</h4>
                <ul>
                    <li><strong>核心技术人才</strong> - AI、云计算、IoT领域顶尖人才</li>
                    <li><strong>国际化人才</strong> - 全球各地本地化运营和管理人才</li>
                    <li><strong>行业专家</strong> - 家电、房地产、工业等垂直领域专家</li>
                </ul>
                <h4>人效提升</h4>
                <p>较2年前提升3倍，通过以下方式实现：AI工具辅助、流程优化、组织扁平化、自动化测试。人均产出显著提高，成本控制效果明显。</p>
                <h4>核心团队稳定性</h4>
                <p>4位创始人和核心管理层合作超过10年，形成稳定的领导核心。关键技术人员流失率低，为公司持续发展提供了人才保障。</p>
            `
        },
        capital: {
            title: "资金投入",
            content: `
                <h3>资金投入</h3>
                <h4>各年度投入规模</h4>
                <ul>
                    <li><strong>研发投入</strong> - 持续保持高研发投入，占营收比例30%以上</li>
                    <li><strong>营销投入</strong> - 全球化市场推广、品牌建设、展会参展</li>
                    <li><strong>运营投入</strong> - 数据中心建设、办公场地、人员薪资</li>
                    <li><strong>基础设施</strong> - 7大全球数据中心、云资源采购</li>
                </ul>
                <h4>融资历程</h4>
                <ul>
                    <li><strong>天使轮</strong> - 数百万美元，验证商业模式</li>
                    <li><strong>A轮</strong> - 千万美元级，扩大团队和市场</li>
                    <li><strong>B轮</strong> - 2亿美元，估值突破10亿美元</li>
                    <li><strong>C轮</strong> - 2.2亿美元，估值接近30亿美元</li>
                    <li><strong>IPO</strong> - 募资2.15亿美元，市值140亿美元</li>
                    <li><strong>总计</strong> - 从天使到IPO总融资额超过5亿美元</li>
                </ul>
                <h4>资金使用方向</h4>
                <ul>
                    <li><strong>技术研发</strong> - 核心技术突破、产品迭代、AI能力建设</li>
                    <li><strong>全球化</strong> - 海外总部建设、本地化团队、市场拓展</li>
                    <li><strong>生态建设</strong> - 开发者激励、合作伙伴扶持、品牌推广</li>
                </ul>
                <h4>投入效果</h4>
                <ul>
                    <li><strong>技术突破</strong> - TAPE引擎、TuyaOS、Matter支持等核心技术</li>
                    <li><strong>市场扩张</strong> - 覆盖220+国家，海外收入占比83%</li>
                    <li><strong>生态规模</strong> - 162.2万开发者、5500+PaaS客户</li>
                </ul>
                <h4>资金管控优化</h4>
                <p>通过AI+FinOps实现精细化成本管理，人员精简降低人力成本，优化供应商降低采购成本，整体运营效率持续提升。</p>
            `
        },
        risk: {
            title: "风险、试错及管控",
            content: `
                <h3>风险、试错及管控</h3>
                <h4>主要风险</h4>
                <ul>
                    <li><strong>技术风险</strong> - 技术迭代快，需要持续投入研发保持领先</li>
                    <li><strong>市场风险</strong> - 行业竞争加剧，巨头纷纷进入IoT领域</li>
                    <li><strong>竞争风险</strong> - 阿里云IoT、华为IoT、小米IoT等强劲对手</li>
                    <li><strong>合规风险</strong> - 全球化运营需要遵守各国法律法规</li>
                    <li><strong>地缘政治风险</strong> - 中美贸易摩擦、数据跨境流动限制</li>
                </ul>
                <h4>典型试错案例</h4>
                <ul>
                    <li><strong>智能音箱失败</strong> - 早期推出智能音箱项目，市场反应不佳，及时终止并调整战略</li>
                    <li><strong>全屋智能调整</strong> - SaaS业务扩张过快，遇到执行挑战，优化产品和市场策略</li>
                    <li><strong>温州电工合作0产出</strong> - 与某电工企业合作项目未达预期，快速止损并总结经验</li>
                </ul>
                <h4>风险管控措施</h4>
                <ul>
                    <li><strong>多元化</strong> - 客户多元化、产品多元化、市场多元化</li>
                    <li><strong>合规体系</strong> - 建立完善的合规管理体系，应对全球法规</li>
                    <li><strong>应急预案</strong> - 针对不同风险场景制定应急预案</li>
                </ul>
                <h4>优化调整方案</h4>
                <ul>
                    <li><strong>战略聚焦</strong> - 聚焦核心业务，放弃非核心项目</li>
                    <li><strong>产品优化</strong> - 基于客户反馈持续优化产品体验</li>
                    <li><strong>组织提升</strong> - 人员精简，提升人效，优化组织结构</li>
                </ul>
                <h4>复盘启示</h4>
                <ul>
                    <li><strong>战略定力</strong> - 长期坚持技术中立、开放平台的战略定位</li>
                    <li><strong>技术驱动</strong> - 持续技术创新是核心竞争力</li>
                    <li><strong>生态思维</strong> - 构建开放生态，实现共赢发展</li>
                    <li><strong>全球化视野</strong> - 布局全球市场，分散单一市场风险</li>
                </ul>
            `
        }
    }
};

// 默认显示第一个维度
document.addEventListener('DOMContentLoaded', function() {
    const dimensionContent = document.getElementById('dimension-content');
    const firstDimension = 'strategy';
    dimensionContent.innerHTML = tuyaContent.dimensions[firstDimension].content;
});

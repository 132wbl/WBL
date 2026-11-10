/* =========================================================
   Token Center（Token 中心）· 数据文件
   改这里就能更新站点：items = 首页 token，watch = 观望区，retired = 已下架
   字段说明：
     n      名称
     cat    model（大模型额度）/ tool（AI 工具）/ event（限时活动）
     free   长期免费 / 限时活动 / 注册赠送 / 每日赠送 / 免费层 / 试用
     models 覆盖的模型，用 · 分隔
     quota  额度摘要（写人话，别写营销话）
     url    官方入口
     dl     截止日 YYYY-MM-DD（没有就删掉这一行）
     hot    站长推荐
     intl   海外平台
   ========================================================= */

const DATA = {
  updated: '2026-11-10',
  items: [
    {
      n: '阿里云百炼 DashScope',
      cat: 'model', free: '长期免费',
      models: 'Qwen 全系 · DeepSeek · Kimi · GLM · Llama 等 70+',
      quota: '每个模型 100 万 tokens、有效 3 个月，可叠加领取，合计约 7000 万。新号开通即到账，适合先把 API 跑通。',
      url: 'https://bailian.console.aliyun.com/', hot: true
    },
    {
      n: '火山引擎 Ark（豆包）',
      cat: 'model', free: '长期免费',
      models: 'Doubao Seed / Pro 系列',
      quota: '协作计划约 200 万 tokens/天、每日重置，可叠加部分第三方模型。额度稳定但要在后台常看，模型更替较快。',
      url: 'https://console.volcengine.com/ark', hot: true
    },
    {
      n: '硅基流动 SiliconFlow',
      cat: 'model', free: '免费层',
      models: 'DeepSeek · GLM · Qwen · Kimi',
      quota: '对话类小模型的永久免费已于 2026-09 取消；embedding、语音识别、OCR、翻译、Kolors 生图仍免费用。新用户另赠约 16 元无门槛券。',
      url: 'https://cloud.siliconflow.cn/'
    },
    {
      n: '智谱 AutoClaw 登录送 Token',
      cat: 'event', free: '限时活动',
      models: 'GLM-5.3-Flash · 桌面 Agent',
      quota: '登录即领 5000 万 Token，11-15 23:59 失效，每账号限领一次。适合短期集中跑桌面任务。',
      url: 'https://autoclaw.zhipuai.cn', dl: '2026-11-15'
    },
    {
      n: '腾讯云 TokenHub',
      cat: 'event', free: '限时活动',
      models: '混元 · DeepSeek-V4.1-Flash · Kimi · MiniMax',
      quota: '每个语言模型各 100 万 tokens、有效期 1 年；另送生视频、生 3D 积分。领取窗口到 12-31。',
      url: 'https://console.cloud.tencent.com/tokenhub/models', dl: '2026-12-31'
    },
    {
      n: '移动云 MoMA',
      cat: 'model', free: '注册赠送',
      models: 'DeepSeek 系列 · Kimi 系列 · Qwen3.5 · GLM-5.3',
      quota: '新用户一次性 2500 万 tokens，自领取起 30 天有效，限流 3000 tokens/分钟。只算自营模型。',
      url: 'https://ecloud.10086.cn/'
    },
    {
      n: '天翼云息壤（电信）',
      cat: 'model', free: '注册赠送',
      models: 'GLM-5 · DeepSeek V4 · Qwen3.5 · Doubao 等约 18 款',
      quota: '文本类模型每款 2500 万 tokens，有效期 2 周，从首次调用开始计时，适合短期压测。',
      url: 'https://www.ctyun.cn/product/maas'
    },
    {
      n: '联通云 Coding Plan',
      cat: 'tool', free: '免费层',
      models: 'GLM-5 · MiniMax-M2.5 · Qwen3.5 · DeepSeek-V3.1',
      quota: 'Lite 免费体验 1.8 万次/月，Pro 最高 9 万次/月；Lite 与 Pro 共 1.2 万个免费名额，先到先得，Key 有效 31 天。',
      url: 'https://www.cucloud.cn/'
    },
    {
      n: '七牛云 Conatus Free',
      cat: 'event', free: '限时活动',
      models: 'Conatus 融合模型（1M 上下文）',
      quota: '实名认证后每日 1 亿 Token，单笔充值满 100 元提至每日 10 亿；额度每日 0 点重置不结转。',
      url: 'https://www.qiniu.com/ai/free-models/conatus-2026', dl: '2026-11-30'
    },
    {
      n: '百川智能开放平台',
      cat: 'model', free: '注册赠送',
      models: 'Baichuan2-Turbo · Baichuan3-Turbo · Baichuan4',
      quota: '注册自动下发 1000 万 tokens 赠送金（官方折算约 80 元），自领取起 3 个月有效。',
      url: 'https://platform.baichuan-ai.com/'
    },
    {
      n: '讯飞星辰 MaaS',
      cat: 'model', free: '注册赠送',
      models: 'Spark-X2.6（293B MoE / 1M 上下文）',
      quota: '实名后在星辰 MaaS 领 10 亿 Tokens，每人一次、31 天内有效；OpenAI 与 Anthropic 双协议，改 base_url 即可接。',
      url: 'https://maas.xfyun.cn/'
    },
    {
      n: '商汤小浣熊',
      cat: 'tool', free: '注册赠送',
      models: 'SenseNova 6.8 Flash · 办公 / 表格 / PPT',
      quota: '网页、桌面、移动三端各送 3000 积分（共 9000，有效期 1 年），每日登录再领 300；6.8 Flash 限免至 12-01。',
      url: 'https://xiaohuanxiong.com/', dl: '2026-12-01'
    },
    {
      n: '蚂蚁百灵 Ling Studio',
      cat: 'model', free: '每日赠送',
      models: 'Ling-3.0-flash-VL · Ring-2.5-1T · Ming-flash-omni',
      quota: '每账号每天 50 万免费计算单元（输入输出合并计算），每天 02:00 前刷新，当日用完不结转。',
      url: 'https://ling.tbox.cn/'
    },
    {
      n: '蚂蚁 Ling-3.2-flash 首发限免',
      cat: 'event', free: '限时活动',
      models: 'Ling-3.2-flash（560B MoE / 1M 上下文 / 图+视频输入）',
      quota: '上线首两周 API 全免费、输入输出都不计费；11-19 起恢复按量，约 ¥2 输入 / ¥6 输出 每百万 tokens。',
      url: 'https://developer.ant-ling.com/', dl: '2026-11-19'
    },
    {
      n: '书生 Intern AI',
      cat: 'model', free: '长期免费',
      models: 'intern-s2 · intern-s2-preview-397b · internvl3.5',
      quota: '每月 9000 万输入 + 9000 万输出 tokens，各自独立计数、按自然月刷新，默认 30 次/分钟。',
      url: 'https://internlm.intern-ai.org.cn/api/tokens'
    },
    {
      n: '书生·端砚 墨点计划',
      cat: 'model', free: '免费层',
      models: 'DeepSeek · GLM · Kimi · MiniMax · Qwen · 书生自研',
      quota: '测试期每月 10 墨点，约合每月 5 亿 tokens；覆盖 9 个模型，官方未公布截止时间。',
      url: 'https://discovery.intern-ai.org.cn/token-plan/home'
    },
    {
      n: '云知声 U2-Flash',
      cat: 'model', free: '免费层',
      models: 'U2-Flash · U2 · U2-Med · U2-Decision',
      quota: 'U Plan Free 档每周 2500 积分、5 小时窗口 500 积分；另赠语音识别 8 小时、合成 4 万字；U2-Flash 上线另赠 1 亿 Token。',
      url: 'https://maas.unisound.com/'
    },
    {
      n: '国家超算互联网 SCNet',
      cat: 'event', free: '限时活动',
      models: '科学计算智能体 · 旗舰级大模型（客户端）',
      quota: '新户注册领 1 亿词元智能体额度；活动期内客户端旗舰模型词元不限量，活动到 11-30。',
      url: 'https://www.scnet.cn/', dl: '2026-11-30'
    },
    {
      n: '华为云盘古 MaaS',
      cat: 'model', free: '试用',
      models: '盘古系列',
      quota: '首次开通每模型赠 200 万 tokens 推理额度，一次性、用完转付费；退订后重开不再赠送。',
      url: 'https://www.huaweicloud.com/product/modelarts.html'
    },
    {
      n: '魔芋 AI 双 11 活动',
      cat: 'event', free: '限时活动',
      models: '聚合 500+ 模型',
      quota: '个人新客实名送 1000 万 Token，连续签到 11 天累计 1000 万，邀请最高 1.6 亿；全任务合计最高 2.7 亿。',
      url: 'https://moyu.cn/', dl: '2026-11-11'
    },
    {
      n: '字节 TRAE（AI IDE）',
      cat: 'tool', free: '长期免费',
      models: 'GPT-4o · Doubao-1.5-pro · DeepSeek',
      quota: '基础版长期免费，覆盖约九成个人开发场景，SOLO 模式 0 元用；新用户注册登录桌面端一次性得 3000 积分。',
      url: 'https://www.trae.cn/', hot: true
    },
    {
      n: 'Qoder CN',
      cat: 'tool', free: '每日赠送',
      models: 'Qwen3.8-Flash / Max · DeepSeek-V4 · GLM-5.3',
      quota: '每日 10:00 在客户端领 100 Credits（30 天有效、可累积），新户注册另送 300。Flash 档每日免费用量按 0×。',
      url: 'https://qoder.com/'
    },
    {
      n: 'Cline',
      cat: 'tool', free: '长期免费',
      models: 'DeepSeek-V4.1-Flash · GLM-5.3-Flash · Muse Spark',
      quota: '不绑卡即可免费调用，有额度限制但日常 coding 够用；没有截止时间。VS Code 装插件就能用。',
      url: 'https://cline.bot'
    },
    {
      n: 'Kilo Code',
      cat: 'tool', free: '长期免费',
      models: 'Nemotron 3 Ultra · MiniMax M2.7 · 混元 Hy3 等 16 款',
      quota: '16 款模型长期免费、不是试用期；无需 API Key 与信用卡，装上就能开跑。',
      url: 'https://kilocode.ai'
    },
    {
      n: 'Verdent AI',
      cat: 'tool', free: '长期免费',
      models: 'GLM-5.3-Flash · DeepSeek V4 Flash',
      quota: '两款模型完全免费，按 5 小时 / 每周滚动限额；新用户另赠 7 天 + 100 credits。',
      url: 'https://verdent.ai'
    },
    {
      n: 'OpenCode Zen',
      cat: 'tool', free: '限时活动',
      models: 'DeepSeek V4.1 Flash · GLM-5.3-Flash · MiMo-V2.5 · LongCat Free',
      quota: '免费模型已扩至 15 个，限时开放、官方没公布关闸日期，先领先用。',
      url: 'https://opencode.ai/zen'
    },
    {
      n: 'WorkBuddy',
      cat: 'event', free: '限时活动',
      models: 'Hy4 · Hy3 · DeepSeek-V4.1-Flash · Kimi-K3.1-Pro',
      quota: 'Hy4 限免到 11-15（每日额度有限、用尽转积分），Hy3 同步延到 11-15；新户 2000 积分有效期到 11-30。',
      url: 'https://www.codebuddy.cn/', dl: '2026-11-15'
    },
    {
      n: 'WorkBuddy 国际版',
      cat: 'event', free: '限时活动',
      models: 'Hy4 · Hy3 · DeepSeek-V4.1-Flash',
      quota: '11-04 至 11-15 与国内同步限免；日常首选 DeepSeek-V4.1-Flash，Hy3 纯语言 0.00× 全天免费。',
      url: 'https://workbuddy.ai/', dl: '2026-11-15', intl: true
    },
    {
      n: '库库 AI',
      cat: 'tool', free: '每日赠送',
      models: 'DeepSeek V4.1 · GLM-5.3 / 5.2 · 文心 5.1 · Kimi-K3',
      quota: '每日登录 +50 积分、完成一次对话 +50 积分，每天合计 100 积分；DeepSeek V4.1 按 0.16 倍率消耗。',
      url: 'https://kuku.baidu.com/home'
    },
    {
      n: 'Loomy（科大讯飞）',
      cat: 'tool', free: '每日赠送',
      models: '星火 X2.5 · DeepSeek V4 Flash · 通义千问',
      quota: '注册到账 5000 积分，免费用户每天登录再送 5000（次日补满、不累积），约等于每天 50 次办公任务。',
      url: 'https://loomy.xunfei.cn'
    },
    {
      n: '美团 catpaw',
      cat: 'tool', free: '长期免费',
      models: 'GLM-5.3-Flash · LongCat',
      quota: '新用户登录送 1200 积分；LongCat 免费不限量。App 端直接用，不用配 Key。',
      url: 'https://catpaw.meituan.com/'
    },
    {
      n: 'MonkeyCode（长亭）',
      cat: 'tool', free: '长期免费',
      models: 'GLM · Kimi · MiniMax · Qwen · DeepSeek',
      quota: '免费档 ¥0 永久，每天 3000 万 Token，没有截止时间。',
      url: 'https://monkeycode-ai.com/'
    },
    {
      n: 'LobsterAI 有道龙虾',
      cat: 'tool', free: '长期免费',
      models: 'DeepSeek-V4.1',
      quota: '下载安装即可免费使用，不需要申请额度，也没有截止时间。',
      url: 'https://lobsterai.youdao.com/'
    },
    {
      n: 'Google Antigravity',
      cat: 'tool', free: '免费层',
      models: 'Gemini · Claude · GPT-OSS',
      quota: '每周提供免费使用额度，覆盖 Gemini、Claude 等模型；需要 Google 账号。',
      url: 'https://antigravity.google/download', intl: true
    },
    {
      n: '豆包工作',
      cat: 'tool', free: '注册赠送',
      models: '豆包工作 · Agent 云端工作台',
      quota: '登录电脑版领 30 天标准订阅，到期可再续领一次（最多 60 天），付费订阅时长自动顺延。',
      url: 'https://www.doubao.com/download'
    },
    {
      n: '云工开物学生专区',
      cat: 'tool', free: '注册赠送',
      models: 'Qwen3.8 · GLM-5.3 · DeepSeek-V4',
      quota: '阿里云学生认证可领 300 元代金券，能抵 1 个月 Qoder CN 专业版；每人限 1 次。',
      url: 'https://university.aliyun.com/'
    },
    {
      n: 'ZCode',
      cat: 'tool', free: '每日赠送',
      models: 'GLM-5.3 · GLM-5.3-Flash',
      quota: '注册送 5 天体验（GLM-5.3 300 万 + 每天 200 万）；每日另发 3 亿 GLM-5.3-Flash，19:00 领、23:00 到次日 9:00 用。',
      url: 'https://zcode.z.ai/cn'
    },
    {
      n: '微信 AI 小程序成长计划',
      cat: 'event', free: '限时活动',
      models: 'Hy3 · Hy4 preview · DeepSeek-V4.1-Flash · Hy Image 3.0',
      quota: '10 亿大模型 Token + 10 万张 AI 生图，自申请起 6 个月内有效；走云开发 CloudBase。',
      url: 'https://cloud.tencent.com/developer/article/2705075'
    },
    {
      n: 'TeleAgent 星辰智能体',
      cat: 'tool', free: '长期免费',
      models: '中国电信星辰大模型',
      quota: '每天 6000 万 token，长期免费、无截止时间。',
      url: 'https://www.teleai.com.cn/product/teleagent'
    },
    {
      n: '小米 MiMo',
      cat: 'event', free: '限时活动',
      models: 'MiMo-X-Pro-Preview · MiMo-X-Flash-Preview',
      quota: '桌面客户端限时限量免费邀测，额满即止，官方没给截止日。',
      url: 'https://mimo.mi.com/'
    },
    {
      n: 'OpenRouter',
      cat: 'model', free: '长期免费',
      models: 'Nemotron 3 Ultra · Gemma 4 · Cohere North Mini · Xingchen 等 12 款 :free',
      quota: '带 :free 后缀的模型每分钟 20 次、每天 50 次；账户累计充值满 $10 后每日上限提到 1000 次。永久免费。',
      url: 'https://openrouter.ai', intl: true
    },
    {
      n: 'BazaarLink',
      cat: 'model', free: '长期免费',
      models: 'DeepSeek V4 Flash',
      quota: '长期免费：10 RPM / 每天 150 次，不绑卡、无试用期。',
      url: 'https://bazaarlink.ai/free', intl: true
    },
    {
      n: 'OVHcloud AI Endpoints',
      cat: 'model', free: '免费层',
      models: 'Qwen3.8-27B · Qwen3.5-397B · Mistral-Small · Llama-3.3-70B',
      quota: '匿名档免注册、免 API Key 直接调（约 2 次/分钟）；注册账号后额度更高，覆盖 8 款开源模型。',
      url: 'https://endpoints.ai.cloud.ovh.net/', intl: true
    },
    {
      n: 'Inception Labs Mercury',
      cat: 'model', free: '注册赠送',
      models: 'mercury-3 · mercury-decide · mercury-voice',
      quota: '新账户一次性赠 1 亿 Tokens（全模型共享），无需绑定支付方式；Mercury 3 上线 5 折。',
      url: 'https://platform.inceptionlabs.ai/', intl: true
    },
    {
      n: 'AMD 开发者计划',
      cat: 'model', free: '注册赠送',
      models: 'AMD 免费 API · Fireworks 托管推理',
      quota: '最高 $100 云额度 + $50 Fireworks 托管推理额度，无截止时间。',
      url: 'https://developer.amd.com.cn/radeon/tokenfactory', intl: true
    },
    {
      n: 'Agnes AI',
      cat: 'model', free: '长期免费',
      models: 'Agnes-3.0-Flash · Agnes-Image-2.0 · Agnes-Video-2.5',
      quota: '不限期免费，覆盖文本 / 图像 / 视频；API 每分钟 20 次请求，适合新手试水。',
      url: 'https://platform.agnes-ai.com', intl: true
    },
    {
      n: '魔搭社区 ModelScope',
      cat: 'model', free: '长期免费',
      models: 'Qwen 系列 · 通义万相 · LUX · Stable Diffusion',
      quota: '多模态每天约出 60–80 张图；较优文本模型每天至少 200 次调用。阿里云旗下，注册即享、无需实名。',
      url: 'https://modelscope.cn/'
    },
    {
      n: '点点 AI（小红书）',
      cat: 'model', free: '限时活动',
      models: 'dots3-note-prev',
      quota: '限时免费公测：20 RPM / 50 万 TPM，官方未公布截止时间。',
      url: 'https://dots.ai/platform/apikeys'
    },
    {
      n: '腾讯 EdgeOne Makers',
      cat: 'model', free: '免费层',
      models: 'DeepSeek-V4.1-Flash · MiniMax · 混元（AI 网关）',
      quota: '新账号赠 50 万 Token（账号内项目共享、免绑卡）；英文口径每月 50 万，以控制台为准。',
      url: 'https://pages.edgeone.ai/zh'
    },
    {
      n: 'UOS AI（deepin）',
      cat: 'tool', free: '免费层',
      models: 'DeepSeek',
      quota: '可免费领 DeepSeek 账号，每月 50 次文本对话额度，历史账号同样适用。',
      url: 'https://www.deepin.org/zh/ai-free-experience/'
    }
  ],

  /* 观望区：政策不稳或额度存疑，先保留入口观察 */
  watch: [
    { n: '百度千帆（文心）', url: 'https://qianfan.cloud.baidu.com', why: '免费额度政策反复，等口径稳定再回首页。' },
    { n: '讯飞星火（开放平台）', url: 'https://www.xfyun.cn', why: '星火主站与星辰 MaaS 的赠送额度分开计算，主站免费档待观察。' },
    { n: '智谱 Z.AI 开放平台', url: 'https://open.bigmodel.cn', why: 'GLM 系列免费额度按活动发放，日常档已收紧。' },
    { n: '百度 AI Studio', url: 'https://aistudio.baidu.com', why: '官方称赠 100 万 Tokens，积分与有效期口径未核实。' },
    { n: '腾讯混元大模型', url: 'https://cloud.tencent.com/product/hunyuan', why: '免费额度并入 TokenHub 活动，单卡不再重复收录。' },
    { n: '阶跃星辰 StepFun', url: 'https://platform.stepfun.com', why: '目前无稳定免费额度。' },
    { n: 'Kimi Work（月之暗面）', url: 'https://kimi.com', why: '公测期免费版可用，但未公示 token 口径。' },
    { n: 'Mistral La Plateforme', url: 'https://console.mistral.ai', why: '免费档仅覆盖部分开源模型，需海外网络。' },
    { n: 'xAI Grok', url: 'https://console.x.ai', why: '无长期免费 API 档，需海外账号与外币支付。' },
    { n: 'Cohere Trial Key', url: 'https://dashboard.cohere.com', why: '试用 Key 限次且限模型，额度偏小。' },
    { n: 'Google Gemini API', url: 'https://aistudio.google.com', why: '中国大陆地区不可用，区域限制。' },
    { n: 'Groq 免费 API', url: 'https://console.groq.com', why: '海外服务，免费档只覆盖开源模型。' },
    { n: 'Cloudflare Workers AI', url: 'https://developers.cloudflare.com/workers-ai/', why: '每日 Neurons 额度对实际使用偏紧。' },
    { n: 'NVIDIA NIM', url: 'https://build.nvidia.com', why: '免费 API 可用但价值一般，待观察。' },
    { n: 'Together AI', url: 'https://together.ai', why: '免费端点说法与官方定价页不一致，待核。' },
    { n: 'Vercel AI Gateway', url: 'https://vercel.com/ai-gateway', why: '每月 $5 Credits，属聚合器，只留代表收录。' },
    { n: 'Ollama Cloud', url: 'https://ollama.com', why: '免费档仅 starter 模型，额度数值待核。' },
    { n: 'Cerebras Cloud', url: 'https://cloud.cerebras.ai', why: '免费层改为绑卡后发一次性 $5 试用，不再是长期免费。' },
    { n: 'Nous Portal', url: 'https://portal.nousresearch.com/', why: '$0 计划含 9 款 :free 模型，但注册可能需要绑卡。' },
    { n: 'LLM7.io', url: 'https://llm7.io', why: '小型聚合站，长期稳定性待观察。' },
    { n: 'Freebuff', url: 'https://freebuff.com', why: '额度按地区分配，国内额度更低。' },
    { n: 'Fireworks AI', url: 'https://fireworks.ai', why: '免费额度以赠送金形式发放，口径常变。' },
    { n: 'Novita AI', url: 'https://novita.ai', why: '免费额度小且按活动发放。' },
    { n: 'APMIX', url: 'https://apmix.ai/event', why: '活动型平台，额度与截止日常变。' }
  ],

  /* 已下架：不再具备稳定免费额度，或入口已转付费 */
  retired: [
    { n: '腾讯元器', url: 'https://yuanqi.tencent.com', why: '免费额度已并入其他产品，入口不再单独提供。' },
    { n: 'DeepSeek 开放平台', url: 'https://platform.deepseek.com', why: '新用户赠送金取消，改为纯按量计费。' },
    { n: '月之暗面 Kimi 开放平台', url: 'https://platform.moonshot.cn', why: '仅一次性体验金，用尽后无持续免费额度。' },
    { n: 'HuggingFace Inference API', url: 'https://huggingface.co', why: '共享推理端点限流过紧，需 PRO 才有实际额度。' },
    { n: 'GitHub Copilot Free', url: 'https://github.com/features/copilot', why: '每月额度偏小，实际可用量有限。' },
    { n: 'OpenStarry', url: 'https://openstarry.com', why: '中转聚合平台，仅 200 次试用，非官方渠道。' },
    { n: 'B.AI', url: 'https://chat.b.ai', why: '免费模型全部取消，改为全站折扣付费。' },
    { n: 'GMI Cloud', url: 'https://console.gmicloud.ai', why: '免费模型下线，入口转付费。' },
    { n: '秒哒（百度）', url: 'https://miaoda.cn', why: '免费生成额度已收回，转为付费。' },
    { n: '美团 longcat 大模型', url: 'https://longcat.chat', why: '额度实为实名赠送量包，与“长期免费”不符。' },
    { n: '华为云码道', url: 'https://codearts.huaweicloud.com', why: '依托的学堂活动已结束，积分福利无法确认。' },
    { n: 'MiniMax Code 国庆签到', url: 'https://agent.minimax.cn/', why: '签到翻倍活动结束，未见新一期。' },
    { n: '2026 微信小程序开发大赛', url: 'https://contest.weixin.qq.com', why: '报名已截止，名额发放不稳定。' },
    { n: '阿里云 Qoder（旧条目）', url: 'https://www.aliyun.com', why: '已改写为 Qoder CN，避免重复收录。' }
  ]
};

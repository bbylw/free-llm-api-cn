// 数据定义
const providersData = {
    free: [
        {
            name: "OpenRouter",
            url: "https://openrouter.ai",
            badge: "free",
            limits: "20 次请求/分钟<br>50 次请求/天<br>充值 $10 后可达 1000 次请求/天<br><small>模型共享同一配额</small>",
            limitsUrl: "https://openrouter.ai/docs/api-reference/limits",
            models: [
                { name: "Gemma 3 12B Instruct", url: "https://openrouter.ai/google/gemma-3-12b-it:free" },
                { name: "Gemma 3 27B Instruct", url: "https://openrouter.ai/google/gemma-3-27b-it:free" },
                { name: "Gemma 3 4B Instruct", url: "https://openrouter.ai/google/gemma-3-4b-it:free" },
                { name: "Hermes 3 Llama 3.1 405B", url: "https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b:free" },
                { name: "Llama 3.2 3B Instruct", url: "https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free" },
                { name: "Llama 3.3 70B Instruct", url: "https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free" },
                { name: "Mistral Small 3.1 24B Instruct", url: "https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free" },
                { name: "trinity-large-preview", url: "https://openrouter.ai/arcee-ai/trinity-large-preview:free" },
                { name: "trinity-mini", url: "https://openrouter.ai/arcee-ai/trinity-mini:free" },
                { name: "dolphin-mistral-24b", url: "https://openrouter.ai/cognitivecomputations/dolphin-mistral-24b-venice-edition:free" },
                { name: "gemma-3n-e2b-it", url: "https://openrouter.ai/google/gemma-3n-e2b-it:free" },
                { name: "gemma-3n-e4b-it", url: "https://openrouter.ai/google/gemma-3n-e4b-it:free" },
                { name: "lfm-2.5-1.2b-instruct", url: "https://openrouter.ai/liquid/lfm-2.5-1.2b-instruct:free" },
                { name: "lfm-2.5-1.2b-thinking", url: "https://openrouter.ai/liquid/lfm-2.5-1.2b-thinking:free" },
                { name: "nemotron-3-nano-30b", url: "https://openrouter.ai/nvidia/nemotron-3-nano-30b-a3b:free" },
                { name: "nemotron-nano-12b-v2-vl", url: "https://openrouter.ai/nvidia/nemotron-nano-12b-v2-vl:free" },
                { name: "nemotron-nano-9b-v2", url: "https://openrouter.ai/nvidia/nemotron-nano-9b-v2:free" },
                { name: "gpt-oss-120b", url: "https://openrouter.ai/openai/gpt-oss-120b:free" },
                { name: "gpt-oss-20b", url: "https://openrouter.ai/openai/gpt-oss-20b:free" },
                { name: "qwen3-4b", url: "https://openrouter.ai/qwen/qwen3-4b:free" },
                { name: "qwen3-coder", url: "https://openrouter.ai/qwen/qwen3-coder:free" },
                { name: "qwen3-next-80b", url: "https://openrouter.ai/qwen/qwen3-next-80b-a3b-instruct:free" },
                { name: "step-3.5-flash", url: "https://openrouter.ai/stepfun/step-3.5-flash:free" },
                { name: "glm-4.5-air", url: "https://openrouter.ai/z-ai/glm-4.5-air:free" }
            ]
        },
        {
            name: "Google AI Studio",
            url: "https://aistudio.google.com",
            badge: "free",
            notes: "在英国/瑞士/欧洲经济区/欧盟之外使用时，数据会用于训练",
            limitsTable: [
                { model: "Gemini 3 Flash", limits: "250,000 tokens/分钟<br>20 次请求/天<br>5 次请求/分钟" },
                { model: "Gemini 3.1 Flash-Lite", limits: "250,000 tokens/分钟<br>500 次请求/天<br>15 次请求/分钟" },
                { model: "Gemini 2.5 Flash", limits: "250,000 tokens/分钟<br>20 次请求/天<br>5 次请求/分钟" },
                { model: "Gemini 2.5 Flash-Lite", limits: "250,000 tokens/分钟<br>20 次请求/天<br>10 次请求/分钟" },
                { model: "Gemma 3 27B Instruct", limits: "15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟" },
                { model: "Gemma 3 12B Instruct", limits: "15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟" },
                { model: "Gemma 3 4B Instruct", limits: "15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟" },
                { model: "Gemma 3 1B Instruct", limits: "15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟" }
            ]
        },
        {
            name: "NVIDIA NIM",
            url: "https://build.nvidia.com/explore/discover",
            badge: "free",
            notes: "需要手机号验证<br>模型通常受上下文窗口限制",
            limits: "40 次请求/分钟",
            modelsLink: { text: "各种开源模型", url: "https://build.nvidia.com/models" }
        },
        {
            name: "Mistral (La Plateforme)",
            url: "https://console.mistral.ai/",
            badge: "free",
            notes: "免费层级（实验计划）需要同意数据训练<br>需要手机号验证",
            limits: "1 次请求/秒<br>500,000 tokens/分钟<br>1,000,000,000 tokens/月",
            modelsLink: { text: "开源和专有 Mistral 模型", url: "https://docs.mistral.ai/getting-started/models/models_overview/" }
        },
        {
            name: "Mistral (Codestral)",
            url: "https://codestral.mistral.ai/",
            badge: "free",
            notes: "目前免费使用<br>基于月度订阅<br>需要手机号验证",
            limits: "30 次请求/分钟<br>2,000 次请求/天",
            models: [{ name: "Codestral", url: null }]
        },
        {
            name: "HuggingFace 推理提供商",
            url: "https://huggingface.co/docs/inference-providers/en/index",
            badge: "free",
            notes: "HuggingFace 无服务器推理仅限于小于 10GB 的模型<br>某些热门模型即使超过 10GB 也受支持",
            limits: "每月 $0.10 额度",
            limitsUrl: "https://huggingface.co/docs/inference-providers/en/pricing",
            modelsLink: { text: "各种开源模型", url: null }
        },
        {
            name: "Vercel AI Gateway",
            url: "https://vercel.com/docs/ai-gateway",
            badge: "free",
            notes: "路由到各种支持的提供商",
            limits: "$5/月",
            limitsUrl: "https://vercel.com/docs/ai-gateway/pricing"
        },
        {
            name: "Cerebras",
            url: "https://cloud.cerebras.ai/",
            badge: "free",
            limitsTable: [
                { model: "gpt-oss-120b", limits: "30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天" },
                { model: "Qwen 3 235B A22B Instruct", limits: "30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天" },
                { model: "Llama 3.3 70B", limits: "30 次请求/分钟<br>64,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天" },
                { model: "Qwen 3 32B", limits: "30 次请求/分钟<br>64,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天" },
                { model: "Llama 3.1 8B", limits: "30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天" },
                { model: "Z.ai GLM-4.6", limits: "10 次请求/分钟<br>60,000 tokens/分钟<br>100 次请求/小时<br>100,000 tokens/小时<br>100 次请求/天<br>1,000,000 tokens/天" }
            ]
        },
        {
            name: "Groq",
            url: "https://console.groq.com",
            badge: "free",
            limitsTable: [
                { model: "Allam 2 7B", limits: "7,000 次请求/天<br>6,000 tokens/分钟" },
                { model: "Llama 3.1 8B", limits: "14,400 次请求/天<br>6,000 tokens/分钟" },
                { model: "Llama 3.3 70B", limits: "1,000 次请求/天<br>12,000 tokens/分钟" },
                { model: "Llama 4 Maverick 17B", limits: "1,000 次请求/天<br>6,000 tokens/分钟" },
                { model: "Llama 4 Scout Instruct", limits: "1,000 次请求/天<br>30,000 tokens/分钟" },
                { model: "Whisper Large v3", limits: "7,200 音频秒/分钟<br>2,000 次请求/天" },
                { model: "Whisper Large v3 Turbo", limits: "7,200 音频秒/分钟<br>2,000 次请求/天" },
                { model: "compound", limits: "250 次请求/天<br>70,000 tokens/分钟" },
                { model: "compound-mini", limits: "250 次请求/天<br>70,000 tokens/分钟" },
                { model: "kimi-k2-instruct", limits: "1,000 次请求/天<br>10,000 tokens/分钟" },
                { model: "gpt-oss-120b", limits: "1,000 次请求/天<br>8,000 tokens/分钟" },
                { model: "gpt-oss-20b", limits: "1,000 次请求/天<br>8,000 tokens/分钟" },
                { model: "qwen3-32b", limits: "1,000 次请求/天<br>6,000 tokens/分钟" }
            ]
        },
        {
            name: "Cohere",
            url: "https://cohere.com",
            badge: "free",
            limits: "20 次请求/分钟<br>1,000 次请求/月<br><small>模型共享同一月度配额</small>",
            limitsUrl: "https://docs.cohere.com/docs/rate-limits",
            models: [
                { name: "c4ai-aya-expanse-32b", url: null },
                { name: "c4ai-aya-vision-32b", url: null },
                { name: "command-a-03-2025", url: null },
                { name: "command-a-reasoning-08-2025", url: null },
                { name: "command-a-translate-08-2025", url: null },
                { name: "command-a-vision-07-2025", url: null },
                { name: "command-r-08-2024", url: null },
                { name: "command-r-plus-08-2024", url: null },
                { name: "command-r7b-12-2024", url: null },
                { name: "command-r7b-arabic-02-2025", url: null },
                { name: "tiny-aya-earth", url: null },
                { name: "tiny-aya-fire", url: null },
                { name: "tiny-aya-global", url: null },
                { name: "tiny-aya-water", url: null }
            ]
        },
        {
            name: "GitHub Models",
            url: "https://github.com/marketplace/models",
            badge: "free",
            notes: "输入/输出 token 限制极其严格",
            limits: "取决于 Copilot 订阅层级（免费/专业/专业+/商业/企业）",
            limitsUrl: "https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits",
            models: [
                { name: "AI21 Jamba 1.5 Large", url: null },
                { name: "Codestral 25.01", url: null },
                { name: "Cohere Command A", url: null },
                { name: "DeepSeek-R1", url: null },
                { name: "DeepSeek-V3-0324", url: null },
                { name: "Grok 3", url: null },
                { name: "Llama 4 Maverick 17B", url: null },
                { name: "Llama 4 Scout 17B", url: null },
                { name: "Llama-3.3-70B-Instruct", url: null },
                { name: "Meta-Llama-3.1-405B", url: null },
                { name: "Mistral Medium 3", url: null },
                { name: "OpenAI GPT-4.1", url: null },
                { name: "OpenAI GPT-4o", url: null },
                { name: "OpenAI gpt-5", url: null },
                { name: "OpenAI o1", url: null },
                { name: "OpenAI o3", url: null },
                { name: "OpenAI o4-mini", url: null },
                { name: "Phi-4", url: null }
            ]
        },
        {
            name: "Cloudflare Workers AI",
            url: "https://developers.cloudflare.com/workers-ai",
            badge: "free",
            limits: "每天 10,000 神经元",
            limitsUrl: "https://developers.cloudflare.com/workers-ai/platform/pricing/#free-allocation",
            models: [
                { name: "DeepSeek R1 Distill Qwen 32B", url: null },
                { name: "Gemma 3 12B Instruct", url: null },
                { name: "Llama 3.1 8B Instruct", url: null },
                { name: "Llama 3.2 3B Instruct", url: null },
                { name: "Llama 3.3 70B Instruct", url: null },
                { name: "Llama 4 Scout Instruct", url: null },
                { name: "Mistral Small 3.1 24B", url: null },
                { name: "Qwen 2.5 Coder 32B", url: null },
                { name: "Qwen QwQ 32B", url: null },
                { name: "@cf/openai/gpt-oss-120b", url: null },
                { name: "@cf/qwen/qwen3-30b-a3b-fp8", url: null },
                { name: "@cf/zai-org/glm-4.7-flash", url: null }
            ]
        },
        {
            name: "Google Cloud Vertex AI",
            url: "https://console.cloud.google.com/vertex-ai/model-garden",
            badge: "free",
            notes: "Google Cloud 的付款验证非常严格",
            limitsTable: [
                { model: "Llama 3.2 90B Vision Instruct", limits: "30 次请求/分钟<br>预览期间免费", url: "https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-2-90b-vision-instruct-maas" },
                { model: "Llama 3.1 70B Instruct", limits: "60 次请求/分钟<br>预览期间免费", url: "https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-1-405b-instruct-maas" },
                { model: "Llama 3.1 8B Instruct", limits: "60 次请求/分钟<br>预览期间免费", url: "https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-1-405b-instruct-maas" }
            ]
        }
    ],
    trial: [
        {
            name: "Fireworks",
            url: "https://fireworks.ai/",
            badge: "trial",
            credits: "$1",
            modelsLink: { text: "各种开源模型", url: "https://fireworks.ai/models" }
        },
        {
            name: "Baseten",
            url: "https://app.baseten.co/",
            badge: "trial",
            credits: "$30",
            modelsLink: { text: "任何支持的模型 - 按计算时间付费", url: "https://www.baseten.co/library/" }
        },
        {
            name: "Nebius",
            url: "https://studio.nebius.com/",
            badge: "trial",
            credits: "$1",
            modelsLink: { text: "各种开源模型", url: "https://studio.nebius.ai/models" }
        },
        {
            name: "Novita",
            url: "https://novita.ai/?ref=ytblmjc&utm_source=affiliate",
            badge: "trial",
            credits: "$0.5，有效期 1 年",
            modelsLink: { text: "各种开源模型", url: "https://novita.ai/models" }
        },
        {
            name: "AI21",
            url: "https://studio.ai21.com/",
            badge: "trial",
            credits: "$10，有效期 3 个月",
            modelsLink: { text: "Jamba 系列模型", url: null }
        },
        {
            name: "Upstage",
            url: "https://console.upstage.ai/",
            badge: "trial",
            credits: "$10，有效期 3 个月",
            modelsLink: { text: "Solar Pro/Mini", url: null }
        },
        {
            name: "NLP Cloud",
            url: "https://nlpcloud.com/home",
            badge: "trial",
            credits: "$15",
            notes: "需要手机号验证",
            modelsLink: { text: "各种开源模型", url: null }
        },
        {
            name: "阿里云（国际）模型工作室",
            url: "https://bailian.console.alibabacloud.com/",
            badge: "trial",
            credits: "每个模型 100 万 tokens",
            modelsLink: { text: "各种开源和专有 Qwen 模型", url: "https://www.alibabacloud.com/en/product/modelstudio" }
        },
        {
            name: "Modal",
            url: "https://modal.com",
            badge: "trial",
            credits: "注册即送 $5/月，添加付款方式后 $30/月",
            modelsLink: { text: "任何支持的模型 - 按计算时间付费", url: null }
        },
        {
            name: "Inference.net",
            url: "https://inference.net",
            badge: "trial",
            credits: "$1，回复邮件调查可获得 $25",
            modelsLink: { text: "各种开源模型", url: null }
        },
        {
            name: "Hyperbolic",
            url: "https://app.hyperbolic.xyz/",
            badge: "trial",
            credits: "$1",
            models: [
                { name: "DeepSeek V3", url: null },
                { name: "DeepSeek V3 0324", url: null },
                { name: "Llama 3.1 405B Base", url: null },
                { name: "Llama 3.1 405B Instruct", url: null },
                { name: "Llama 3.1 70B Instruct", url: null },
                { name: "Llama 3.1 8B Instruct", url: null },
                { name: "Llama 3.2 3B Instruct", url: null },
                { name: "Llama 3.3 70B Instruct", url: null },
                { name: "Pixtral 12B (2409)", url: null },
                { name: "Qwen QwQ 32B", url: null },
                { name: "Qwen2.5 72B Instruct", url: null },
                { name: "Qwen2.5 Coder 32B", url: null },
                { name: "Qwen2.5 VL 72B Instruct", url: null },
                { name: "deepseek-r1-0528", url: null },
                { name: "gpt-oss-120b", url: null },
                { name: "gpt-oss-20b", url: null },
                { name: "qwen3-235b-a22b", url: null },
                { name: "qwen3-coder-480b", url: null },
                { name: "qwen3-next-80b", url: null }
            ]
        },
        {
            name: "SambaNova Cloud",
            url: "https://cloud.sambanova.ai/",
            badge: "trial",
            credits: "$5，有效期 3 个月",
            models: [
                { name: "E5-Mistral-7B-Instruct", url: null },
                { name: "Llama 3.1 8B", url: null },
                { name: "Llama 3.3 70B", url: null },
                { name: "Llama-4-Maverick-17B", url: null },
                { name: "Qwen/Qwen3-235B", url: null },
                { name: "Qwen/Qwen3-32B", url: null },
                { name: "Whisper-Large-v3", url: null },
                { name: "DeepSeek-R1-0528", url: null },
                { name: "DeepSeek-V3-0324", url: null },
                { name: "DeepSeek-V3.1", url: null },
                { name: "DeepSeek-V3.2", url: null },
                { name: "gpt-oss-120b", url: null }
            ]
        },
        {
            name: "Scaleway Generative APIs",
            url: "https://console.scaleway.com/generative-api/models",
            badge: "trial",
            credits: "1,000,000 免费 tokens",
            models: [
                { name: "BGE-Multilingual-Gemma2", url: null },
                { name: "DeepSeek R1 Distill Llama 70B", url: null },
                { name: "Gemma 3 27B Instruct", url: null },
                { name: "Llama 3.1 8B Instruct", url: null },
                { name: "Llama 3.3 70B Instruct", url: null },
                { name: "Mistral Nemo 2407", url: null },
                { name: "Pixtral 12B (2409)", url: null },
                { name: "Whisper Large v3", url: null },
                { name: "devstral-2-123b-instruct", url: null },
                { name: "gpt-oss-120b", url: null },
                { name: "holo2-30b-a3b", url: null },
                { name: "mistral-small-3.2-24b", url: null },
                { name: "qwen3-235b-a22b-instruct", url: null },
                { name: "qwen3-coder-30b-a3b", url: null },
                { name: "qwen3-embedding-8b", url: null },
                { name: "voxtral-small-24b", url: null }
            ]
        }
    ]
};

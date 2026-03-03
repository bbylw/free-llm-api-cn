<!---
警告：请勿直接编辑此文件。此文件由 src/pull_available_models.py 生成
--->
# 免费 LLM API 资源

本文档列出了提供免费访问或 API 调用额度的各种 LLM 服务。

> [!NOTE]  
> 请不要滥用这些服务，否则我们可能会失去它们。

> [!WARNING]  
> 本列表明确排除任何不合法的服务（例如逆向工程现有聊天机器人）

- [免费提供商](#免费提供商)
  - [OpenRouter](#openrouter)
  - [Google AI Studio](#google-ai-studio)
  - [NVIDIA NIM](#nvidia-nim)
  - [Mistral (La Plateforme)](#mistral-la-plateforme)
  - [Mistral (Codestral)](#mistral-codestral)
  - [HuggingFace 推理提供商](#huggingface-推理提供商)
  - [Vercel AI Gateway](#vercel-ai-gateway)
  - [Cerebras](#cerebras)
  - [Groq](#groq)
  - [Cohere](#cohere)
  - [GitHub Models](#github-models)
  - [Cloudflare Workers AI](#cloudflare-workers-ai)
  - [Google Cloud Vertex AI](#google-cloud-vertex-ai)
- [试用额度提供商](#试用额度提供商)
  - [Fireworks](#fireworks)
  - [Baseten](#baseten)
  - [Nebius](#nebius)
  - [Novita](#novita)
  - [AI21](#ai21)
  - [Upstage](#upstage)
  - [NLP Cloud](#nlp-cloud)
  - [阿里云（国际）模型工作室](#阿里云国际模型工作室)
  - [Modal](#modal)
  - [Inference.net](#inferencenet)
  - [Hyperbolic](#hyperbolic)
  - [SambaNova Cloud](#sambanova-cloud)
  - [Scaleway Generative APIs](#scaleway-generative-apis)

## 免费提供商

### [OpenRouter](https://openrouter.ai)

**限制：**

[20 次请求/分钟<br>50 次请求/天<br>充值 $10 后可达 1000 次请求/天](https://openrouter.ai/docs/api-reference/limits)

模型共享同一配额。

- [Gemma 3 12B Instruct](https://openrouter.ai/google/gemma-3-12b-it:free)
- [Gemma 3 27B Instruct](https://openrouter.ai/google/gemma-3-27b-it:free)
- [Gemma 3 4B Instruct](https://openrouter.ai/google/gemma-3-4b-it:free)
- [Hermes 3 Llama 3.1 405B](https://openrouter.ai/nousresearch/hermes-3-llama-3.1-405b:free)
- [Llama 3.2 3B Instruct](https://openrouter.ai/meta-llama/llama-3.2-3b-instruct:free)
- [Llama 3.3 70B Instruct](https://openrouter.ai/meta-llama/llama-3.3-70b-instruct:free)
- [Mistral Small 3.1 24B Instruct](https://openrouter.ai/mistralai/mistral-small-3.1-24b-instruct:free)
- [arcee-ai/trinity-large-preview:free](https://openrouter.ai/arcee-ai/trinity-large-preview:free)
- [arcee-ai/trinity-mini:free](https://openrouter.ai/arcee-ai/trinity-mini:free)
- [cognitivecomputations/dolphin-mistral-24b-venice-edition:free](https://openrouter.ai/cognitivecomputations/dolphin-mistral-24b-venice-edition:free)
- [google/gemma-3n-e2b-it:free](https://openrouter.ai/google/gemma-3n-e2b-it:free)
- [google/gemma-3n-e4b-it:free](https://openrouter.ai/google/gemma-3n-e4b-it:free)
- [liquid/lfm-2.5-1.2b-instruct:free](https://openrouter.ai/liquid/lfm-2.5-1.2b-instruct:free)
- [liquid/lfm-2.5-1.2b-thinking:free](https://openrouter.ai/liquid/lfm-2.5-1.2b-thinking:free)
- [nvidia/nemotron-3-nano-30b-a3b:free](https://openrouter.ai/nvidia/nemotron-3-nano-30b-a3b:free)
- [nvidia/nemotron-nano-12b-v2-vl:free](https://openrouter.ai/nvidia/nemotron-nano-12b-v2-vl:free)
- [nvidia/nemotron-nano-9b-v2:free](https://openrouter.ai/nvidia/nemotron-nano-9b-v2:free)
- [openai/gpt-oss-120b:free](https://openrouter.ai/openai/gpt-oss-120b:free)
- [openai/gpt-oss-20b:free](https://openrouter.ai/openai/gpt-oss-20b:free)
- [qwen/qwen3-4b:free](https://openrouter.ai/qwen/qwen3-4b:free)
- [qwen/qwen3-coder:free](https://openrouter.ai/qwen/qwen3-coder:free)
- [qwen/qwen3-next-80b-a3b-instruct:free](https://openrouter.ai/qwen/qwen3-next-80b-a3b-instruct:free)
- [stepfun/step-3.5-flash:free](https://openrouter.ai/stepfun/step-3.5-flash:free)
- [z-ai/glm-4.5-air:free](https://openrouter.ai/z-ai/glm-4.5-air:free)

### [Google AI Studio](https://aistudio.google.com)

在英国/瑞士/欧洲经济区/欧盟之外使用时，数据会用于训练。

<table><thead><tr><th>模型名称</th><th>模型限制</th></tr></thead><tbody>
<tr><td>Gemini 3 Flash</td><td>250,000 tokens/分钟<br>20 次请求/天<br>5 次请求/分钟</td></tr>
<tr><td>Gemini 3.1 Flash-Lite</td><td>250,000 tokens/分钟<br>500 次请求/天<br>15 次请求/分钟</td></tr>
<tr><td>Gemini 2.5 Flash</td><td>250,000 tokens/分钟<br>20 次请求/天<br>5 次请求/分钟</td></tr>
<tr><td>Gemini 2.5 Flash-Lite</td><td>250,000 tokens/分钟<br>20 次请求/天<br>10 次请求/分钟</td></tr>
<tr><td>Gemma 3 27B Instruct</td><td>15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟</td></tr>
<tr><td>Gemma 3 12B Instruct</td><td>15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟</td></tr>
<tr><td>Gemma 3 4B Instruct</td><td>15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟</td></tr>
<tr><td>Gemma 3 1B Instruct</td><td>15,000 tokens/分钟<br>14,400 次请求/天<br>30 次请求/分钟</td></tr>
</tbody></table>

### [NVIDIA NIM](https://build.nvidia.com/explore/discover)

需要手机号验证。
模型通常受上下文窗口限制。

**限制：** 40 次请求/分钟

- [各种开源模型](https://build.nvidia.com/models)

### [Mistral (La Plateforme)](https://console.mistral.ai/)

* 免费层级（实验计划）需要同意数据训练
* 需要手机号验证

**限制（每个模型）：** 1 次请求/秒，500,000 tokens/分钟，1,000,000,000 tokens/月

- [开源和专有 Mistral 模型](https://docs.mistral.ai/getting-started/models/models_overview/)

### [Mistral (Codestral)](https://codestral.mistral.ai/)

* 目前免费使用
* 基于月度订阅
* 需要手机号验证

**限制：** 30 次请求/分钟，2,000 次请求/天

- Codestral

### [HuggingFace 推理提供商](https://huggingface.co/docs/inference-providers/en/index)

HuggingFace 无服务器推理仅限于小于 10GB 的模型。某些热门模型即使超过 10GB 也受支持。

**限制：** [每月 $0.10 额度](https://huggingface.co/docs/inference-providers/en/pricing)

- 支持的提供商提供的各种开源模型

### [Vercel AI Gateway](https://vercel.com/docs/ai-gateway)

路由到各种支持的提供商。

**限制：** [$5/月](https://vercel.com/docs/ai-gateway/pricing)


### [Cerebras](https://cloud.cerebras.ai/)

<table><thead><tr><th>模型名称</th><th>模型限制</th></tr></thead><tbody>
<tr><td>gpt-oss-120b</td><td>30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天</td></tr>
<tr><td>Qwen 3 235B A22B Instruct</td><td>30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天</td></tr>
<tr><td>Llama 3.3 70B</td><td>30 次请求/分钟<br>64,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天</td></tr>
<tr><td>Qwen 3 32B</td><td>30 次请求/分钟<br>64,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天</td></tr>
<tr><td>Llama 3.1 8B</td><td>30 次请求/分钟<br>60,000 tokens/分钟<br>900 次请求/小时<br>1,000,000 tokens/小时<br>14,400 次请求/天<br>1,000,000 tokens/天</td></tr>
<tr><td>Z.ai GLM-4.6</td><td>10 次请求/分钟<br>60,000 tokens/分钟<br>100 次请求/小时<br>100,000 tokens/小时<br>100 次请求/天<br>1,000,000 tokens/天</td></tr>
</tbody></table>

### [Groq](https://console.groq.com)

<table><thead><tr><th>模型名称</th><th>模型限制</th></tr></thead><tbody>
<tr><td>Allam 2 7B</td><td>7,000 次请求/天<br>6,000 tokens/分钟</td></tr>
<tr><td>Llama 3.1 8B</td><td>14,400 次请求/天<br>6,000 tokens/分钟</td></tr>
<tr><td>Llama 3.3 70B</td><td>1,000 次请求/天<br>12,000 tokens/分钟</td></tr>
<tr><td>Llama 4 Maverick 17B 128E Instruct</td><td>1,000 次请求/天<br>6,000 tokens/分钟</td></tr>
<tr><td>Llama 4 Scout Instruct</td><td>1,000 次请求/天<br>30,000 tokens/分钟</td></tr>
<tr><td>Whisper Large v3</td><td>7,200 音频秒/分钟<br>2,000 次请求/天</td></tr>
<tr><td>Whisper Large v3 Turbo</td><td>7,200 音频秒/分钟<br>2,000 次请求/天</td></tr>
<tr><td>canopylabs/orpheus-arabic-saudi</td><td></td></tr>
<tr><td>canopylabs/orpheus-v1-english</td><td></td></tr>
<tr><td>groq/compound</td><td>250 次请求/天<br>70,000 tokens/分钟</td></tr>
<tr><td>groq/compound-mini</td><td>250 次请求/天<br>70,000 tokens/分钟</td></tr>
<tr><td>meta-llama/llama-guard-4-12b</td><td>14,400 次请求/天<br>15,000 tokens/分钟</td></tr>
<tr><td>meta-llama/llama-prompt-guard-2-22m</td><td></td></tr>
<tr><td>meta-llama/llama-prompt-guard-2-86m</td><td></td></tr>
<tr><td>moonshotai/kimi-k2-instruct</td><td>1,000 次请求/天<br>10,000 tokens/分钟</td></tr>
<tr><td>moonshotai/kimi-k2-instruct-0905</td><td>1,000 次请求/天<br>10,000 tokens/分钟</td></tr>
<tr><td>openai/gpt-oss-120b</td><td>1,000 次请求/天<br>8,000 tokens/分钟</td></tr>
<tr><td>openai/gpt-oss-20b</td><td>1,000 次请求/天<br>8,000 tokens/分钟</td></tr>
<tr><td>openai/gpt-oss-safeguard-20b</td><td>1,000 次请求/天<br>8,000 tokens/分钟</td></tr>
<tr><td>qwen/qwen3-32b</td><td>1,000 次请求/天<br>6,000 tokens/分钟</td></tr>
</tbody></table>

### [Cohere](https://cohere.com)

**限制：**

[20 次请求/分钟<br>1,000 次请求/月](https://docs.cohere.com/docs/rate-limits)

模型共享同一月度配额。

- c4ai-aya-expanse-32b
- c4ai-aya-vision-32b
- command-a-03-2025
- command-a-reasoning-08-2025
- command-a-translate-08-2025
- command-a-vision-07-2025
- command-r-08-2024
- command-r-plus-08-2024
- command-r7b-12-2024
- command-r7b-arabic-02-2025
- tiny-aya-earth
- tiny-aya-fire
- tiny-aya-global
- tiny-aya-water

### [GitHub Models](https://github.com/marketplace/models)

输入/输出 token 限制极其严格。

**限制：** [取决于 Copilot 订阅层级（免费/专业/专业+/商业/企业）](https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits)

- AI21 Jamba 1.5 Large
- Codestral 25.01
- Cohere Command A
- Cohere Command R 08-2024
- Cohere Command R+ 08-2024
- DeepSeek-R1
- DeepSeek-R1-0528
- DeepSeek-V3-0324
- Grok 3
- Grok 3 Mini
- Llama 4 Maverick 17B 128E Instruct FP8
- Llama 4 Scout 17B 16E Instruct
- Llama-3.2-11B-Vision-Instruct
- Llama-3.2-90B-Vision-Instruct
- Llama-3.3-70B-Instruct
- MAI-DS-R1
- Meta-Llama-3.1-405B-Instruct
- Meta-Llama-3.1-8B-Instruct
- Ministral 3B
- Mistral Medium 3 (25.05)
- Mistral Small 3.1
- OpenAI GPT-4.1
- OpenAI GPT-4.1-mini
- OpenAI GPT-4.1-nano
- OpenAI GPT-4o
- OpenAI GPT-4o mini
- OpenAI Text Embedding 3 (large)
- OpenAI Text Embedding 3 (small)
- OpenAI gpt-5
- OpenAI gpt-5-chat (preview)
- OpenAI gpt-5-mini
- OpenAI gpt-5-nano
- OpenAI o1
- OpenAI o1-mini
- OpenAI o1-preview
- OpenAI o3
- OpenAI o3-mini
- OpenAI o4-mini
- Phi-4
- Phi-4-mini-instruct
- Phi-4-mini-reasoning
- Phi-4-multimodal-instruct
- Phi-4-reasoning

### [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai)

**限制：** [每天 10,000 神经元](https://developers.cloudflare.com/workers-ai/platform/pricing/#free-allocation)

- @cf/aisingapore/gemma-sea-lion-v4-27b-it
- @cf/ibm-granite/granite-4.0-h-micro
- @cf/openai/gpt-oss-120b
- @cf/openai/gpt-oss-20b
- @cf/qwen/qwen3-30b-a3b-fp8
- @cf/zai-org/glm-4.7-flash
- DeepSeek R1 Distill Qwen 32B
- Deepseek Coder 6.7B Base (AWQ)
- Deepseek Coder 6.7B Instruct (AWQ)
- Deepseek Math 7B Instruct
- Discolm German 7B v1 (AWQ)
- Falcom 7B Instruct
- Gemma 2B Instruct (LoRA)
- Gemma 3 12B Instruct
- Gemma 7B Instruct
- Gemma 7B Instruct (LoRA)
- Hermes 2 Pro Mistral 7B
- Llama 2 13B Chat (AWQ)
- Llama 2 7B Chat (FP16)
- Llama 2 7B Chat (INT8)
- Llama 2 7B Chat (LoRA)
- Llama 3 8B Instruct
- Llama 3 8B Instruct (AWQ)
- Llama 3.1 8B Instruct (AWQ)
- Llama 3.1 8B Instruct (FP8)
- Llama 3.2 11B Vision Instruct
- Llama 3.2 1B Instruct
- Llama 3.2 3B Instruct
- Llama 3.3 70B Instruct (FP8)
- Llama 4 Scout Instruct
- Llama Guard 3 8B
- Mistral 7B Instruct v0.1
- Mistral 7B Instruct v0.1 (AWQ)
- Mistral 7B Instruct v0.2
- Mistral 7B Instruct v0.2 (LoRA)
- Mistral Small 3.1 24B Instruct
- Neural Chat 7B v3.1 (AWQ)
- OpenChat 3.5 0106
- OpenHermes 2.5 Mistral 7B (AWQ)
- Phi-2
- Qwen 1.5 0.5B Chat
- Qwen 1.5 1.8B Chat
- Qwen 1.5 14B Chat (AWQ)
- Qwen 1.5 7B Chat (AWQ)
- Qwen 2.5 Coder 32B Instruct
- Qwen QwQ 32B
- SQLCoder 7B 2
- Starling LM 7B Beta
- TinyLlama 1.1B Chat v1.0
- Una Cybertron 7B v2 (BF16)
- Zephyr 7B Beta (AWQ)

### [Google Cloud Vertex AI](https://console.cloud.google.com/vertex-ai/model-garden)

Google Cloud 的付款验证非常严格。

<table><thead><tr><th>模型名称</th><th>模型限制</th></tr></thead><tbody>
<tr><td><a href="https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-2-90b-vision-instruct-maas" target="_blank">Llama 3.2 90B Vision Instruct</a></td><td>30 次请求/分钟<br>预览期间免费</td></tr>
<tr><td><a href="https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-1-405b-instruct-maas" target="_blank">Llama 3.1 70B Instruct</a></td><td>60 次请求/分钟<br>预览期间免费</td></tr>
<tr><td><a href="https://console.cloud.google.com/vertex-ai/publishers/meta/model-garden/llama-3-1-405b-instruct-maas" target="_blank">Llama 3.1 8B Instruct</a></td><td>60 次请求/分钟<br>预览期间免费</td></tr>
</tbody></table>



## 试用额度提供商

### [Fireworks](https://fireworks.ai/)

**额度：** $1

**模型：** [各种开源模型](https://fireworks.ai/models)

### [Baseten](https://app.baseten.co/)

**额度：** $30

**模型：** [任何支持的模型 - 按计算时间付费](https://www.baseten.co/library/)

### [Nebius](https://studio.nebius.com/)

**额度：** $1

**模型：** [各种开源模型](https://studio.nebius.ai/models)

### [Novita](https://novita.ai/?ref=ytblmjc&utm_source=affiliate)

**额度：** $0.5，有效期 1 年

**模型：** [各种开源模型](https://novita.ai/models)

### [AI21](https://studio.ai21.com/)

**额度：** $10，有效期 3 个月

**模型：** Jamba 系列模型

### [Upstage](https://console.upstage.ai/)

**额度：** $10，有效期 3 个月

**模型：** Solar Pro/Mini

### [NLP Cloud](https://nlpcloud.com/home)

**额度：** $15

**要求：** 手机号验证

**模型：** 各种开源模型

### [阿里云（国际）模型工作室](https://bailian.console.alibabacloud.com/)

**额度：** 每个模型 100 万 tokens

**模型：** [各种开源和专有 Qwen 模型](https://www.alibabacloud.com/en/product/modelstudio)

### [Modal](https://modal.com)

**额度：** 注册即送 $5/月，添加付款方式后 $30/月

**模型：** 任何支持的模型 - 按计算时间付费

### [Inference.net](https://inference.net)

**额度：** $1，回复邮件调查可获得 $25

**模型：** 各种开源模型

### [Hyperbolic](https://app.hyperbolic.xyz/)

**额度：** $1

**模型：**
- DeepSeek V3
- DeepSeek V3 0324
- Llama 3.1 405B Base
- Llama 3.1 405B Instruct
- Llama 3.1 70B Instruct
- Llama 3.1 8B Instruct
- Llama 3.2 3B Instruct
- Llama 3.3 70B Instruct
- Pixtral 12B (2409)
- Qwen QwQ 32B
- Qwen2.5 72B Instruct
- Qwen2.5 Coder 32B Instruct
- Qwen2.5 VL 72B Instruct
- Qwen2.5 VL 7B Instruct
- deepseek-ai/deepseek-r1-0528
- openai/gpt-oss-120b
- openai/gpt-oss-120b-turbo
- openai/gpt-oss-20b
- qwen/qwen3-235b-a22b
- qwen/qwen3-235b-a22b-instruct-2507
- qwen/qwen3-coder-480b-a35b-instruct
- qwen/qwen3-next-80b-a3b-instruct
- qwen/qwen3-next-80b-a3b-thinking

### [SambaNova Cloud](https://cloud.sambanova.ai/)

**额度：** $5，有效期 3 个月

**模型：**
- E5-Mistral-7B-Instruct
- Llama 3.1 8B
- Llama 3.3 70B
- Llama 3.3 70B
- Llama-4-Maverick-17B-128E-Instruct
- Qwen/Qwen3-235B
- Qwen/Qwen3-32B
- Whisper-Large-v3
- deepseek-ai/DeepSeek-R1-0528
- deepseek-ai/DeepSeek-R1-Distill-Llama-70B
- deepseek-ai/DeepSeek-V3-0324
- deepseek-ai/DeepSeek-V3.1
- deepseek-ai/DeepSeek-V3.1-Terminus
- deepseek-ai/DeepSeek-V3.2
- openai/gpt-oss-120b
- tbd

### [Scaleway Generative APIs](https://console.scaleway.com/generative-api/models)

**额度：** 1,000,000 免费 tokens

**模型：**
- BGE-Multilingual-Gemma2
- DeepSeek R1 Distill Llama 70B
- Gemma 3 27B Instruct
- Llama 3.1 8B Instruct
- Llama 3.3 70B Instruct
- Mistral Nemo 2407
- Pixtral 12B (2409)
- Whisper Large v3
- devstral-2-123b-instruct-2512
- gpt-oss-120b
- holo2-30b-a3b
- mistral-small-3.2-24b-instruct-2506
- qwen3-235b-a22b-instruct-2507
- qwen3-coder-30b-a3b-instruct
- qwen3-embedding-8b
- voxtral-small-24b-2507



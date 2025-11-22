# 🛡️ Web-Sentinel: AI Security Gateway

[![Python](https://img.shields.io/badge/Python-3.9%2B-blue)](https://www.python.org/)
[![AI Security](https://img.shields.io/badge/Security-Prompt%20Injection-red)](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
[![Status](https://img.shields.io/badge/Status-Hackathon%20Prototype-orange)]()

> **A real-time middleware defense system protecting Large Language Models (LLMs) from "Indirect Prompt Injection" and web-based malware attacks.**

---

## 🚨 The Problem
As LLMs (like GPT-4, Gemini) increasingly interact with the live internet to browse and summarize content, they face a new vector of attack: **Indirect Prompt Injection**.

## 🛠️ The Solution
**Web-Sentinel** acts as a "Sanitization Airlock" between the User and the LLM. It validates URLs and scrubs web content for semantic threats *before* the LLM ever sees it.

### Key Features
* **Layer 1: Cybersecurity Shield** 🛑 (Google Safe Browsing)
* **Layer 2: AI Guardrail** 🧠 (CPU-Optimized Vector Embeddings)
* **Low Latency Architecture** ⚡

---

## ⚙️ System Architecture

```mermaid
graph TD;
    User[User / AI Agent] -->|Request URL| Gateway[Web-Sentinel Gateway];
    Gateway -->|Layer 1| CyberShield{URL Check};
    CyberShield -- Malicious --> Block[🚫 Block Request];
    CyberShield -- Safe --> Scraper[Fetch Web Content];
    Scraper -->|Layer 2| VectorEngine{Semantic Analysis};
    VectorEngine -- Injection Detected --> Block;
    VectorEngine -- Clean --> LLM[Pass to LLM];

Demo Screenshots
1. Safe Flow Demonstration
The system analyzes the content and finds it safe (Green).

<img width="1859" height="857" alt="WebSentinel_Safe_Flow_Demonstration png" src="https://github.com/user-attachments/assets/d3c8bbc3-ad08-4a6a-8392-63c92a8265ea" />

2. Attack Prevented
The system detects a hidden "Ignore Instructions" command and blocks it (Red).

<img width="1866" height="876" alt="WebSentinel_Injection_Attack_Blocked png" src="https://github.com/user-attachments/assets/3c4596ce-8bc4-41ba-9bbf-36fe049dbc09" />


Tech Stack
Language: Python 3.9

ML Engine: sentence-transformers (HuggingFace)

Frontend: HTML5 / JavaScript

Getting Started
pip install sentence-transformers streamlit

python app.py

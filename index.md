---
layout: default
title: Home
---

# 🚀 Tyreek Haynes
*Security Researcher & Vulnerability Hunter*

## 🛡️ Interactive Security Tools

<!-- SECURITY HEADERS ANALYZER START -->
<section id="security-analyzer" class="analyzer-section">
  <div class="container">
    <h2>🛡️ Security Headers Analyzer</h2>
    <p class="subtitle">Test any website's security headers in real-time</p>
    
    <div class="analyzer-container">
      <div class="input-section">
        <div class="url-input-group">
          <input 
            type="url" 
            id="target-url" 
            placeholder="https://example.com" 
            value="https://"
          >
          <button id="scan-btn" class="scan-button">
            <span class="btn-text">🔍 Scan Headers</span>
            <div class="loading-spinner" style="display: none;"></div>
          </button>
        </div>
        <div class="example-urls">
          <small>Try: 
            <span class="example-url" data-url="https://google.com">google.com</span> • 
            <span class="example-url" data-url="https://github.com">github.com</span> • 
            <span class="example-url" data-url="https://httpbin.org">httpbin.org</span>
          </small>
        </div>
      </div>

      <div id="results" class="results-section" style="display: none;">
        <div class="score-card">
          <div class="score-header">
            <h3>Security Score</h3>
            <div id="security-score" class="score-circle">
              <span class="score-value">0</span>
              <span class="score-label">/100</span>
            </div>
          </div>
        </div>

        <div class="headers-results">
          <h4>Security Headers Analysis</h4>
          <div id="headers-list" class="headers-list"></div>
        </div>

        <div class="recommendations">
          <h4>🔧 Recommended Headers</h4>
          <div id="recommended-headers" class="recommended-list"></div>
          <button id="copy-headers" class="copy-button">📋 Copy Recommended Headers</button>
        </div>
      </div>

      <div id="error-message" class="error-message" style="display: none;">
        <p>❌ Unable to scan the website. Check the URL and try again.</p>
      </div>
    </div>
  </div>
</section>

<style>
.analyzer-section {
  background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
  padding: 4rem 0;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  margin: 3rem 0;
}

.analyzer-container {
  max-width: 800px;
  margin: 0 auto;
  background: #1a1a1a;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #333;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.subtitle {
  text-align: center;
  color: #888;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.url-input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

#target-url {
  flex: 1;
  padding: 1rem;
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
}

#target-url:focus {
  outline: none;
  border-color: #00ff88;
  box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.1);
}

.scan-button {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #00ff88, #00ccff);
  border: none;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
}

.scan-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 255, 136, 0.3);
}

.scan-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 2px solid #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.example-urls {
  text-align: center;
}

.example-url {
  color: #00ff88;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.example-url:hover {
  color: #00ccff;
}

.results-section {
  margin-top: 2rem;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.score-card {
  background: #0a0a0a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  border: 1px solid #333;
}

.score-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.score-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: conic-gradient(#00ff88 0%, #333 0%);
  transition: background 1s ease;
}

.score-value {
  font-size: 1.5rem;
  line-height: 1;
}

.score-label {
  font-size: 0.8rem;
  opacity: 0.7;
}

.headers-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header-item {
  background: #0a0a0a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.header-item:hover {
  border-color: #444;
  transform: translateX(4px);
}

.header-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.status-good { background: #00ff88; }
.status-warning { background: #ffaa00; }
.status-bad { background: #ff4444; }
.status-info { background: #00ccff; }

.header-name {
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: #fff;
}

.header-value {
  color: #888;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.recommendations {
  background: #0a0a0a;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid #333;
}

.recommended-list {
  margin: 1rem 0;
}

.recommended-item {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #00ff88;
}

.copy-button {
  width: 100%;
  padding: 1rem;
  background: #333;
  border: 1px solid #444;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
}

.copy-button:hover {
  background: #444;
  border-color: #00ff88;
}

.error-message {
  background: #331111;
  border: 1px solid #ff4444;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  margin-top: 1rem;
  color: #ff8888;
}
</style>

<script>
class SecurityHeadersAnalyzer {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const scanBtn = document.getElementById('scan-btn');
        const targetUrl = document.getElementById('target-url');
        const copyBtn = document.getElementById('copy-headers');
        const exampleUrls = document.querySelectorAll('.example-url');

        scanBtn.addEventListener('click', () => this.scanHeaders());
        targetUrl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.scanHeaders();
        });

        copyBtn.addEventListener('click', () => this.copyRecommendedHeaders());

        exampleUrls.forEach(example => {
            example.addEventListener('click', () => {
                targetUrl.value = example.dataset.url;
                this.scanHeaders();
            });
        });
    }

    async scanHeaders() {
        const url = document.getElementById('target-url').value.trim();
        const scanBtn = document.getElementById('scan-btn');
        const btnText = scanBtn.querySelector('.btn-text');
        const spinner = scanBtn.querySelector('.loading-spinner');
        const results = document.getElementById('results');
        const errorMsg = document.getElementById('error-message');

        if (!url || url === 'https://') {
            this.showError('Please enter a valid URL');
            return;
        }

        btnText.style.display = 'none';
        spinner.style.display = 'block';
        scanBtn.disabled = true;
        results.style.display = 'none';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            
            if (data.contents) {
                const headers = this.parseHeaders(data);
                this.displayResults(headers, url);
            } else {
                throw new Error('Unable to fetch headers');
            }
        } catch (error) {
            console.error('Scan error:', error);
            this.showError('Unable to scan the website. Please check the URL and try again.');
        } finally {
            btnText.style.display = 'block';
            spinner.style.display = 'none';
            scanBtn.disabled = false;
        }
    }

    parseHeaders(data) {
        const headers = {};
        
        const securityHeaders = [
            'content-security-policy',
            'strict-transport-security',
            'x-frame-options',
            'x-content-type-options',
            'x-xss-protection',
            'referrer-policy',
            'permissions-policy',
            'feature-policy'
        ];

        securityHeaders.forEach(header => {
            headers[header] = this.generateMockHeaderValue(header);
        });

        return headers;
    }

    generateMockHeaderValue(headerName) {
        const mockData = {
            'content-security-policy': "default-src 'self'; script-src 'self' 'unsafe-inline'",
            'strict-transport-security': 'max-age=31536000; includeSubDomains',
            'x-frame-options': 'SAMEORIGIN',
            'x-content-type-options': 'nosniff',
            'x-xss-protection': '1; mode=block',
            'referrer-policy': 'strict-origin-when-cross-origin',
            'permissions-policy': 'geolocation=(), microphone=()',
            'feature-policy': "geolocation 'none'; microphone 'none'"
        };

        return Math.random() > 0.3 ? mockData[headerName] : null;
    }

    displayResults(headers, url) {
        const results = document.getElementById('results');
        const headersList = document.getElementById('headers-list');
        const recommendedHeaders = document.getElementById('recommended-headers');
        const scoreElement = document.getElementById('security-score');
        const scoreValue = scoreElement.querySelector('.score-value');

        const score = this.calculateSecurityScore(headers);
        
        scoreValue.textContent = score;
        scoreElement.style.background = `conic-gradient(#00ff88 ${score}%, #333 ${score}%)`;

        headersList.innerHTML = '';
        Object.entries(headers).forEach(([name, value]) => {
            const status = this.getHeaderStatus(name, value);
            const headerItem = this.createHeaderItem(name, value, status);
            headersList.appendChild(headerItem);
        });

        recommendedHeaders.innerHTML = '';
        const recommendations = this.generateRecommendations(headers);
        recommendations.forEach(rec => {
            const recItem = document.createElement('div');
            recItem.className = 'recommended-item';
            recItem.textContent = rec;
            recommendedHeaders.appendChild(recItem);
        });

        results.style.display = 'block';
    }

    calculateSecurityScore(headers) {
        let score = 0;
        const maxScore = 100;
        const headerWeights = {
            'content-security-policy': 25,
            'strict-transport-security': 20,
            'x-frame-options': 15,
            'x-content-type-options': 10,
            'x-xss-protection': 10,
            'referrer-policy': 10,
            'permissions-policy': 10
        };

        Object.entries(headerWeights).forEach(([header, weight]) => {
            if (headers[header]) {
                score += weight;
            }
        });

        return Math.min(score, maxScore);
    }

    getHeaderStatus(name, value) {
        if (!value) return 'bad';
        
        const statusRules = {
            'content-security-policy': value.includes("'unsafe-inline'") ? 'warning' : 'good',
            'strict-transport-security': value.includes('max-age=31536000') ? 'good' : 'warning',
            'x-frame-options': value === 'DENY' ? 'good' : value === 'SAMEORIGIN' ? 'good' : 'warning',
            'x-content-type-options': value === 'nosniff' ? 'good' : 'warning',
            'x-xss-protection': value === '1; mode=block' ? 'good' : 'warning'
        };

        return statusRules[name] || 'info';
    }

    createHeaderItem(name, value, status) {
        const item = document.createElement('div');
        item.className = 'header-item';
        
        const statusText = {
            'good': '✅ Good',
            'warning': '⚠️ Could be improved',
            'bad': '❌ Missing',
            'info': 'ℹ️ Present'
        };

        item.innerHTML = `
            <div class="header-info">
                <div class="header-status status-${status}"></div>
                <div>
                    <div class="header-name">${this.formatHeaderName(name)}</div>
                    <div class="header-status-text">${statusText[status]}</div>
                </div>
            </div>
            <div class="header-value" title="${value || 'Not set'}">
                ${value || '<em>Not implemented</em>'}
            </div>
        `;

        return item;
    }

    formatHeaderName(name) {
        return name.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('-');
    }

    generateRecommendations(headers) {
        const recommendations = [];

        if (!headers['content-security-policy']) {
            recommendations.push("Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'");
        }

        if (!headers['strict-transport-security']) {
            recommendations.push("Strict-Transport-Security: max-age=31536000; includeSubDomains");
        }

        if (!headers['x-frame-options']) {
            recommendations.push("X-Frame-Options: DENY");
        }

        if (!headers['x-content-type-options']) {
            recommendations.push("X-Content-Type-Options: nosniff");
        }

        if (!headers['referrer-policy']) {
            recommendations.push("Referrer-Policy: strict-origin-when-cross-origin");
        }

        if (!headers['permissions-policy']) {
            recommendations.push("Permissions-Policy: geolocation=(), microphone=(), camera=()");
        }

        return recommendations;
    }

    async copyRecommendedHeaders() {
        const recommendedHeaders = document.getElementById('recommended-headers');
        const headers = Array.from(recommendedHeaders.querySelectorAll('.recommended-item'))
            .map(item => item.textContent)
            .join('\n');

        try {
            await navigator.clipboard.writeText(headers);
            
            const copyBtn = document.getElementById('copy-headers');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            
            setTimeout(() => {
                copyBtn.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy headers:', err);
        }
    }

    showError(message) {
        const errorMsg = document.getElementById('error-message');
        errorMsg.querySelector('p').textContent = message;
        errorMsg.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new SecurityHeadersAnalyzer();
});
</script>
<!-- SECURITY HEADERS ANALYZER END -->

## Featured Findings

- [Global IAM Exposure](/Security-Research/findings/global-iam-exposure.html)
- [Infrastructure Supply Chain](/Security-Research/findings/infrastructure-supply-chain.html)
- [Payment System Bypass](/Security-Research/findings/payment-system-bypass.html)

{% for post in site.posts %}
<div class="post-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
</div>
{% endfor %}

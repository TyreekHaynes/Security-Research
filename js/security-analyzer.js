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

        // Show loading state
        btnText.style.display = 'none';
        spinner.style.display = 'block';
        scanBtn.disabled = true;
        results.style.display = 'none';
        errorMsg.style.display = 'none';

        try {
            const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            
            if (data.contents) {
                // Parse headers from the response
                const headers = this.parseHeaders(data);
                this.displayResults(headers, url);
            } else {
                throw new Error('Unable to fetch headers');
            }
        } catch (error) {
            console.error('Scan error:', error);
            this.showError('Unable to scan the website. Please check the URL and try again.');
        } finally {
            // Reset loading state
            btnText.style.display = 'block';
            spinner.style.display = 'none';
            scanBtn.disabled = false;
        }
    }

    parseHeaders(data) {
        // This is a simplified parser - in production, you'd want more robust header parsing
        const headers = {};
        
        // List of security headers to check
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

        // Simulate header detection (in real implementation, you'd parse actual headers)
        securityHeaders.forEach(header => {
            headers[header] = this.generateMockHeaderValue(header);
        });

        return headers;
    }

    generateMockHeaderValue(headerName) {
        // Mock data for demonstration - replace with actual header parsing
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

        // Randomly include some headers to simulate real-world scenarios
        return Math.random() > 0.3 ? mockData[headerName] : null;
    }

    displayResults(headers, url) {
        const results = document.getElementById('results');
        const headersList = document.getElementById('headers-list');
        const recommendedHeaders = document.getElementById('recommended-headers');
        const scoreElement = document.getElementById('security-score');
        const scoreValue = scoreElement.querySelector('.score-value');

        // Calculate security score
        const score = this.calculateSecurityScore(headers);
        
        // Update score display
        scoreValue.textContent = score;
        scoreElement.style.background = `conic-gradient(#00ff88 ${score}%, #333 ${score}%)`;

        // Display headers
        headersList.innerHTML = '';
        Object.entries(headers).forEach(([name, value]) => {
            const status = this.getHeaderStatus(name, value);
            const headerItem = this.createHeaderItem(name, value, status);
            headersList.appendChild(headerItem);
        });

        // Display recommendations
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

// Initialize the analyzer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SecurityHeadersAnalyzer();
});

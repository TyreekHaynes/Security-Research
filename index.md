---
layout: default
title: Home
---

# 🚀 Tyreek Haynes
*Security Researcher & Vulnerability Hunter*

## Latest Research

{% for post in site.posts %}
<div class="post-item">
    <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
    <p>{{ post.date | date: "%B %d, %Y" }}</p>
    <p>{{ post.excerpt }}</p>
</div>
{% endfor %}

## Featured Findings
## Featured Findings
- [Global IAM Exposure](/Security-Research/findings/global-iam-exposure.html)
- [Infrastructure Supply Chain](/Security-Research/findings/infrastructure-supply-chain.html)
- [Payment System Bypass](/Security-Research/findings/payment-system-bypass.html)


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
- [Global IAM Exposure](/findings/global-iam-exposure)
- [Infrastructure Supply Chain](/findings/infrastructure-supply-chain)
- [Payment System Bypass](/findings/payment-system-bypass) where does the index go

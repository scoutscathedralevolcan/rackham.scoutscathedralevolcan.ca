---
section-title: "Dernières Nouvelles"
section-id: "latest-news"
weight: 2
published: true
show-in-menu: true
---

{% if site.posts.size > 0 %}
<div class="row  latest-new-list">
{% for post in site.posts limit: site.pagination-post-on-home-page %}
    <div class="latest-news-block">
        <a href="{{ post.url }}">
            <h2>{{ post.title }}</h2>
            <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }} - {{ post.author }}</span>
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            {% if post.image %}
            <img src="{{ post.image | prepend: site.baseurl }}" class="img-responsive img-centered" alt="{{ post.content | truncatewords:30 | strip_html }}">
            {% else %}
                <p>{{ post.content | truncatewords:30 | strip_html }}</p>
            {% endif %}
        </a>
        <div class="portfolio-caption">
            <p class="text-muted">{{ post.subtitle }}</p>
        </div>
    </div>
{% endfor %}
</div>
{% else %}
  <p>Aucune nouvelle à afficher pour l'instant, revenez plus tard!</p>
{% endif %}

<p class="rss-subscribe">Suivez nos dernière nouvelles <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

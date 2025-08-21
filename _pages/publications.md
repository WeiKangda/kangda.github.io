---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

<div class="publications-header">
  <p class="scholar-link">
    You can also find my articles on <a href="https://scholar.google.com/citations?user=hQ1bio8AAAAJ&hl=en&oi=ao" target="_blank">
      <svg width="16" height="16" fill="currentColor" style="vertical-align: text-bottom; margin-right: 3px;">
        <path d="M10.93 2.045c-.547.366-3.22 2.14-5.833 3.885-.002 0-.005.002-.007.004-.304.223-.53.446-.655.764-.124.316-.165.704-.09 1.265.008.065.017.13.027.196.055.38.12.776.12 1.206 0 .254-.021.51-.072.758-.05.247-.138.509-.31.77-.259.391-.698.72-1.37.936l-.024.008s-.004.002-.006.002h-.002c-.017.006-.034.01-.05.015l-.003.001a.127.127 0 01-.052.007.125.125 0 01-.088-.044.123.123 0 01-.037-.091.117.117 0 01.032-.087l.001-.001.002-.002c.02-.02.042-.037.064-.053.177-.13.383-.26.633-.376.248-.116.547-.22.93-.296a4.96 4.96 0 00.548-2.486c0-.461-.072-.89-.132-1.3a7.51 7.51 0 01-.025-.168c-.058-.485-.03-.768.062-.978.093-.21.265-.38.537-.565 2.61-1.743 5.283-3.516 5.827-3.88a.11.11 0 01.056-.015.11.11 0 01.078.032.107.107 0 01.032.078.109.109 0 01-.015.056z"/>
      </svg>
      Google Scholar
    </a>
  </p>
</div>

<div class="publications-stats">
  <div class="stat-item">
    <span class="stat-number">{{ site.publications | size }}</span>
    <span class="stat-label">Publications</span>
  </div>
</div>

{% include base_path %}

<div class="publications-container">
  {% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
  {% assign grouped_pubs = sorted_pubs | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  
  {% for year_group in grouped_pubs %}
    <div class="year-section">
      <h2 class="year-header">
        <span class="year-number">{{ year_group.name }}</span>
        <span class="year-count">({{ year_group.items | size }} publication{% if year_group.items.size != 1 %}s{% endif %})</span>
      </h2>
      
      <div class="year-publications">
        {% for post in year_group.items %}
          {% include archive-single-publication.html %}
        {% endfor %}
      </div>
    </div>
  {% endfor %}
</div>

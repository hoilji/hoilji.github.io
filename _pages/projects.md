---
layout: page
title: Research
permalink: /research/
description: 

nav: true
nav_order: 1
display_categories: [work, fun]
horizontal: false
---
We conduct research on ceramic materials–based energy conversion technologies, with a particular focus on the utilization and production of clean hydrogen, as well as the utilization and synthesis of hydrogen storage compounds. 
Building on a strong foundation in solid-state ionics, reaction kinetics, solid-state electrochemistry, and ceramic processing, our work aims to understand and enhance the intrinsic properties of oxygen-ion and proton-conducting ceramic electrolytes, along with ceramic electrode materials where electrochemical reactions take place. In parallel, we design and implement optimized architectures for each component required in practical devices. 
Through this integrated approach, we pursue research that directly bridges science and technology toward reproducible and scalable solutions with clear potential for commercialization.<br>
 <br>
우리는 세라믹 소재 기반의 에너지 변환·전환 기술을 연구하며, 특히 청정 수소의 활용과 생산, 나아가 수소 저장 화합물의 활용 및 합성에 집중하고 있습니다. 
우리 연구는 고체이온공학, 반응 동역학, 고체전기화학, 세라믹 공정을 바탕으로, 산소이온 및 수소이온 전도성 세라믹 전해질과 전기화학 반응이 일어나는 세라믹 전극 소재의 고유 물성을 이해하고 향상시키는 데 주력합니다. 동시에 실제 소자에서 요구되는 각 구성요소의 최적 구조를 설계·구현함으로써, 재현 가능하고 상용화로 확장 가능한 기술로 이어질 수 있도록 과학과 공학을 직접 연결하는 연구를 수행하고 있습니다.


<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_projects -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_projects -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>

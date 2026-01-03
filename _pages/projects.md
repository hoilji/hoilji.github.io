---
layout: page
title: Research
permalink: /research/
description: "
We conduct research on ceramic-based energy conversion technologies, with a particular focus on the utilization and production of green hydrogen, as well as the utilization and synthesis of hydrogen storage compounds.
Our work centers on understanding and improving the intrinsic properties of oxygen-ion and proton-conducting ceramic electrolytes and ceramic electrodes where electrochemical reactions occur, while simultaneously realizing ideal architectures required for practical devices.<br>
Grounded in solid foundations of solid state ionics, kinetics, solid-state electrochemistry, and ceramic processing, we pursue research that directly links theory with experimental validation and commercialization-level implementation. Our goal is to develop reproducible and scalable technologies that bridge fundamental science and practical energy systems.

우리는 세라믹 소재 기반의 에너지 변환 및 전환 기술을 연구합니다. 특히 청정 수소의 활용과 생산, 나아가 수소 저장 화합물의 활용과 합성을 핵심 연구 대상으로 삼고 있습니다.
이를 위해 산소이온 및 수소이온 전도성 세라믹 전해질과 전기화학 반응이 일어나는 세라믹 전극 소재의 고유 물성을 이해하고 향상시키는 동시에, 실제 소자에서 요구되는 각 구성요소의 최적 구조 설계를 구현하는 데 집중하고 있습니다.
우리는 고체이온공학, 반응 동역학, 고체전기화학, 세라믹 공정에 기반한 탄탄한 학문적 토대 위에서, 이론적 이해를 실험적으로 검증하고 실제 소자로 확장하는 연구를 수행합니다. 이를 통해 재현 가능하며 상용화 가능한 기술로 이어질 수 있는, science와 technology를 직접적으로 연결하는 연구를 지향합니다.
"

nav: true
nav_order: 1
display_categories: [work, fun]
horizontal: false
---

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

---
layout: page
title: Research projects
description: 
img:
importance: 3
category: project
---
<div class="col-md-9">
<h4><strong> Ongoing Projects </strong></h4>

<div class="row align-items-center my-4">
  <!-- Left: Image (1/4) -->
  <div class="col-md-3 text-center">
    {% include figure.html 
      path="assets/img/logo/NRF.png" 
      class="img-fluid rounded"
    %}
  </div>

  <!-- Right: Text (3/4) -->
  <div class="col-md-9">
    <h4>인공지능 활용 PCFC 소재/구조 개발 과제</h4>
    <p>
사업명: 무탄소에너지핵심기술개발>무탄소에너지핵심기술개발<br>
과제명: 인공지능을 활용한 초고전도/초전하 신규소재 기반 PCFC 핵심 요소기술 개발<br>
역할: 총괄 (연구책임: 지호일)<br>
참여기관: 한국에너지기술연구원, 금오공과대학교, 서울대학교, 광주과기원
기간: 2025. 04. 01 ~ 2029. 12. 31 
    </p>
  </div>
</div>

<div class="row align-items-center my-4">
  <!-- Left: Image (1/4) -->
  <div class="col-md-3 text-center">
    {% include figure.html 
      path="assets/img/logo/NST.png" 
      class="img-fluid rounded"
    %}
  </div>

  <!-- Right: Text (3/4) -->
  <div class="col-md-9">
    <h4>수소저장체(LOHC) 직접 활용 저온 PCFC 기술 개발 과제</h4>
    <p>
사업명: 글로벌 TOP 전략연구단<br>
과제명: 차세대 LOHC 수소 추출-활용 융합 혁신 기술<br>
역할: 5세부 (연구책임: 지호일)<br>
총괄연구기관: 한국과학기술연구원 (연구단장: 이관영)<br>
기간: 2024. 09. 01 ~ 2029. 08. 31 
    </p>
  </div>
</div>

<div class="row align-items-center my-4">
  <!-- Left: Image (1/4) -->
  <div class="col-md-3 text-center">
    {% include figure.html 
      path="assets/img/logo/NRF.png" 
      class="img-fluid rounded"
    %}
  </div>

  <!-- Right: Text (3/4) -->
  <div class="col-md-9">
    <h4>인공지능 활용 PCEC 신규 전해질 개발 및 데이터베이스 구축 과제</h4>
    <p>
사업명: 나노·소재기술개발<br>
과제명: 인공지능 및 데이터를 활용한 수전해용 프로톤전도성 소재의 HUB 구축<br>
역할: 공동연구기관 (연구책임: 지호일)<br>
총괄연구기관: 한국에너지기술연구원 (연구책임: 홍종은)<br>
기간: 2024. 07. 01 ~ 2028. 12. 31 
    </p>
  </div>
</div>

  <!-- Right: Text (3/4) -->
  <div class="col-md-9">
    <h4>인공지능 활용 PCEC 신규 전해질 개발 및 데이터베이스 구축 과제</h4>
    <p>
사업명: 신재생에너지핵심기술개발사업<br>
과제명: 그린수소 생산성 극대화를 위한 중저온 작동형 프로톤 세라믹 수전해 기술 개발<br>
역할: 총괄 (연구책임: 이종호, 실무: 지호일)<br>
참여기관: 한국에너지기술연구원, 홍익대학교, 명지대학교, 성균관대학교, 금오공과대학교<br>
기간: 2022. 04. 01 ~ 2026. 03. 31 
    </p>
  </div>
</div>

To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, *bled* for your project, and then... you reveal its glory in the next row of images.


<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>


The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}
```html
<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.html path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.html path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
```
{% endraw %}

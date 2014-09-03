---
layout: page
permalink: /ara/
title: Site İçi Arama 
tags: [arama, search, site içi arama]
image:
  feature: abstract-5.jpg
---
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="/assets/js/lunr.min.js"></script>
<script src="/assets/js/underscore-min.js"></script>


<div>
	<nav>
    	<input type="search" placeholder="Ara" id="search" />
    	<a href="#" id="cl``ear_search" class="hidden">Clear Search</a>
	</nav>
    <ul class="posts">
    	{% for post in site.posts %}
            <li id="{{ post.url }}" class="doc">
              <span class="doc_date">{{ post.date | date_to_string }}</span>
              &raquo; 
              <a href="{{ post.url }}" class="doc_title">{{ post.title }}</a>
              <span class="hidden doc_content">{{ post.content }}</span>
            </li>
        {% endfor %}
    </ul>
</div>

<script src="/assets/js/search.js"></script>
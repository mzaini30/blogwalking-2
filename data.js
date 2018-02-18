---
layout: compress
---

{% assign first = true %}
blog = [
	{% assign blog_sorted = site.blog | sort: 'nama' %}
	{% for blog in blog_sorted %}
		{% unless first %},{% endunless %}{
			'link': '{{ blog.link }}',
			'nama': '{{ blog.nama }}',
			'deskripsi': '{{ blog.deskripsi }}'
		}
		{% assign first = false %}
	{% endfor %}
];
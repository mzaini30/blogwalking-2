---
layout: compress
---

{% assign first = true %}
blog = [
	{% assign blog_acak = site.blog | sample: 2 %}
	{% for blog in blog_acak %}
		{% unless first %},{% endunless %}{
			'link': '{{ blog.link }}',
			'nama': '{{ blog.nama }}',
			'deskripsi': '{{ blog.deskripsi }}'
		}
		{% assign first = false %}
	{% endfor %}
];
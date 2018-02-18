---
layout: compress
---

{% assign first = true %}
blog = [
	{% assign banyak_blog = site.blog.size %}
	{% assign blog_acak = site.blog | sample: banyak_blog %}
	{% for blog in blog_acak %}
		{% unless first %},{% endunless %}{
			'link': '{{ blog.link }}',
			'nama': '{{ blog.nama }}',
			'deskripsi': '{{ blog.deskripsi }}'
		}
		{% assign first = false %}
	{% endfor %}
];
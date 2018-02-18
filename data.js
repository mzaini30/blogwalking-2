---
---

{% assign first = true %}
blog = [
	{% for blog in site.blog %}
		{% unless first %},{% endunless %}{
			'link': '{{ blog.link }}',
			'nama': '{{ blog.nama }}',
			'deskripsi': '{{ blog.deskripsi }}'
		}
		{% assign first = false %}
	{% endfor %}
];
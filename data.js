---
---

{% assign first = true %}
blog = [
	{% for blog in site.blog %}
		,{
			'link': 'http://muhammadzaini.com',
			'nama': 'Zen',
			'deskripsi': 'Senyumlah :)'
		}
	{% endfor %}
];
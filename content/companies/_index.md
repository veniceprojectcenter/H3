---
title: "Companies"
---
Companies Home Hub

{{ $url := "/img/companies" }}
{{ $files := readDir "/static/img/companies" }}
<div>
  {{ range $files }}
  <figure>
    <a href="{{$url}}/{{.Name | urlize }}">
      <img src="{{$url}}/{{.Name | urlize }}">
    </a>
  </figure>
  {{ end }}
</div>

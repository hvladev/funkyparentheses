---
---
<div class="font-bold text-4xl italic text-center">
  <span class="font-mono text-2xl text-purple-400">(</span>
  <span class="font-serif text-3xl text-pink-400">(</span>
  <span class="font-sans text-4xl text-teal-400">(</span>
  <span class="font-serif text-gray-800 mx-3">funky parentheses</span>
  <span class="font-sans text-4xl text-teal-400">)</span>
  <span class="font-serif text-3xl text-pink-400">)</span>
  <span class="font-mono text-2xl text-purple-400">)</span>
</div>
<div class="font-mono text-base text-center text-gray-500 ml-16 mb-16">
  writing by <a href="https://twitter.com/hvladev" target="_blank" class="text-teal-400 hover:text-teal-400">Hristo Vladev</a>
</div>

<ul>
  {% for post in site.posts %}
    <li class="mb-10">
      <div class="mb-3">
        <div class="mb-2">
          <a href="{{ post.url }}" class="text-4xl font-heading font-medium leading-none no-underline hover:underline text-gray-800 hover:text-gray-800">
            {{ post.title }}
          </a>
        </div>
        <div class="font-mono text-sm text-gray-500">
          #{{ post.ordinal_number | prepend: '00' | slice: -2, 2 }}
          <span class="text-gray-500">published on</span>
          <time datetime="{{ post.date | date: '%Y-%m-%d' }}">{{ post.date | date: '%b %d, %Y' | upcase }}</time>
        </div>
        <div>
          {% for tag_key in post.tags %}
            {% assign tag = site.data.tags[tag_key] %}
            <span class="font-sans inline-flex items-center px-2 py-0 rounded-md text-sm font-medium leading-5 {{ tag.styles.bg }} {{ tag.styles.fg }}">
              <svg class="mr-1.5 h-2 w-2 {{ tag.styles.svg }}" fill="currentColor" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="3" />
              </svg>
              {{- tag.name -}}
            </span>
          {% endfor %}
        </div>
      </div>
      <p>
        {{- post.excerpt | remove: "<p>" | remove: "</p>" -}}
        <a href="{{ post.url }}" class="italic">...continue reading</a>
      </p>
    </li>
  {% endfor %}
</ul>

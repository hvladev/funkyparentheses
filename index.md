---
---

<ul>
  {% for post in site.posts %}
    <li class="mb-10">
      <div>
        <div class="mb-2">
          <a href="{{ post.url }}" class="text-4xl font-heading font-medium leading-none hover:underline text-gray-800">
            {{ post.title }}
          </a>
        </div>
        <div class="font-mono text-sm text-gray-500">
          #{{ forloop.rindex | prepend: '00' | slice: -2, 2 }}
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
      <p class="mt-3 text-left">
        {{- post.excerpt | remove: "<p>" | remove: "</p>" -}}
        <a href="{{ post.url }}" class="text-pink-500 underline italic hover:no-underline hover:text-pink-600 transition ease-in-out duration-150">
          ...continue reading
        </a>
      </p>
    </li>
  {% endfor %}
</ul>

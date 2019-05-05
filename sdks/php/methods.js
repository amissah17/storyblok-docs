export default {
  "GET:https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStoryBySlug('posts/my-third-post');",
  "GET:https://api.storyblok.com/v1/cdn/stories?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories?token=wANpEQEsMYGOwLxwXQ76Ggtt": "$client->getStories();",
  "GET:https://api.storyblok.com/v1/cdn/spaces/me?token=wANpEQEsMYGOwLxwXQ76Ggtt": "$client->get('spaces/me', ['token' => 'ask9soUkv02QqbZgmZdeDAtt'])->httpResponseBody;",
  "GET:https://api.storyblok.com/v1/cdn/stories?cv=1541863983&token=wANpEQEsMYGOwLxwXQ76Ggtt": "$client->getStories();",
  "GET:https://api.storyblok.com/v1/cdn/stories/?per_page=2&page=1&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['per_page' => 2, 'page' => 1, 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/spaces/me/?token=dtONJHwmxhdJOwKxyjlqAgtt": "$client->get('spaces/me', ['token' => 'ask9soUkv02QqbZgmZdeDAtt'])->httpResponseBody;",
  "GET:https://api.storyblok.com/v1/cdn/datasource_entries?datasource=labels&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getDatasourceEntries('labels');",
  "GET:https://api.storyblok.com/v1/cdn/links/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getLinks();",
  "GET:https://api.storyblok.com/v1/cdn/tags/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getTags(['starts_with': 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[author][in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['filter_query' => ['author' => ['in': '22f4fb1b-50b3-4bf2-816e-7d589e307421'], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[author][not_in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['filter_query' => ['author' => ['not_in' => '22f4fb1b-50b3-4bf2-816e-7d589e307421'], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[categories][in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['filter_query' => ['categories' => ['in_array' => ['9aa72a2f-04ae-48df-b71f-25f53044dc97', '84550816-245d-4fe6-8ae8-b633d4a328f4']], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[categories][all_in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['filter_query' => ['categories' => ['in_array' => ['9aa72a2f-04ae-48df-b71f-25f53044dc97', '84550816-245d-4fe6-8ae8-b633d4a328f4']], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][gt-date]=2019-12-24 09:00": "$client->getStories(['filter_query' => ['schedule' => ['gt-date' => '2019-12-24 09:00'], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][lt-date]=2018-12-24 09:00": "$client->getStories(['filter_query' => ['schedule' => ['lt-date' => '2019-12-24 09:00'], 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['starts_with' => 'products/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?version=draft&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['version' => 'draft', 'starts_with' => 'products/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=de/*&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['starts_with' => 'de/*']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?filter_query[featured][in]=true&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['starts_with' => 'products/', 'filter_query' => ['featured' => ['in' => true]);",
  "GET:https://api.storyblok.com/v1/cdn/stories?sort_by=position:desc&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['sort_by' => 'position:desc']);",
  "GET:https://api.storyblok.com/v1/cdn/stories?sort_by=content.name:asc&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['sort_by' => 'content.name:asc']);",
  "GET:https://api.storyblok.com/v1/cdn/stories?sort_by=name:asc&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['sort_by' => 'name:asc']);",
  "GET:https://api.storyblok.com/v1/cdn/spaces/me/?cv=CURRENT_TIMESTAMP&token=ask9soUkv02QqbZgmZdeDAtt": "$client->get('spaces/me', ['token' => 'ask9soUkv02QqbZgmZdeDAtt'])->httpResponseBody;",
  "GET:https://api.storyblok.com/v1/cdn/stories?version=draft&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['version' => 'draft']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?resolve_relations=categories&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['resolve_relations' => 'categories', 'starts_with' => 'posts/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories?is_startpage=false&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt": "$client->getStories(['is_startpage' => false, starts_with: 'products/']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/ac0d2ed0-e323-43ca-ae59-5cd7d38683cb?token=ask9soUkv02QqbZgmZdeDAtt&find_by=uuid&language=de": "$client->get('stories/ac0d2ed0-e323-43ca-ae59-5cd7d38683cb', ['find_by' => 'uuid', 'language' => 'de']);",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-int]=100": "$client->getStories(['filter_query' => ['price' => ['gt-int' => 100], 'starts_with' => 'products/');",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][lt-int]=100": "$client->getStories(['filter_query' => ['price' => ['lt-int' => 100], 'starts_with' => 'products/');",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-float]=100.50": "$client->getStories(['filter_query' => ['price' => ['gt-float' => 100.5], 'starts_with' => 'products/');",
  "GET:https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][lt-float]=100.50": "$client->getStories(['filter_query' => ['price' => ['lt-float' => 100.5], 'starts_with' => 'products/');",
  "GET:https://api.storyblok.com/v1/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-float]=100.50&filter_query[price][lt-float]=300.50": "$client->getStories(['filter_query' => ['price' => ['gt-float' => 100.5, 'lt-float' => 300.5], 'starts_with' => 'products/']);",
  "GET:https://api.storyblok.com/v1/cdn/datasources?token=ask9soUkv02QqbZgmZdeDAtt": "$client->get('datasources', ['token' => 'ask9soUkv02QqbZgmZdeDAtt'])->httpResponseBody;"
}

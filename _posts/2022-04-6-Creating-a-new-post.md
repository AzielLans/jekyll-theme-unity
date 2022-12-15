---
layout: post
site-title: Creating a new post
author: Involts
---

This post shows how to create a new post on the `Fica` Theme. Even if you have previous experience with Jekyll, this article is worth reading, because many features require specific variables to be set.

# Creating a File and Naming a post

Create a new file named `YYY-MM-DD-TITLE.EXTENSION` (.EXTENSION may be `.md` or `.markdown`) and put it on the `_posts` folder.

# Font Matter

Basic Font Matter

|             Font Matter               |  Description
| --------------------------------------|------------------
| `layouts`                             |  This specifies the layout file to use. It may be `home` layout for the homepage, `post` layout for post, `default` or `page` layout/s the original look of the site, and `post-home` layout for homepage of the post/s. 
| `site-title`                          | This displays the website title. **EXCEPT THE HOMEPAGE**
| `author`                              |  This is optional for the post because the authour is set on the `_config.yml` file.
| `home`                                | **This is only for the homepage** It displays the website title so that you will not write the website title.
| `pin`                              | This pins the post to the top of the post-home layout.

Examples:

- Homepage:

```yml
---
layout: home
home: true
---

```

- About

```yml
---
layout: default
site-title: About
permalink: /About/
---

```

- Post Home

```yml
---
layout: post_home
site-title: post
---
```

- Post

```yml
---
layout: post
site-title: Creating a new post
author: Involts
---
```

if it is pinned:
```yml
---
layout: post
site-title: Creating a new post
author: Involts
pin: true
---
```


# Syntax

- Inline Code

```
`inline code part`
```

- Code Block

Markdown symbol ``` can easily create a code block as follows:

```
Plaintext Code Snippet.
```
### Specifying Language in Code Block

  Markdown symbol ```{language} can easily create a code block as follows:

````yml
```yml
    title: Fica Theme
```
````

### Line Number

 All languages except `plaintext`, `console`, and `terminal` will display line numbers. When you want to hide the line number of a code block, add the class `nolineno` to it:

````markdown
```bash
echo 'No more line numbers'
```
{: .nolineno }
````

#### Liquid Codes

If you want to display the `Liquid` snippet, surround the liquid code with `{% raw %}` and `{% endraw %}`:

````markdown
{% raw %}
```liquid
{% if product.title contains 'Pack' %}
  This product's title contains the word Pack.
{% endif %}
```
{% endraw %}
````

Or adding `render_with_liquid: false` (Requires Jekyll 4.0 or higher) to the post's YAML block.

## Learn More

For more knowledge about Jekyll posts, visit the [Jekyll Docs: Posts](https://jekyllrb.com/docs/posts/).





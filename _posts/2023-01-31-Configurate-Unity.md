---
layout: post
site-title: Configure Unity
---

This guide helps your Configure Unity with ease. It contains advance configuration. 

If you want to configure the basic configuration go to [Getting Started post](/jekyll-theme-unity/Post/Getting-Started/#usage).

{% raw %}
# Add a side menu item

open the file in `_includes/assets/header.html`
then add the following lines of code:
```diff
<nav class="site-nav-side-bar " id="nav-side-bar">
  <input type="checkbox" id="nav-side-bar-closebtn">
  <label for="nav-side-bar-closebtn">
    <span class="material-symbols-rounded">
      menu_open
    </span>
  </label>
  <div class="nav-links-container">
    <a class="nav-links" href="{{site.header.header_1_link | relative_url }}">
      <span class="material-symbols-rounded">
        {{ site.header.header_1_icon }}
      </span>
      <p>{{ site.header.header_1_name}}</p>
    </a>
    <a href="{{site.header.header_home_link | relative_url }}" class="nav-links">
      <span class="material-symbols-rounded">
        home
      </span>
      <p>Home</p>
    </a>
    <a class="nav-links" href="{{site.header.header_2_link | relative_url }}">
      <span class="material-symbols-rounded">
        {{ site.header.header_2_icon }}
      </span>
      <p>{{ site.header.header_2_name}}</p>
    </a>
    <a class="nav-links" href="{{site.header.header_3_link | relative_url }}">
      <span class="material-symbols-rounded">
        {{ site.header.header_3_icon }}
      </span>
      <p>{{ site.header.header_3_name}}</p>
    </a>
-    <!-- <a class="nav-links" href="{{site.header.header_4_link | relative_url }}">
-      <span class="material-symbols-rounded">
-        {{ site.header.header_4_icon }}
-      </span>
-      <p>{{ site.header.header_4_name}}</p>
-    </a> --> 
+    <a class="nav-links" href="{{site.header.header_4_link | relative_url }}">
+      <span class="material-symbols-rounded">
+        {{ site.header.header_4_icon }}
+      </span>
+      <p>{{ site.header.header_4_name}}</p>
+    </a>
  </div>
  <div class="nav-theme-toggle">
    <div class="toggle">
        <span class="material-symbols-rounded" id="nav-theme-toggle-icon">
          light_mode
        </span>
      <p id="mode_text">Switch to light Mode</p>
    </div>
  </div>
</nav>
<div class="site-nav-scrim" id="nav-scrim"></div>
```
Then in the `_conifg.yml` change the following code to your linking:
```diff
# icons are from https://fonts.google.com/icons
header:
  header_1_name: Download
  header_1_icon: file_download
  header_1_link: https://github.com/Involts/jekyll-theme-unity/archive/refs/heads/master.zip

  header_2_name: Post
  header_2_icon: format_list_bulleted
  header_2_link: /Posts/

  header_3_name: About
  header_3_icon: info
  header_3_link: /About/

+ header_4_name: Question
+ header_4_icon: question_mark
+ header_4_link: /

  header_home_link: /home

```
# Change the favicon

## Generate the favicon

Prepare a square image (PNG, JPG, or SVG) with a size of 512x512 or more, and then go to the online tool [**Real Favicon Generator**](https://realfavicongenerator.net/) and click the button <kbd>Select your Favicon image</kbd> to upload your image file.

In the next step, the webpage will show all usage scenarios. You can keep the default options, scroll to the bottom of the page, and click the button <kbd>Generate your Favicons and HTML code</kbd> to generate the favicon.

## Download & Replace

Download the generated package, unzip and delete the following two from the extracted files:

- `browserconfig.xml`
- `site.webmanifest`

And then copy the remaining image files (`.PNG` and `.ICO`) to cover the original files in the directory `assets/img/favicons/` of your Jekyll site. If your Jekyll site doesn't have this directory yet, just create one.

The following table will help you understand the changes to the favicon files:

| File(s)             | From Online Tool                  | From Unity |
|---------------------|:---------------------------------:|:-----------:|
| `*.PNG`             | ✓                                 | ✗           |
| `*.ICO`             | ✓                                 | ✗           |

>  ✓ means keep, ✗ means delete.
{: .prompt-info }

The next time you build the site, the favicon will be replaced with a customized edition.
<!-- 
# Add custom color schemes
Go to [Material Theme Builder site](https://m3.material.io/theme-builder#)
then click on custom btn and customize to heart desire :) 

Go to `_sass/custom/styles_variables.scss` -->
{% endraw %}

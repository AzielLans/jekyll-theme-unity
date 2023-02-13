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
change the `favicon.ico` file.
<!-- 
# Add custom color schemes
Go to [Material Theme Builder site](https://m3.material.io/theme-builder#)
then click on custom btn and customize to heart desire :) 

Go to `_sass/custom/styles_variables.scss` -->
{% endraw %}

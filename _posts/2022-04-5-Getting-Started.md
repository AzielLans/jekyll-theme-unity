---
layout: post
site-title: Getting Started
author: Involts
pin: true
post_toc: true
---

# Prerequisites

Follow the instructions in [jekyll Docs](https://jekyllrb.com/docs/installation/) to install `Ruby`, `RubyGems`, and `Bundler`. You may also install [Git](https://git-scm.com/)

# Installation

## Creating a new site

1. [Using RubyGems](https://rubygems.org/gems/jekyll-theme-fica) - Easy to upgrade, but it is not convenient with customizing the Theme.

1. [Forking using Github](https://github.com/Involts/jekyll-theme-fica/generate) - Not easy to upgrade, but you needs familiar with [Jekyll](https://jekyllrb.com), [Git](https://git-scm.com/) or [Github](https://github.com/).

## Option 1. Using RubyGems

Copy the Gemfile `gem 'jekyll-theme-fica', '~> 0.2.0'`, paste it on the `Gemfile` file then run 

```bash
$ bin/run insdep
```
{: .nolineno}
or
```bash
$ bundle install
```
{: .nolineno}

and run

```bash
$ bin/run server
```
{: .nolineno}
or
```bash
$ bundle exec jekyll serve
```
{: .nolineno}




## Option 2. Forking Github

name it `<GH_USERNAME>.github.io`, where `GH_USERNAME` represents your GitHub username.

 then run:

```bash
$ bin/run insdep
```
{: .nolineno}

and run

```bash
$ bin/run server
```
{: .nolineno}

# Usage

### Configuration

> Before publishing the site to github-pages, replace the varable of baseurl. If you have brought a doman remove the varable in the `_config.yml` file 
`baseurl: /jekyll-fica-theme`
{: .prompt-warning }

Fica Theme will respect the following variables, in your `_config.yml` file:

```yml
title: [The title of your site]
description: [A short description of your site's purpose]

socials:
  # Change Involts to your full name.
  name: [The auther of the site]
  # it also be the copyright owner's link
  auther-link: [Link of the auther]
```

Change the links of your site header:

```yml
header:
    external_link_1: true # if false, it adds the baseurl of the site
    header_name_1: Download
    header_link_1: https://github.com/Involts/jekyll-theme-fica/zipball/master

    external_link_2: false # if false, it adds the baseurl of the site
    header_name_2: Post
    header_link_2: /Post/
    
    external_link_3: false # if false, it adds the baseurl of the site
    header_name_3: About
    header_link_3: /About/
```

Change the links of your site header:

 > If you want to create a external link in the headers Links remove `{{site.baseurl}}` on `_includes/Header/html` **BELLOW**
 {: .prompt-info }


{% raw %}
```diff
header:
    external_link_1: true # if false, it adds the baseurl of the site
    header_name_1: Download
    header_link_1: https://github.com/Involts/jekyll-theme-fica/zipball/master
-   external_link_2: false # if false, it adds the baseurl of the site
+   external_link_2: true # if false, it adds the baseurl of the site
    header_name_2: Post
    header_link_2: /Post/
    
-   external_link_3: false # if false, it adds the baseurl of the site
+   external_link_3: true # if false, it adds the baseurl of the site
    header_name_3: About
    header_link_3: /About/
  ```
{% endraw %}  

#  Upgrading
  Depending on how you use the theme:

- if you are using the [theme gem](https://rubygems.org/gems/jekyll-theme-fica). Run:

```bash
$ bin/run upgrade
```
{: .nolineno}

Please refer to the [Upgrade Guide](https://github.com/Involts/jekyll-theme-fica/wiki/Theme-Upgrade-Guide) to keep your repo’s files in sync with the latest version of the theme.

- If you [forked](https://github.com/Involts/jekyll-theme-fica/fork) it on [GitHub](https://github.com/Involts/jekyll-theme-fica), then merge the [latest tags](https://github.com/Involts/jekyll-theme-fica/tags) into your Jekyll site to complete the upgrade. The merge is likely to conflict with your local modifications. Please be patient and careful to resolve these conflicts.









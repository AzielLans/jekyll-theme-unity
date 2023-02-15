---
layout: post
site-title: Getting Started
pin: true
---
# Prerequisites

Follow the instructions in [jekyll Docs](https://jekyllrb.com/docs/installation/) to install `Ruby`, `RubyGems`, and `Bundler`. You may also install [Git](https://git-scm.com/)

# Installation

## Creating a new site

1. [Using RubyGems](https://rubygems.org/gems/jekyll-theme-unity) - Easy to upgrade, does not include irrelevant files.

1. [Forking using Github](https://github.com/Involts/unity-theme-starter/generate) - Convenient for custom development, Not easy to upgrade, but you needs familiar with [Jekyll](https://jekyllrb.com), [Git](https://git-scm.com/) or [Github](https://github.com/).

## Option 1. Using RubyGems

Copy the Gemfile `gem 'jekyll-theme-unity', '~> 0.1.0'`, paste it on the `Gemfile` file then run 

```bash
$ bundle install
```
{: .nolineno}

and run
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
`baseurl: /jekyll-unity-theme`
{: .prompt-warning }

Unity Theme will respect the following variables, in your `_config.yml` file:

```yml
remote_theme: Involts/jekyll-theme-unity

title: [ Title of the website ]
description:  [ Description of the website ]

# Change the following value to '/PROJECT_NAME' ONLY IF your site type is GitHub Pages Project sites
# and doesn't have a custom domain.
baseurl: '/jekyll-theme-unity'
# Change the value to 'https://GITHUB_USERNAME.github.io/'
url: 'https://involts.github.io/' 

# The author of the post
post_author: Involts

show_post_descriptions: true

google_analytics: 
  enabled: true # if false, it disables Google Analytics
  id:           # fill in your Google Analytics ID    
```

Change the links of your site header:
```yml
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

  header_home_link: /home
```

Change the links of your site Footer:
```yml
footer:
#  Section 1
 footer_section_1_title: jekyll-theme-unity
 footer_section_1_links_1_name: Download
 footer_section_1_links_1_link: /home

 footer_section_1_links_2_name: Post
 footer_section_1_links_2_link: /Posts/

 footer_section_1_links_3_name: About
 footer_section_1_links_3_link: /About/

#  Section 2
 footer_section_2_title: You're Site
 footer_section_2_links_1_name: Lorem
 footer_section_2_links_1_link: /home

 footer_section_2_links_2_name: ispum
 footer_section_2_links_2_link: /home

 footer_section_2_links_3_name: dolor
 footer_section_2_links_3_link: /home 

# Section 3
  footer_section_3_title: Customize
 footer_section_3_links_1_name: Lorem
 footer_section_3_links_1_link: /home

 footer_section_3_links_2_name: ispum
 footer_section_3_links_2_link: /home

 footer_section_3_links_3_name: dolor
 footer_section_3_links_3_link: /home
```

Change the links of your Copyright footer:
```yml
footer_copyright: 
 show-footer-copyright: true # if false, it disables copyright in footer
 show-theme-name: true  # if false, it disables theme name

 footer_copyright_1_name: Involts
 footer_copyright_1_link: https://github.com/involts

 footer_copyright_2_name: Repositories
 footer_copyright_2_link: https://github.com/Involts?tab=repositories

 footer_copyright_3_name: RubyGems
 footer_copyright_3_link: https://rubygems.org/profiles/Involts

 footer_copyright_4_name: Bugs
 footer_copyright_4_link: https://github.com/Involts/jekyll-theme-unity/issues/new

```
#  Upgrading
  Depending on how you use the theme:

- if you are using the [theme gem](https://rubygems.org/gems/jekyll-theme-unity). Run:

```bash
$ bin/run upgrade
```
{: .nolineno}

Please refer to the [Upgrade Guide](https://github.com/Involts/jekyll-theme-unity/wiki/Theme-Upgrade-Guide) to keep your repo’s files in sync with the latest version of the theme.

- If you [forked](https://github.com/Involts/jekyll-theme-unity/fork) it on [GitHub](https://github.com/Involts/jekyll-theme-unity), then merge the [latest tags](https://github.com/Involts/jekyll-theme-unity/tags) into your Jekyll site to complete the upgrade. The merge is likely to conflict with your local modifications. Please be patient and careful to resolve these conflicts.








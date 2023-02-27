# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-unity"
  spec.version       = "0.1.1"
  spec.authors       = ["Involts"]
  spec.email         = ["100028421+Involts@users.noreply.github.com"]

  spec.summary       = "Material 3 is a design language developed by Google in 2014."
  spec.homepage      = "https://involts.github.io/jekyll-theme-unity/home"
  spec.license       = "MIT"

  spec.metadata = {
    "bug_tracker_uri"   => "https://github.com/Involts/jekyll-theme-unity/issues",
    "documentation_uri" => "https://github.com/Involts/jekyll-theme-unity#readme",
    "homepage_uri"      => "https://involts.github.io/jekyll-theme-unity/",
    "source_code_uri"   => "https://github.com/Involts/jekyll-theme-unity",
    "wiki_uri"          => "https://github.com/Involts/jekyll-theme-unity/wiki",
    "plugin_type"       => "theme"
  }


  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|bin|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~>  2.8"
  spec.add_development_dependency "bundler", "~> 2.4.4"
  spec.add_runtime_dependency "jekyll-redirect-from", "~> 0.16.0"
  spec.required_ruby_version = ">= 2.3.0"
end

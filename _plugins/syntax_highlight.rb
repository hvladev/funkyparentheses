module Jekyll
  class SyntaxHighlightTagBlock < Liquid::Block
    def initialize(tag_name, options, tokens)
      super

      language, line_numbers_toggle = options.split
      @language = language
      @show_line_numbers = line_numbers_toggle == 'line-numbers-on'
    end

    def render(context)
      code = super.strip

      `node ./_plugins/syntax_highlight.js "#{code}" #{@language} #{@show_line_numbers}`
    end
  end
end

Liquid::Template.register_tag('syntax_highlight', Jekyll::SyntaxHighlightTagBlock)

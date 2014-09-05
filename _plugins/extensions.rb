# String extensions
String.class_eval do

  def to_slug
    self.downcase.strip.gsub(' ', '-').tr('üğşçöı','ugscoi').gsub(/[^\w-]/, '')
  end

end

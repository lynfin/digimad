# Source: https://stackoverflow.com/questions/7167895/rails-whats-a-good-way-to-validate-links-urls
class HttpUrlValidator < ActiveModel::EachValidator
  def self.compliant?(value)
    uri = URI.parse(value)
    uri.is_a?(URI::HTTP) && !uri.host.nil?
  rescue URI::InvalidURIError
    false
  end

  def validate_each(record, attribute, value)
    record.errors.add(attribute, 'is not a valid HTTP URL') unless value.present? && self.class.compliant?(value)
  end
end

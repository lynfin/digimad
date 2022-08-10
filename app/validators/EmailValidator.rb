# email validation from https://edgeguides.rubyonrails.org/active_record_validations.html#strict-validations
class EmailValidator < ActiveModel::EachValidator
  def validate_each(record, attribute, value)
    record.errors.add attribute, (options[:message] || 'is not an email') unless value =~ URI::MailTo::EMAIL_REGEXP
  end
end

class Address < ApplicationRecord
  validates :lat, numericality: { greater_than_or_equal_to: -90, less_than_or_equal_to: 90 }
  validates :long, numericality: { greater_than_or_equal_to: -180, less_than_or_equal_to: 180 }
  # may want to look into more complex validation, or using Geocoder Gem to generate lat/long
  # https://stackoverflow.com/questions/35978951/validating-longitude-latitude-with-geocoder-gem
end

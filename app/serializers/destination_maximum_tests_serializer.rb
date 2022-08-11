class DestinationMaximumTestsSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :desc, :phone, :image, :website, :total_tests, :maximum_download_rates
  belongs_to :address
end

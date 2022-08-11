class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :image, :provider_fastest_cellular_download, :maximum_wifi, :most_recent_test,
             :total_tests, :total_visits, :average_tech_rating

  belongs_to :address, serializer: AddressMinimalSerializer
end

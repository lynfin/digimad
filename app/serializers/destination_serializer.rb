class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :image, :provider_fastest_cellular_download, :maximum_wifi, :most_recent_test,
             :total_tests, :total_visits, :average_tech_rating, :fastest_cell_provider, :fastest_cell_download

  belongs_to :address, serializer: AddressMinimalSerializer
  def fastest_cell_provider
    object.provider_fastest_cellular_download ? object.provider_fastest_cellular_download[0] : null
  end

  def fastest_cell_download
    object.provider_fastest_cellular_download ? object.provider_fastest_cellular_download[1] : null
  end
end

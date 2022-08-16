class DestinationFullDataSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :desc, :phone, :image, :website, :total_tests, :rate_summary,
             :provider_fastest_cellular_download, :fastest_cell_provider, :fastest_cell_download
  belongs_to :address

  def fastest_cell_provider
    object.provider_fastest_cellular_download ? object.provider_fastest_cellular_download[0] : null
  end

  def fastest_cell_download
    object.provider_fastest_cellular_download ? object.provider_fastest_cellular_download[1] : null
  end
end

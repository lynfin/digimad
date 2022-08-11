class DestinationFullDataSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :desc, :phone, :image, :website, :total_tests, :rate_summary,
             :provider_fastest_cellular_download
  belongs_to :address
end

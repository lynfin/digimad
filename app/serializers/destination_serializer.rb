class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :desc, :phone, :image, :website
  belongs_to :address
end

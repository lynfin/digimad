class AddressMinimalSerializer < ActiveModel::Serializer
  attributes :id, :city, :state, :country, :region, :latitude, :longitude
end

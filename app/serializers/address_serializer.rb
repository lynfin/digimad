class AddressSerializer < ActiveModel::Serializer
  attributes :id, :label, :street1, :street2, :city, :state, :country, :region, :zipcode, :latitude, :longitude
end

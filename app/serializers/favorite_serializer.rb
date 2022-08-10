class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user, :destination
end

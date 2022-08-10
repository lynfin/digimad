class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :username, :email, :bio, :admin, :image
  belongs_to :address
end

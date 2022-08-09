class Destination < ApplicationRecord
  belongs_to :address
  has_many :favorites
  has_many :users, through: :favorites
  has_many :visits
  has_many :users, through: :visits
end

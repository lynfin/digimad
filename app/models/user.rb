class User < ApplicationRecord
  has_many :favorites
  has_many :destinations, through: :favorites
  has_many :visits
  has_many :destinations, through: :visits
  has_many :speedtests, through: :visits
  belongs_to :address
end

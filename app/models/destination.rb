class Destination < ApplicationRecord
  belongs_to :address
  has_many :favorites
  has_many :users, through: :favorites
  has_many :visits
  has_many :users, through: :visits
  has_many :speedtests, through: :visits
  validates :name, uniqueness: true, presence: true
  validates :website, :image, http_url: true, allow_nil: true
  validates :category,
            inclusion: { in: %w[hotel other_accommodation restaurant public_space],
                         message: '%<value>s must be hotel | other_accommodation | restaurant | public_space' }
end

class Visit < ApplicationRecord
  belongs_to :speedtest, optional: true
  belongs_to :destination
  belongs_to :user
  validates :start, :end, :tech_rating, presence: true
end

class Visit < ApplicationRecord
  belongs_to :speedtest
  belongs_to :destination
  belongs_to :user
end

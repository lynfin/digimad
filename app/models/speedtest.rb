class Speedtest < ApplicationRecord
  has_one :visit
  validates :download, numericality: true
  validates :upload, :latency, numericality: true, allow_nil: true
  validates :connectiontype,
            inclusion: { in: %w[wifi cellular ethernet], message: '%<value>s must be wifi | cellular | ethernet' }
  validates_presence_of :connectionprovider, if: :connectionprovider_required?,
                                             message: 'provider must be specified for cellular connections'
  validates :testprovider,
            inclusion: { in: %w[speedtest speedcheck other],
                         message: '%<value>s must be speedtest | speedcheck | other' }
  validates :resulturl, :resultimage, http_url: true, allow_nil: true

  def connectionprovider_required?
    connectiontype == 'cellular'
  end
end

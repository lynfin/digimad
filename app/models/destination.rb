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

  #######################################
  # COME BACK AND DRY THIS UP
  #######################################
  def average_download_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).average(:download) : 0
  end

  def average_upload_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).average(:upload) : 0
  end

  def average_latency_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).average(:latency) : 0
  end

  def average_rates
    rate_values = {}
    rate_values['download'] = average_download_rates
    rate_values['upload'] = average_upload_rates
    rate_values['latency'] = average_latency_rates
    rate_values
  end

  def maximum_download_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).maximum(:download) : 0
  end

  def maximum_upload_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).maximum(:upload) : 0
  end

  def maximum_latency_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).maximum(:latency) : 0
  end

  def maximum_rates
    rate_values = {}
    rate_values['download'] = maximum_download_rates
    rate_values['upload'] = maximum_upload_rates
    rate_values['latency'] = maximum_latency_rates
    rate_values
  end

  def maximum_wifi
    wifitests = speedtests.where(connectiontype: 'wifi')
    !wifitests.empty? ? wifitests.maximum(:download) : 0
  end

  def most_recent_test
    !speedtests.empty? ? speedtests.maximum(:updated_at) : nil
  end

  def minimum_download_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).minimum(:download) : 0
  end

  def minimum_upload_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).minimum(:upload) : 0
  end

  def minimum_latency_rates
    !speedtests.empty? ? speedtests.group(:connectiontype).minimum(:latency) : 0
  end

  def minimum_rates
    rate_values = {}
    rate_values['download'] = minimum_download_rates
    rate_values['upload'] = minimum_upload_rates
    rate_values['latency'] = minimum_latency_rates
    rate_values
  end

  def rate_summary
    summary = {}
    summary['maximum'] = maximum_rates
    summary['average'] = average_rates
    summary['minimum'] = minimum_rates
    summary
  end

  def total_tests
    speedtests.count
  end

  def total_visits
    visits.count
  end

  def average_tech_rating
    !visits.empty? ? visits.average(:tech_rating).round(2) : 0
  end

  def average_visit_rating
    !visits.empty? ? visits.average(:visit_rating).round(2) : 0
  end

  # CELLULAR SPECIFIC
  def maximum_cellular_download_rates
    celltests = speedtests.where(connectiontype: 'cellular')
    !celltests.empty? ? celltests.group(:connectionprovider).maximum(:download) : 0
  end

  def maximum_cellular_upload_rates
    celltests = speedtests.where(connectiontype: 'cellular')
    !celltests.empty? ? celltests.group(:connectionprovider).maximum(:upload) : 0
  end

  def maximum_cellular_latency_rates
    celltests = speedtests.where(connectiontype: 'cellular')
    !celltests.empty? ? celltests.group(:connectionprovider).maximum(:latency) : 0
  end

  def maximum_cellular_rates
    rate_values = {}
    rate_values['download'] = maximum_cellular_download_rates
    rate_values['upload'] = maximum_cellular_upload_rates
    rate_values['latency'] = maximum_cellular_latency_rates
    rate_values
  end

  def provider_fastest_cellular_download
    maximum_cellular_download_rates.max_by { |_k, v| v }
  end
end

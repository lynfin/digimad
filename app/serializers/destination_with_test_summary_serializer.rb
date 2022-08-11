class DestinationWithTestSummarySerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :desc, :phone, :image, :website, :total_tests, :rate_summary
  belongs_to :address
end

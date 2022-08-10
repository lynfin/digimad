class VisitSerializer < ActiveModel::Serializer
  attributes :id, :start, :end, :desc, :tech_rating, :tech_comment, :visit_rating, :visit_comment
  belongs_to :speedtest
end

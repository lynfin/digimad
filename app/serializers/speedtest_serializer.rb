class SpeedtestSerializer < ActiveModel::Serializer
  attributes :id, :latency, :download, :upload, :connectiontype, :connectionprovider, :testprovider, :resulturl,
             :resultimage
  has_one :visit
end

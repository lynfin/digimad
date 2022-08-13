class DestinationsController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_destination, only: %i[show update destroy summarize]

  def index
    if params.key?(:full)
      render json: Destination.order(:name), each_serializer: DestinationFullDataSerializer, status: :ok
    else
      render json: Destination.order(:name), status: :ok
    end
  end

  def summarize
    render json: @destination, serializer: DestinationWithTestSummarySerializer, status: :ok
  end

  def show
    render json: @destination, status: :ok
  end

  def create
    destination = Destination.create!(destination_params)
    render json: destination, status: :created
  end

  def update
    @destination.update!(destination_params)
    render json: destination, status: :accepted
  end

  def destroy
    @destination.destroy
    head :no_content
  end

  private

  def destination_params
    params.permit(:category, :name, :desc, :phone, :image, :website, :address, :full)
  end

  def find_destination
    @destination = Destination.find(params[:id])
  end
end

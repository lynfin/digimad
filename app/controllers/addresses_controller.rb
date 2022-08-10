class AddressesController < ApplicationController
  before_action :find_address, only: %i[show update destroy]

  def index
    render json: Address.order(:zipcode), status: :ok
  end

  def show
    render json: @address, status: :ok
  end

  def create
    address = Address.create!(address_params)
    render json: address, status: :created
  end

  def update
    @address.update!(address_params)
    render json: address, status: :accepted
  end

  def destroy
    @address.destroy
    head :no_content
  end

  private

  def address_params
    params.permit(:label, :street1, :street2, :city, :state, :country, :region, :zipcode, :latitude, :longitude)
  end

  def find_address
    @address = Address.find(params[:id])
  end
end

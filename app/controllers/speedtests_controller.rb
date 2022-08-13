class SpeedtestsController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_speedtest, only: %i[show update destroy]

  def index
    render json: Speedtest.order(:updated_at), status: :ok
  end

  def show
    render json: @speedtest, status: :ok
  end

  def create
    speedtest = Speedtest.create!(speedtest_params)
    render json: speedtest, status: :created
  end

  def update
    @speedtest.update!(speedtest_params)
    render json: speedtest, status: :accepted
  end

  def destroy
    @speedtest.destroy
    head :no_content
  end

  private

  def speedtest_params
    params.permit(:latency, :download, :upload, :connectiontype, :connectionprovider, :testprovider, :resulturl,
                  :resultimage)
  end

  def find_speedtest
    @speedtest = Speedtest.find(params[:id])
  end
end

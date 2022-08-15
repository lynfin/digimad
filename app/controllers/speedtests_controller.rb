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
    speedtest_params[:visit_attributes] ? speedtest.visit = Visit.create!(speedtest_params[:visit_attributes]) : nil
    # speedtest.visit = Visit.create!(speedtest_params[:start, :end, :user_id, :destination_id, :desc, :tech_rating,
    #                                                   :tech_comment, :visit_rating, :visit_comment])
    render json: speedtest, status: :created
  end

  def update
    @speedtest.update!(speedtest_params)
    render json: @speedtest, status: :accepted
  end

  def destroy
    @speedtest.destroy
    head :no_content
  end

  private

  def speedtest_params
    params.permit(:latency, :download, :upload, :connectiontype, :connectionprovider, :testprovider, :resulturl,
                  :resultimage,
                  visit_attributes: %i[start end user user_id destination destination_id speedtest desc tech_rating
                                       tech_comment visit_rating visit_comment])
  end

  def find_speedtest
    @speedtest = Speedtest.find(params[:id])
  end
end

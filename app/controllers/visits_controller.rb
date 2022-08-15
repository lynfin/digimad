class VisitsController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_visit, only: %i[show update destroy]

  # ?dest=DESTINATION_ID to retrieve only visits to that destination
  def index
    visit_list = params.key?(:dest) ? Visit.where(destination_id: params[:dest]).order(:start) : Visit.order(:start)
    render json: visit_list, status: :ok
  end

  def show
    render json: @visit, status: :ok
  end

  def create
    # visit = Visit.new(visit_params)
    # # fix to check whether speedtest params were provided
    # # it is allowed to create a visit and not provide the speedtest details
    # speedtest = Speedtest.new(visit_params[:speedtest_params])
    # visit.speedtest = speedtest.save!
    # visit.save!
    visit = Visit.create!(visit_params)
    render json: visit, status: :created
  end

  def update
    @visit.update!(visit_params)
    render json: @visit, status: :accepted
  end

  def destroy
    @visit.destroy
    head :no_content
  end

  private

  def visit_params
    params.permit(:start, :end, :user, :user_id, :destination, :destination_id, :speedtest, :desc, :tech_rating,
                  :tech_comment, :visit_rating, :visit_comment, :dest,
                  speedtest_params: %i[latency download upload connectiontype connectionprovider
                                       testprovider resulturl resultimage])
  end

  def find_visit
    @visit = Visit.find(params[:id])
  end
end

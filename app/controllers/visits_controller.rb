class VisitsController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_visit, only: %i[show update destroy]

  def index
    render json: Visit.order(:start), status: :ok
  end

  def show
    render json: @visit, status: :ok
  end

  def create
    visit = Visit.create!(visit_params)
    render json: visit, status: :created
  end

  def update
    @visit.update!(visit_params)
    render json: visit, status: :accepted
  end

  def destroy
    @visit.destroy
    head :no_content
  end

  private

  def visit_params
    params.permit(:start, :end, :user, :destination, :speedtest, :desc, :tech_rating, :tech_comment, :visit_rating,
                  :visit_comment)
  end

  def find_visit
    @visit = Visit.find(params[:id])
  end
end

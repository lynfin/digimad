class FavoritesController < ApplicationController
  skip_before_action :authenticate_user
  before_action :find_favorite, only: %i[show update destroy]

  def index
    render json: Favorite.all, status: :ok
  end

  def show
    render json: @favorite, status: :ok
  end

  def create
    favorite = Favorite.create!(favorite_params)
    render json: favorite, status: :created
  end

  def update
    @favorite.update!(favorite_params)
    render json: favorite, status: :accepted
  end

  def destroy
    @favorite.destroy
    head :no_content
  end

  private

  def favorite_params
    params.permit(:user, :destination)
  end

  def find_favorite
    @favorite = Favorite.find(params[:id])
  end
end

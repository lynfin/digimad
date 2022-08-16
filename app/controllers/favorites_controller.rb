class FavoritesController < ApplicationController
  before_action :find_favorite, only: %i[destroy]

  def index
    render json: @current_user.favorites, each_serializer: FavoriteDestinationSerializer, status: :ok
  end

  def create
    favorite = @current_user.favorites.create!(favorite_params)
    render json: favorite, serializer: FavoriteDestinationSerializer, status: :created
  end

  def destroy
    @favorite.destroy
    head :no_content
  end

  private

  def favorite_params
    params.permit(:destination_id)
  end

  def find_favorite
    @favorite = @current_user.favorites.find_by_destination_id(params[:destination_id])
  end
end

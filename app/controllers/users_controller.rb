class UsersController < ApplicationController
  before_action :find_user, only: %i[show update destroy]

  def index
    render json: User.order(:name), status: :ok
  end

  def show
    render json: @user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  def update
    @user.update!(user_params)
    render json: user, status: :accepted
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :username, :email, :bio, :admin, :address, :password, :image)
  end

  def find_user
    @user = User.find(params[:id])
  end
end

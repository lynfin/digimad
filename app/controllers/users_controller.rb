class UsersController < ApplicationController
  skip_before_action :authenticate_user, only: %i[create]

  def index
    render json: User.order(:username), status: :ok
  end

  def show
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :ok
  end

  def update
    current_user.update!(user_params)
    render json: current_user, status: :accepted
  end

  def destroy
    current_user.destroy
    head :no_content
  end

  private

  def user_params
    params.permit(:firstname, :lastname, :username, :email, :bio, :admin, :address, :password, :password_confirmation,
                  :image)
  end
end

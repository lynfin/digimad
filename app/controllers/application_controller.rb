class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :handle_invalid_data
  rescue_from ActiveRecord::RecordNotFound, with: :handle_not_found
  before_action :authenticate_user

  def current_user
    @current_user ||= User.find_by_id(session[:user_id])
  end

  private

  def authenticate_user # we are checking if a user is logged in only
    render json: { errors: { User: 'Not Authorized' } }, status: :unauthorized unless current_user
  end

  def is_authorized?
    permitted = current_user.admin?
    render json: { errors: { User: 'does not have admin permissions' } }, status: :forbidden unless permitted
  end

  def handle_not_found(error)
    render json: { errors: ["#{error.model} not found"] }, status: :not_found
  end

  def handle_invalid_data(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end

# config/routes.rb
Rails.application.routes.draw do
  resources :visits
  resources :users, :favorites, :destinations, :speedtests, :addresses
  get '/hello', to: 'application#hello_world'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

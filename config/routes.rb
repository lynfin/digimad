# config/routes.rb
Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  resources :visits
  resources :users, :favorites, :destinations, :speedtests, :addresses

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

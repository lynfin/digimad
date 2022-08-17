# config/routes.rb
Rails.application.routes.draw do
  resources :visits, :destinations, :speedtests, :addresses
  get '/favorites', to: 'favorites#index'
  post '/favorites', to: 'favorites#create'
  delete '/favorites/:destination_id', to: 'favorites#destroy'
  get '/me', to: 'users#show'
  patch '/update', to: 'users#update'
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # get 'destinations/summarize/:id', to: 'destinations#summarize'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

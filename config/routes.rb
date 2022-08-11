# config/routes.rb
Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  resources :visits
  resources :users, :favorites, :destinations, :speedtests, :addresses

  get 'destinations/summarize/:id', to: 'destinations#summarize'
  get 'dest_summary', to: 'destinations#fullsummary'
  get 'dest_maximums', to: 'destinations#maxsummary'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

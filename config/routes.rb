Rails.application.routes.draw do
  get 'scrambler_game', to: 'scrambler_game#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "scrambler_game#index"
end

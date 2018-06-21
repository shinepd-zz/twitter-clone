Rails.application.routes.draw do

  resources :followers do |r|
    collection do
      get 'random'
    end
  end

  resources :tweets
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  root 'home#index'
  get '*path', to: 'home#index' # redirect all requests to single page, react router intercepts from there.

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

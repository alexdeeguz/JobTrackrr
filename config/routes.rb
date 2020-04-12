Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resources :job_applications, only: [:index, :create, :destroy, :update, :show]
    resources :interviews, only: [:create, :index, :destroy, :update]
    resource :sessions, only: [:create, :destroy]
  end
  
end

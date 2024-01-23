require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do
  describe 'GET #index' do
    it 'returns a failure response when no users are present' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to be_falsey
      expect(JSON.parse(response.body)['message']).to eq('No users found')
    end

    it 'returns a failure response on error' do
      allow(User).to receive(:all).and_raise(StandardError.new('Some error'))
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to be_falsey
      expect(JSON.parse(response.body)['message']).to eq('Some error')
    end
  end

  describe 'POST #create' do
    it 'returns a success response with the created user when valid params are provided' do
      valid_params = { user: { name: 'John Doe', email: 'john@example.com', password: 'password',
                               password_confirmation: 'password' } }
      post :create, params: valid_params
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to be_truthy
      expect(JSON.parse(response.body)['user']).to be_present
    end

    it 'returns a failure response when invalid params are provided' do
      invalid_params = { user: { name: 'John Doe', email: 'john@example.com', password: 'password',
                                 password_confirmation: 'invalid' } }
      post :create, params: invalid_params
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to be_falsey
      expect(JSON.parse(response.body)['message']).to be_present
    end
  end
end

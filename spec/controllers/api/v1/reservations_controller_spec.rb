require 'rails_helper'

RSpec.describe Api::V1::ReservationsController, type: :controller do
  let(:user1) { User.create(name: 'Assem', email: 'assem@example.com', password: 'password123') }

  before do
    sign_in user1
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index, params: { format: :json }
      expect(response).to be_successful
    end

    it 'assigns reservations of the current user to @reservations' do
      reservation = Reservation.create(date: '2024-01-19', city: 'Big City', user: user1)
      get :index, params: { format: :json }
      expect(assigns(:reservations)).to eq([reservation])
    end
  end

  describe 'GET #show' do
    let(:reservation) { Reservation.create(date: '2024-01-19', city: 'Big City', user: user1) }

    it 'returns a successful response' do
      get :show, params: { id: reservation.id, format: :json }
      expect(response).to be_successful
    end

    it 'assigns the requested reservation to @reservation' do
      get :show, params: { id: reservation.id, format: :json }
      expect(assigns(:reservation)).to eq(reservation)
    end
  end

  describe 'POST #create' do
    context 'with valid params' do
      let(:valid_params) { { reservation: { date: '2024-01-19', city: 'Big City', user_id: user1.id }, format: :json } }

      it 'creates a new reservation' do
        expect {
          post :create, params: valid_params
        }.to change(Reservation, :count).by(1)
      end

      it 'returns a created response' do
        post :create, params: valid_params
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid params' do
      let(:invalid_params) { { reservation: { date: nil, city: 'Big City', user_id: user1.id }, format: :json } }

      it 'does not create a new reservation' do
        expect {
          post :create, params: invalid_params
        }.to_not change(Reservation, :count)
      end

      it 'returns unprocessable entity status' do
        post :create, params: invalid_params
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE #destroy' do
    let!(:reservation) { Reservation.create(date: '2024-01-19', city: 'Big City', user: user1) }

    it 'destroys the requested reservation' do
      expect {
        delete :destroy, params: { id: reservation.id, format: :json }
      }.to change(Reservation, :count).by(-1)
    end

    it 'returns a no content response' do
      delete :destroy, params: { id: reservation.id, format: :json }
      expect(response).to have_http_status(:no_content)
    end
  end
end

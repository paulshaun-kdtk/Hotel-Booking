require 'rails_helper'

RSpec.describe Api::V1::ReservationsController, type: :controller do
  let(:user1) { User.create(name: 'Assem', email: 'assem@example.com', password: 'password123') }
  let(:item1) do
    Item.create(
      name: 'Example Item',
      description: 'This is a sample item.',
      image: 'example.jpg',
      finance_fee: 100.00,
      purchase_fee: 200.00,
      total_amount: 500.00,
      duration: 12,
      apr: 5.0
    )
  end

  before do
    sign_in user1
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index, params: { format: :json }
      expect(response).to be_successful
    end

    it 'assigns reservations of the current user to @reservations' do
      reservation = Reservation.create(date: '2024-01-19', city: 'Big City', user: user1, item_id: item1.id)
      get :index, params: { format: :json }
      expect(assigns(:reservations)).to eq([reservation])
    end
  end

  describe 'GET #show' do
    let(:reservation) { Reservation.create(date: '2024-01-19', city: 'Big City', user: user1, item_id: item1.id) }

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
    context 'with invalid params' do
      let(:invalid_params) { { reservation: { date: nil, city: 'Big City', user_id: user1.id, item_id: item1.id }, format: :json } }

      it 'does not create a new reservation' do
        expect do
          post :create, params: invalid_params
        end.to_not change(Reservation, :count)
      end

      it 'returns unprocessable entity status' do
        post :create, params: invalid_params
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE #destroy' do
    let!(:reservation) { Reservation.create(date: '2024-01-19', city: 'Big City', user: user1, item_id: item1.id) }

    it 'destroys the requested reservation' do
      expect do
        delete :destroy, params: { id: reservation.id, format: :json }
      end.to change(Reservation, :count).by(-1)
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to eq(true)
      expect(JSON.parse(response.body)['message']).to eq('Reservation destroyed')
    end
  end
end

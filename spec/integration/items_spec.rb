require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do
  let(:valid_attributes) do
    {
      name: 'Test Item',
      description: 'This is a test item.',
      image: 'test.jpg',
      finance_fee: 100.00,
      purchase_fee: 200.00,
      total_amount: 500.00,
      duration: 12,
      apr: 5.0
    }
  end

  describe 'GET #index' do
    it 'returns a success response with items' do
      Item.create(valid_attributes)
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to eq(true)
      expect(JSON.parse(response.body)['items'].length).to eq(1)
    end

    it 'returns a success response with no items' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to eq(false)
      expect(JSON.parse(response.body)['message']).to eq('No items found')
    end
  end

  describe 'GET #show' do
    it 'returns a success response with a valid item' do
      item = Item.create(valid_attributes)
      get :show, params: { id: item.to_param }
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to eq(true)
      expect(JSON.parse(response.body)['item']['id']).to eq(item.id)
    end

    it 'returns a failure response with an invalid item' do
      get :show, params: { id: 'invalid_id' }
      expect(response).to have_http_status(:not_found)
      expect(JSON.parse(response.body)['success']).to eq(false)
      expect(JSON.parse(response.body)['message']).to eq('Item not found')
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a new item' do
        expect do
          post :create, params: { item: valid_attributes }
        end.to change(Item, :count).by(1)
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)['success']).to eq(true)
        expect(JSON.parse(response.body)['item']['name']).to eq('Test Item')
      end
    end

    context 'with invalid parameters' do
      it 'returns a failure response' do
        post :create, params: { item: valid_attributes.merge(name: nil) }
        expect(response).to have_http_status(:success)
        expect(JSON.parse(response.body)['success']).to eq(false)
        expect(JSON.parse(response.body)['message']).to include("Name can't be blank")
      end
    end
  end

  describe 'DELETE #destroy' do
    it 'destroys the requested item' do
      item = Item.create(valid_attributes)
      expect do
        delete :destroy, params: { id: item.to_param }
      end.to change(Item, :count).by(-1)
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body)['success']).to eq(true)
      expect(JSON.parse(response.body)['message']).to eq('Item deleted')
    end
  end
end

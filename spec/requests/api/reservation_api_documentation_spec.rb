require 'swagger_helper'

describe 'Reservations API' do
  path '/api/v1/reservations' do
    get 'Retrieves a list of reservations' do
      tags 'Reservations'
      produces 'application/json'

      response '200', 'successful' do
        schema type: :array,
               items: {
                 type: :object,
                 properties: {
                   id: { type: :integer },
                   date: { type: :string },
                   city: { type: :string },
                   user_id: { type: :integer },
                   item_id: { type: :integer }
                 },
                 required: %w[id date city user_id item_id]
               }

        run_test!
      end

      response '500', 'internal server error' do
        schema type: :object,
               properties: {
                 error: { type: :string }
               },
               required: ['error']

        run_test!
      end
    end

    post 'Creates a reservation' do
      tags 'Reservations'
      consumes 'application/json'
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          date: { type: :string },
          city: { type: :string },
          user_id: { type: :integer },
          item_id: { type: :integer }
        },
        required: %w[date city user_id item_id]
      }

      response '201', 'reservation created' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 date: { type: :string },
                 city: { type: :string },
                 user_id: { type: :integer },
                 item_id: { type: :integer }
               },
               required: %w[id date city user_id item_id]

        run_test!
      end

      response '422', 'unprocessable entity' do
        schema type: :object,
               properties: {
                 error: { type: :array }
               },
               required: ['error']

        run_test!
      end
    end
  end

  path '/api/v1/reservations/{id}' do
    get 'Retrieves a reservation' do
      tags 'Reservations'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'reservation found' do
        schema type: :object,
               properties: {
                 id: { type: :integer },
                 date: { type: :string },
                 city: { type: :string },
                 user_id: { type: :integer },
                 item_id: { type: :integer }
               },
               required: %w[id date city user_id item_id]

        let(:id) { Reservation.create(date: '2024-01-01', city: 'Example City', user_id: 1, item_id: 1).id }
        run_test!
      end

      response '404', 'reservation not found' do
        schema type: :object,
               properties: {
                 error: { type: :string }
               },
               required: ['error']

        let(:id) { 'invalid' }
        run_test!
      end
    end

    delete 'Deletes a reservation' do
      tags 'Reservations'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '204', 'reservation deleted' do
        run_test! do
          expect(response.status).to eq(204)
        end
      end

      response '404', 'reservation not found' do
        schema type: :object,
               properties: {
                 error: { type: :string }
               },
               required: ['error']

        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end

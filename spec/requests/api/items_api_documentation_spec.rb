require 'swagger_helper'

describe 'Items API' do
  path '/api/v1/items' do
    get 'Retrieves a list of items' do
      tags 'Items'
      produces 'application/json'

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 items: { type: :array, items: { type: :object } }
               },
               required: %w[success items]

        run_test!
      end

      response '500', 'internal server error' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :string }
               },
               required: %w[success message]

        run_test!
      end
    end

    post 'Creates an item' do
      tags 'Items'
      consumes 'application/json'
      parameter name: :item, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          description: { type: :string },
          image: { type: :string },
          finance_fee: { type: :integer },
          purchase_fee: { type: :integer },
          total_amount: { type: :integer },
          duration: { type: :integer },
          apr: { type: :number }
        },
        required: %w[name description finance_fee purchase_fee total_amount duration apr]
      }

      response '201', 'item created' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 item: { type: :object }
               },
               required: %w[success item]

        run_test!
      end

      response '422', 'unprocessable entity' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :array }
               },
               required: %w[success message]

        run_test!
      end
    end
  end

  path '/api/v1/items/{id}' do
    get 'Retrieves an item' do
      tags 'Items'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'item found' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 item: { type: :object }
               },
               required: %w[success item]

        let(:id) { Item.create(name: 'Example', description: 'Lorem ipsum').id }
        run_test!
      end

      response '404', 'item not found' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :string }
               },
               required: %w[success message]

        let(:id) { 'invalid' }
        run_test!
      end
    end

    delete 'Deletes an item' do
      tags 'Items'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'item deleted' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :string }
               },
               required: %w[success message]

        let(:id) { Item.create(name: 'Example', description: 'Lorem ipsum').id }
        run_test!
      end

      response '404', 'item not found' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :string }
               },
               required: %w[success message]

        let(:id) { 'invalid' }
        run_test!
      end
    end
  end
end

require 'swagger_helper'

describe 'Users API' do
  path '/api/v1/users' do
    get 'Retrieves a list of users' do
      tags 'Users'
      produces 'application/json'

      response '200', 'successful' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 users: {
                   type: :array,
                   items: {
                     type: :object,
                     properties: {
                       id: { type: :integer },
                       name: { type: :string },
                       email: { type: :string }
                     },
                     required: %w[id name email]
                   }
                 }
               },
               required: %w[success users]

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

    post 'Creates a user' do
      tags 'Users'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          email: { type: :string },
          password: { type: :string },
          password_confirmation: { type: :string }
        },
        required: %w[name email password password_confirmation]
      }

      response '201', 'user created' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 user: {
                   type: :object,
                   properties: {
                     id: { type: :integer },
                     name: { type: :string },
                     email: { type: :string }
                   },
                   required: %w[id name email]
                 }
               },
               required: %w[success user]

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

  path '/api/v1/users/{id}' do
    get 'Retrieves a user' do
      tags 'Users'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'user found' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 user: {
                   type: :object,
                   properties: {
                     id: { type: :integer },
                     name: { type: :string },
                     email: { type: :string }
                   },
                   required: %w[id name email]
                 }
               },
               required: %w[success user]

        let(:id) { User.create(name: 'John Doe', email: 'john.doe@example.com', password: 'password', password_confirmation: 'password').id }
        run_test!
      end

      response '404', 'user not found' do
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

    delete 'Deletes a user' do
      tags 'Users'
      produces 'application/json'
      parameter name: :id, in: :path, type: :string

      response '200', 'user deleted' do
        schema type: :object,
               properties: {
                 success: { type: :boolean },
                 message: { type: :string }
               },
               required: %w[success message]

        let(:id) { User.create(name: 'John Doe', email: 'john.doe@example.com', password: 'password', password_confirmation: 'password').id }
        run_test!
      end

      response '404', 'user not found' do
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

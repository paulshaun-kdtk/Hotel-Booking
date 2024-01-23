require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    it 'requires a name' do
      user = User.new(name: '', password: 'password', email: 'test@example.com')
      expect(user.valid?).to be false
      expect(user.errors[:name]).to include("can't be blank")
    end

    it 'requires a password with at least 6 characters' do
      user = User.new(name: 'John', password: 'pass', email: 'test@example.com')
      expect(user.valid?).to be false
      expect(user.errors[:password]).to include('is too short (minimum is 6 characters)')
    end

    it 'requires an email' do
      user = User.new(name: 'John', password: 'password')
      expect(user.valid?).to be false
      expect(user.errors[:email]).to include("can't be blank")
    end

    it 'requires a unique email' do
      User.create(name: 'John', password: 'password', email: 'test@example.com')
      new_user = User.new(name: 'Jane', password: 'password', email: 'test@example.com')
      expect(new_user.valid?).to be false
      expect(new_user.errors[:email]).to include('has already been taken')
    end
  end
end

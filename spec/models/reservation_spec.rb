require 'rails_helper'

RSpec.describe Reservation, type: :model do
  let(:user1) { User.create(name: 'Assem', email: 'assem@example.com', password: 'password123') }
  let(:reservation) { Reservation.create(user: user1, date: Date.today, city: 'Big City') }

  describe 'validations' do
    it 'is not valid without a date' do
      reservation.date = nil
      expect(reservation).not_to be_valid
    end

    it 'is not valid without an city' do
      reservation.city = nil
      expect(reservation).not_to be_valid
    end
  end
end

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  test 'should not save reservation without date' do
    reservation = Reservation.new(city: 'Big City', user: users(:one))
    assert_not reservation.save, 'Saved the reservation without a date'
  end

  test 'should not save reservation without city' do
    reservation = Reservation.new(date: Date.today, user: users(:one))
    assert_not reservation.save, 'Saved the reservation without a city'
  end

  test 'should save reservation with date, city, and user' do
    reservation = Reservation.new(date: Date.today, city: 'Big City', user: users(:one))
    assert reservation.save, 'Could not save the valid reservation'
  end
end

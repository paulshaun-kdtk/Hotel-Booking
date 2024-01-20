module Api
  module V1
    class ReservationsController < ApplicationController
      before_action :authenticate_user!, only: %i[index show create destroy]
      before_action :set_reservation, only: %i[show destroy]

      def index
        @reservations = current_user.reservations
        render json: @reservations
      end

      def show
        render json: @reservation
      end

      def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
          render json: @reservation, status: :created
        else
          render json: @reservation.errors, status: :unprocessable_entity
        end
      end

      def destroy
        @reservation.destroy
        head :no_content
      end

      private

      def set_reservation
        @reservation = Reservation.find(params[:id])
      end

      def reservation_params
        params.require(:reservation).permit(:date, :city, :user_id, hotel_ids: [])
      end
    end
  end
end

class Api::V1::ItemsController < ApplicationController
  before_action :set_api_item, only: %i[show destroy]

  # GET /api/v1/items
  def index
    @api_items = Item.all
    if @api_items.present?
      render json: { success: true, items: @api_items }
    else
      render json: { success: false, message: 'No items found' }
    end
  rescue StandardError => e
    render json: { success: false, message: e.message }
  end

  # GET /api/v1/items/1
  def show
    if @api_item.present?
      render json: { success: true, item: @api_item }
    else
      render json: { success: false, message: 'Item not found' }
    end
  end

  # POST /api/v1/items
  def create
    @api_item = Item.new(api_item_params)
    if @api_item.save
      render json: { success: true, item: @api_item }
    else
      render json: { success: false, message: @api_item.errors.full_messages }
    end
  end

  # DELETE /api/v1/items/:id
  def destroy
    if @api_item.destroy
      render json: { success: true, message: 'Item deleted' }
    else
      render json: { success: false, message: @api_item.errors.full_messages }
    end
  end

  private

  def set_api_item
    @api_item = Item.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { success: false, message: 'Item not found' }, status: :not_found
  end

  def api_item_params
    params.require(:item).permit(:name, :description, :image, :finance_fee, :purchase_fee, :total_amount, :duration, :apr)
  end
end

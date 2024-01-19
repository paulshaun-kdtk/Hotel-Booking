class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :image
      t.decimal :finance_fee, precision: 10, scale: 2
      t.decimal :purchase_fee, precision: 10, scale: 2
      t.decimal :total_amount, precision: 10, scale: 2
      t.integer :duration
      t.decimal :apr, precision: 5, scale: 2

      t.timestamps
    end
  end
end

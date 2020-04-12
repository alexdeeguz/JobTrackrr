class CreateInterviews < ActiveRecord::Migration[5.2]
  def change
    create_table :interviews do |t|
      t.date :date
      t.time :time
      t.string :type
      t.integer :application_id

      t.timestamps
    end
  end
end

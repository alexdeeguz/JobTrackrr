class CreateJobApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :job_applications do |t|
      t.date :application_date
      t.string :company_name
      t.string :position
      t.string :job_posting_url
      t.string :company_site_url
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end

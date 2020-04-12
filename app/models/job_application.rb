# == Schema Information
#
# Table name: job_applications
#
#  id               :bigint           not null, primary key
#  application_date :date
#  company_name     :string
#  position         :string
#  job_posting_url  :string
#  company_site_url :string
#  status           :string
#  user_id          :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class JobApplication < ApplicationRecord
    validates :application_date, :company_name, :position, :status, :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_many :interviews,
        foreign_key: :application_id,
        class_name: :Interview
end

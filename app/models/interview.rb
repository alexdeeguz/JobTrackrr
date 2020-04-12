# == Schema Information
#
# Table name: interviews
#
#  id             :bigint           not null, primary key
#  date           :date
#  time           :time
#  type           :string
#  application_id :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Interview < ApplicationRecord

    belongs_to :job_application,
        foreign_key: :application_id,
        class_name: :JobApplication
end

class RenameInterviewTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :interviews, :type, :interview_type
  end
end

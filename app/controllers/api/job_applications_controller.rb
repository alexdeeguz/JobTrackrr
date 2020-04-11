class Api::JobApplicationsController < ApplicationController

    def index
        @job_applications = current_user.job_applications
        render :index
    end

    def show
        @job_application = JobApplication.find(params[:id])
        render :show
    end

    def create
        @job_application = JobApplication.new(job_application_params)
        if @job_application.save
            render :show
        else  
            render json: @job_application.errors.full_messages, status: 422
        end
    end

    def destroy
        job_application = JobApplication.find(params[:id])
        job_application.delete
    end

    def update
        @job_application = JobApplication.find(params[:id])
        if @job_application.update(job_application_params)
            render :show
        else 
            render json: @job_application.errors.full_messages, status: 422
        end
    end

    def job_application_params
        params.require(:job_application).permit(:application_date, :company_name, :position, :job_posting_url, :company_site_url, :status, :user_id)
    end

end

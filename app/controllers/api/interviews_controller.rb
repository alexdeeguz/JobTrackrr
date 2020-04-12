class Api::InterviewsController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @interviews = current_user.interviews
        render :index
    end

    def show
        @interview = Interview.find(params[:id])
        render :show
    end

    def create
        @interview = Interview.new(interview_params)
        if @interview.save
            render :show
        else  
            render json: @interview.errors.full_messages, status: 422
        end
    end

    def destroy
        interview = Interview.find(params[:id])
        interview.delete
    end

    def update
        @interview = Interview.find(params[:id])
        if @interview.update(interview_params)
            render :show
        else  
            render json: @interview.errors.full_messages, status: 422
        end
    end

    def interview_params
        params.require(:interview).permit(:date, :time, :interview_type, :application_id)
    end

end

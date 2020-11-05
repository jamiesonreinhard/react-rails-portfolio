class Api::V1::ProjectsController < ApplicationController
  
  def index
    render json: Project.all
  end

  private

  def project_params
    params.require(:airline).permit(:name, :description, :url, :github_url)
  end


end

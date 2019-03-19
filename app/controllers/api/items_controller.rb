class Api::ItemsController < ApplicationController
before_action :set_menu

def index
  render json: @menu.items
end

def create
  item = @menu.items.new(item_params)
  if item.save
    render json: item
  end
end

def update
  item = Menu.find(params[:id])
end

def destroy
end

private

def set_menu
  @menu = Menu.find(params[:menu_id])
end

def item_params
  params.require(:item).permit(:food_name)
end

end

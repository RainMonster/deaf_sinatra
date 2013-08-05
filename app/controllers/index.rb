get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end

post '/grandma' do
  if params[:user_input] == params[:user_input].upcase
    grandma_response = "Yes! I hear you.  I love you too!"
  else
    grandma_response = "Speak up you little shit!"
  end
  
   
  redirect "/?grandma=#{grandma_response}"
end

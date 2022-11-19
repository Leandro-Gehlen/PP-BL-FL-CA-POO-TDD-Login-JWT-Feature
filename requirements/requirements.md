# Login Feature 

## User roadmap  


> I need that the user is able to register.
> After that , he should be able to login with his email 
> and password and have access to the dashboard area page.
> Also, after close the browser, he should be able to    
> came back and still be logged in.

## Entities  

> user  
> auth

## Usecases user  

+ Create User
    + tests  
        + Ensure that we´ve received users email.  Otherwise, return statusCode 400. ✅  
        + Ensure that we´ve received users password. Otherwise, return statusCode 400. ✅  
        + Ensure that we´ve received users name. Otherwise, return statusCode 400. ✅  
        + Ensure that we´ve received users surname. Otherwise, return statusCode 400. ✅  
        + Ensute that we send the user data to be inserted on the data base.
        + Ensure that we receive the user object with user data.
        + Ensure that we return a response with the user data object and status code 200.
        
> RUD user  
> validate user data

## Usecases auth  

> create a new token  
> verify token  
> create a new refresh token  
> verify refreshtoken  
> cookie manager  
> authorization middleware  


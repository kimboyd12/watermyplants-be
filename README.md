# Water my Plants back-end

## API Link:
https://watermy-plants.herokuapp.com/

## Must be logged in to view data

## Endpoints:

### Register:

POST request to:

https://watermy-plants.herokuapp.com/users/register

### Login:

POST request to:

https://watermy-plants.herokuapp.com/users/login

-Dummy Login: username: plantuser123, password: 123456

### Edit phone number and password:

PUT request to:

https://watermy-plants.herokuapp.com/users/:id

### View List of plants while logged into a user:

GET request to:

https://watermy-plants.herokuapp.com/plants/


### Get List Of plants by user ID:

GET request to:

https://watermy-plants.herokuapp.com/plants/:id/plantsList


### Add Plant to user

POST request to:

https://watermy-plants.herokuapp.com/plants/addPlant/:id


### Edit Plant

PUT request to:

https://watermy-plants.herokuapp.com/plants/:id

### Delete Plant

DELETE request to:

https://watermy-plants.herokuapp.com/plants/:id

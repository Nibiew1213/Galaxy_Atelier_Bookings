# Galaxy Atelier Car Wash Booking App

## Idea generation
The app will be created with the intend to streamline the proccess of booking for car detailing appointment at one of my friend's car detailing business. Conventional methods has been through direct phone call or messaging services.

Customer (car owners) will be able to visit a website where they can submit a form with information as a request for booking of the car detailing. The data structure will be as follows:

```js
bookingRequest {
    name: . . .,
    phoneNumber: . . .,
    carModel: . . .,
    carPlate: . . .,
    date: . . .,
    time: . . .,
}
```

## Approach
+ The project will be done with the main goal of acheiving the project MVP 
+ Project duration of 2 weeks: 1 week for frontend, 1 week for backend

## CRUD
+ Create -> create a new booking request using the form
+ Read -> list all requested bookings to show all customer's details
+ Update -> update booking request such as change in date and time upon customer's confirmation
+ Delete -> delete booking request upon customer's confirmation

## 7 RESTful Routes
+ Index: List all bookings
+ New: Show new booking form
+ Create: Create new booking, then redirect to Thank you page and await confirmation of booking
+ Show: Show info about one specific booking
+ Edit: Show edit form for one request
+ Update: Update a particular booking request, then redirect 
+ Destroy: Delete a particular Booking, then redirect

## Technologies used
+ Node.js, Mongoose, Express, EJS

## Current unsolved problems
+ Retreiving of name in edit form does not display characters after spaces
+ Editing of details will transfer data onto the first booking

## Intended Users of the app
+ Customer (car owners) login preferred so next time only fill in date and time
+ Administrator, able to login and view all submitted request /admin/login route

## Stretch goals
+ To create user session with authentication for both Customer and Admin
+ Only admin users able to view, list, edit and delete all created bookings 
+ Customer can only create, view and edit his/her own current booking 
+ Calender to view all current confirm bookings

Click [here](https://galaxy-atelier-bookings.herokuapp.com/) to proceed to the app!
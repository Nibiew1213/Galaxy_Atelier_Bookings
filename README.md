# Galaxy Atelier Car Wash Booking App

## Idea generation
The app will be created with the intend to streamline the proccess of booking for car detailing appointment at one of my friend's car detailing business. Conventional methods has been through direct phone call or messaging services.

Customer (car owners) will be able to visit a website where they can submit a form with information as a request for booking of the car detailing. The data structure will be as follows:

bookingRequest {
    name: . . .,
    phoneNumber: . . .,
    carModel: . . .,
    carPlate: . . .,
    date: . . .,
    time: . . .,
}

## Users of the app
+ Customer (car owners) login preferred so next time only fill in date and time
+ Administrator, able to login and view all submitted request /admin/login route

## CRUD
+ Create -> Customer can create a new booking request using the form
+ Read -> Admin can list all requested bookings to show all customer's details
+ Update -> Admin can update booking request such as change in date and time upon customer's confirmation
+ Delete -> Admin can delete booking request upon customer's confirmation

## 7 RESTful Routes
+ Index: List all bookings
+ New: Show new booking form
+ Create: Create new booking, then redirect to Thank you page and await confirmation of booking
+ Show: Show info about one specific booking
+ Edit: Show edit form for one request
+ Update: Update a particular booking request, then redirects to show info about that specific booking
+ Destroy: Delete a particular Booking, then redirects to delete successful page

## Approach 
First week of the project will be focus on handling the backend application, and the subsequent second week will be finishing up of frontend.

## Need 2 types of data collections
admin (users) by userID
bookings 


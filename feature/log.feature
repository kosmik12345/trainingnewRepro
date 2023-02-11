Feature: Login feature file

@smoke
Scenario Outline: User should be able to login to the application


Given User is in login page
When User enters email id <username>
And User enters password <password>
And User clicks the signin button
Then User should be able to see the error message

Examples: 
      |username|password|
      |prashanthi.skvl@gmail.com|Test@123455|
     
      
      
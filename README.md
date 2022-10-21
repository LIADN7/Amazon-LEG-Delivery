# Amazon - LEG Delivery

<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/dash.png" width="200" height="200">

***

The target of the project is create and desigen a delevery system in MVC model with big-data clouds and databases.
In this project  we used in this tools : Reddis ,Fairebase ,MongoDB and BigML.

All the data and the status prsent in dashboard that includes the pages:
* dashboard - the main page, shows the month delevery status and data graphs.
* deliveries- present unique QR code status per package for tracking.
* analitical - present the conclusion from BigML prosess.

**The project's diagram:**

<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/Project.png" width="77%" height="77%">




## Part  A - Generator 
In this section we create the data with a simulator and export the data to a JSON file, create the server and connect all the tools in its redis implementation.
The JSON data incloulds id, items ,diteals about the buyer ,loaction and adress.
The fairebase got and save all the data then we use to reddis that he our middelware and connect all the tools.
Every packege got unique QR code that represent the data and the tracking status.


<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/Login.jpeg" width="77%" height="77%">

**The main page - Dashboard  :**

<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/Dashboard.jpeg" width="77%" height="77%">

**Unique QR Shipping Status :**

<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/Deliver.jpeg" width="77%" height="77%">

 
## Part B - Analaysis 
In this part we analaysis the data to see the conclusions.
We pull the relevent data from mongoDB that save tha data for long time and convert him to CSV file.
Now to analaysis the data we used in BIgML tool in association model - 
the association model analaysis the connection bitween two items.
This model looks for some connection between the two items based on Big Data, for example in many orders whoever ordered a table has a reasonable chance that he also ordered a chair.
We presented the results we got on a page called Analytical as mentioned above.

**Analitical page :**

<img src="https://github.com/LIADN7/Amazon-LEG-Delivery/blob/master/imgs/BigML.jpeg" width="77%" height="77%">




***


**[@authors liadn7](https://github.com/liadn7)**

**[@authors gidon285](https://github.com/gidon285)**

**[@authors EladVaknin](https://github.com/EladVaknin)**

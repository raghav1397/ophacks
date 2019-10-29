# ophacks


Inspiration

Katie with her fellow mates work at a community service named the Chandler care center, where they provide community services for needy people for little or no cost. They provide various services that include medical, shelter, food and so on. The saddest thing is that they do not have an application or a software that would help them do their daily work. All they have had so far is an Access database in which they work directly on. They enroll newcomers or record their visits manually in the database. Also, the user has to fill a pen and paper based form every time he/she visits chandler care center. Then, the staff uses the form to key in the details to the DB. Also, the Access DB has a single point of entry and only one person can log in and enter the data in the DB at one time. So, no matter how many staff they have, only one person's info can be fed into the system at a time. We wanted to build an application that can help them reduce their workload and their frustration that might arise due to this tedious and long process.
What our solution does

Our solution consists of:

    a Mobile website for the Customers/users(because they dont use it regularly)
    a Mobile app for the Staff(to use daily)
    a web portal to view customer details and to generate reports that they can share to the fundraisers. Process: A user signs up through the mobile website. Then, he signs in and schedules a visit through his familyname(unique id for each user). If the user is eligible for the visit, a QR code is generated for the user. If he is not eligible or if he has passed the max no. of visits/month, the QR code wont be generated for the user. He/she can show the QR code to the staff upon his visit and staff scans the QR code through her mobile application and Checks in the user thus keeping track of his visit.

Finally, at the end of the physical the staff can use the tracked visits info to generate reports for donors.
How we built it

We built it with a React frontend and a node backend. A secure mobile app that lets the staff scan the QR code and check in the user. A secure web portal that helps to view details and generate reports for donors.
Challenges we ran into

We faced few challenges with the Heroku deployment and getting the Android application to scan the QR code and make an API call to increase the number of visits.
Accomplishments that we are proud of

We are proud of having participated in this hackathon and helping an NPO to solve a problem in an innovative and quicker way rather than having so many people wait in a queue. A lot of people have unsatisfied basic needs and this is the bare minimum that we can do to help them not wait.
What I learned

All you need is humanity and a teeny weeny bit of innovation to solve so many people's problems.
What's next for Chandler Care Center

Next steps is to get the mobile app and the web portal hosted in the cloud. We should refactor the code and make sure we follow the good practices and make the code easier to maintain than it already is.

Built With

    android
    node.js
    python
    react


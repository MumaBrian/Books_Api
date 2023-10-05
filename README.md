
```
# Book_API
#Better to test with Postman, i used jwt cookie authentication
###### PART 1

### INSTALL

- `npm install`

### RUN

- `npm start`

##
http://localhost:5000/ click here to see the various endpoints.
PS. Since i used jwt authentication with cookies, it can be preferably tested with Postman

### Environment Variables

- `JWT_SECRET=`
- `PORT=`
- `MONGO_URL=`
- `FROM=`
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=`
- `SMTP_PASSWORD=`
- `SMTP_SECURE=false`
- `NODE_ENV=`




##### PART 2

### Question 2.1

- It is structured this way so that it can be easily readable and debugged.
- In production, I will ensure the environment variable `NODE_ENV` is set to production.
- I will ensure to remove the console logs.
- I will implement logging to capture errors and exceptions.
- I will enable security headers to protect against common security vulnerabilities.
- I will ensure to optimize database queries.
- I will implement caching.

### Question 2.2

- The code performs a basic age check (`if (user.age < 21)`) to reject users under 21. It is a good practice to provide more detailed validation and error messages, especially if other properties are required.
- A validation method like Joi can be used.
- Error handling is not being implemented.
- It is advisable to perform asynchronous operations.




####### PART 3

Tackling multiple tasks within a week requires careful planning and prioritization. Here's a plan on how i will try to address the given tasks:

**Prioritization and Planning**

- I will start by reviewing the critical bug in the login module. Understand the issue, its impact, and gather all relevant details.
- If the bug is straightforward, i'll fix it. If it requires more investigation, then more time will be allocated for debugging and gathering logs or error details.

**Bug Fix and Testing**

- Continue to work on fixing the critical bug in the login module.
- After implementing the fix, rigorously test it. If necessary, write unit tests to prevent future regressions.

**New Feature Development**

- Start the development of the highly requested feature. 
- Create a development plan and architecture for the feature. 

**Feature Development and Testing**

- Continue developing the new feature according to the plan. 

**API Documentation**

- Begin documenting the API changes made during the bug fix and feature development. This includes updating existing documentation and creating new documentation for the feature.
- Review and refine the API documentation.Publishing and updating the documentation in a place accessible to the team and clients.

**Database Optimization**

- Identify the areas of the database that need optimization. 
- Implement the identified database optimizations. 

**Final Testing and Deployment**

- Conduct final testing of all modules, including the bug fix, new feature, and database optimizations. 

**Deployment and Release**

- Deploy the tested changes to the production environment.
- Monitor the production environment closely for any issues. If everything goes smoothly, announce the release to clients and users.

**Post-Release Review and Cleanup**

- Conduct a post-release review with the team to gather feedback and identify any post-release issues.
- Address any immediate issues that arise and schedule any necessary follow-up work or bug fixes.
```

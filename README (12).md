# Tutorial 5

* *Date Created*: 04/07/2023
* *Last Modification Date*: 04/07/2023
* *Hosted URL*: [https://sparkling-creponne-6da4df.netlify.app/](https://sparkling-creponne-6da4df.netlify.app/)
* *Git URL*: https://git.cs.dal.ca/dkothari/csci-5709-tutorials/-/tree/main/Tutorial3

## Author

Name: Dhruv Kothari

Banner Id: B00933282

Email: dh801135@dal.ca 

## Deployment

Deployment platform name: [Netlify](https://www.netlify.com/)

Link to hosted project : [https://sparkling-creponne-6da4df.netlify.app/](https://sparkling-creponne-6da4df.netlify.app/)


## Built With

* [npm](https://www.npmjs.com/) - Package manager for node.js
* [npm init](https://create-react-app.dev/) - Tool for creating Node applications
* [nodejs](https://nodejs.org/en) - Runtime used
* [expressjs](https://nodejs.org/en) - Routing Tool

## Sources Used
### Route.js

*Lines 6-8*

```
function Idgeneration() {
  return uuidv4();
}
```

The code above was created by adapting the code in [id function generation]https://community.n8n.io/t/function-to-generate-uuid-or-similar/1269/5) as shown below: 

```
const uuid = require('uuid');
items[0].json.uuid = uuid.v4();
return items;
```

- The code in [random function generation](https://community.n8n.io/t/function-to-generate-uuid-or-similar/1269/5) was implemented by using the `uuidv4()` function from an external library or module
- I used this code because it provides a reliable and standardized way to generate unique identifiers
-  Code was modified by replacing the usage of `uuid.v4()` with `uuidv4()` to ensure compatibility with the specific library or module being used.


### Route.js

*Lines 36*

```
    const user = userslist.find((user) => user.id === id);

```

The code above was created by adapting the code in [stack overflow]https://stackoverflow.com/questions/49390964/getting-specific-user-information-from-an-array) as shown below: 

```
 let itemData = filteredData[0].games.find(game=>game.id===PlayerId)

```
- The code in [stack overflow](https:https://getbootstrap.com/docs/5.0/forms/form-control/ ) was written by some user of stack overflow
- The code was used because I wanted to find a user object from the `userslist` array based on the `id` property.
- The code was modified from the orignal code as `let itemData = filteredData[0].games.find(game=>game.id===PlayerId)` to the current code `const user = userslist.find((user) => user.id === id);`


### References

[1] singha4086. “Getting Specific User Information from an Array.” Stack Overflow, 20 Mar. 2018, https://stackoverflow.com/q/49390964 [Accessed: July 04, 2023]




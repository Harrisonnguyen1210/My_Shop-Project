# My_Shop-Project
An individual project to create an application for clothing sales

**Technologies:**<br>
| React Native | JavaScript | PHP | XAMPP | JSON Web Token (JWT) | Google Map API

# How to setup a working version of My_Shop locally: 
Prerequisites:<br>
- Install [React native](https://facebook.github.io/react-native/docs/getting-started.html)<br>
- Install [Xampp](https://www.apachefriends.org/download.html)

### Installation:
- Clone or download the git repository<br>
- *For Android*: <br>
Check your current IP address and change the IP address of all files in api folder <br>

```javascript
const changeInfo = (token, name, phone, address) => {
    // change IP here
    return fetch('http://**_YOUR IP HERE_**/app/change_info.php', {
        method: 'POST',<br>
        body: JSON.stringify({token: token, name: name, phone: phone, address: address}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json();
    })
};
```

*For IOS*: <br>
Change the IP address of all files in api folder into localhost <br>

```javascript
const changeInfo = (token, name, phone, address) => {
    // change localhost here
    return fetch('http://localhost/app/change_info.php', {
        method: 'POST',<br>
        body: JSON.stringify({token: token, name: name, phone: phone, address: address}),
        headers: {'Content-Type': 'application/json'},
    }).then((response) => {
        return response.json();
    })
};
```

- Set up Xampp and database:<br>
     1. In *xampp/htdocs/* folder: unzip and paste **app.zip** file from the project<br>
     2. Run Xampp and open http://localhost/phpmyadmin/ in browser, create db_app database and export file **db_app.sql** to create 
     the dummy database<br>
- Then run the project with the command line: 

```
react-native run-android //for android
```

```
react-native run-ios     //for ios
```

 and you are ready to have a nice shopping day.

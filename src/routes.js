const router = require('express').Router()

const createUsers = () => {
  var users = [
    {
      "ID": 1,
      "UserName": "User 1",
      "Password": "Password1"
    },
    {
      "ID": 2,
      "UserName": "User 2",
      "Password": "Password2"
    },
    {
      "ID": 3,
      "UserName": "User 3",
      "Password": "Password3"
    },
    {
      "ID": 4,
      "UserName": "User 4",
      "Password": "Password4"
    },
    {
      "ID": 5,
      "UserName": "User 5",
      "Password": "Password5"
    },
    {
      "ID": 6,
      "UserName": "User 6",
      "Password": "Password6"
    },
    {
      "ID": 7,
      "UserName": "User 7",
      "Password": "Password7"
    },
    {
      "ID": 8,
      "UserName": "User 8",
      "Password": "Password8"
    },
    {
      "ID": 9,
      "UserName": "User 9",
      "Password": "Password9"
    },
    {
      "ID": 10,
      "UserName": "User 10",
      "Password": "Password10"
    }
  ]

  return users;
}

router.get('/users', (req, res) => {
  res.json(createUsers())
})

module.exports = router;
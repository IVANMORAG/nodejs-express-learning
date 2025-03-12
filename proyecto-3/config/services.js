const services = [
    { name:"auth",
      url: "http://localhost:3001",
      path:"/api/auth",
    },
    {
        name:"users",
        url: "http://localhost:3000",
        path:"/api/users",
    }
]

module.exports = {services}
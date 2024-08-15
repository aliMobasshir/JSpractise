const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }

}

const man={
    username:"Ali",
    price: "999 m"
}

 user.welcomeMessage()
 user.username = "sam"
 user.welcomeMessage()
class App {
    constructor() {
        this.express = require("express");
        this.app = this.express();
        this.userRouter = require("./routes/user");

        this.app.use(this.express.json());
        this.app.use("/", this.userRouter);


        this.app.listen(5000, () => {
            console.log("server started");
        });
    }
}

module.exports = new App();
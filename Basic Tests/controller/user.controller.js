class UserController {
    constructor() {
        this.userModel = require('./../models/user.model');
        this.users = require('./../MOCK_DATA.json');
    }
    getAllRecords = async (req, res) => {
        try {
            const response = await this.userModel.findAll({
                attributes: ['id','firstName', 'lastName', 'email']
            });
            res.send(response)
        } catch (error) {
            console.log(error);
            res.send({ message: "Something went wrong" });
        }
    };

    getSingleUser = async (req, res) => {
        try {
            const { id } = req.params;
            const response = await this.userModel.findOne({ where: { id }, attributes: ['id', 'firstName', 'lastName', 'email'] });
            res.send(response);
        } catch (error) {
            console.log(error);
            res.send({ message: "Something went wrong" });
        }
    }

    insertOneRecord = async (req, res) => {
        try {
            const { firstName, lastName, email } = req.body;
            if (!firstName || !lastName || !email) {
                return res.send({ message: "All fields are required" });
            }
            await this.userModel.create({ firstName, lastName, email });
            res.send({ message: "Record inserted successfully" });
        } catch (error) {
            console.log(error);
            res.send({ message: "Something went wrong" });
        }
    };

    updateUser = async (req, res) => {
        try {
            const { id } = req.params;
            const { firstName, lastName, email } = req.body;
            if (!firstName || !lastName || !email) {
                return res.send({ message: "All fields are required" });
            }
            await this.userModel.update({ firstName, lastName, email }, { where: { id } });
            res.send({ message: "Record updated successfully" });
        } catch (error) {
            console.log(error);
            res.send({ message: "Something went wrong" });
        }
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            await this.userModel.destroy({ where: { id } });
            res.send({ message: "Record deleted successfully" });
        } catch (error) {
            console.log(error);
            res.send({ message: "Something went wrong" });
        }
    }
}

module.exports = new UserController();
const db = require("../config/db");
const profController = {
    getUsersProfList: async(req, res) => {
        try {
            //Sample GET API
            const users = await db.query('SELECT id, dob, gender, experience FROM professional_details ORDER BY id ASC');
            const message = "Data Retrieved Successfully";
                
            return res.status(200).send({//OK
                status: 200,
                message,
                data: users.rows
            });
        } catch (error) {
            // console.log(error,'error')//Testing
            return res.status(500).send({//Internal Error
                status: 500,
                message: "Something Went Wrong"
            });
        }
    },
    createNewUserProf: async(req, res) => {
        try {
            //Sample POST API
            //Get Payload from request body
            // const {first_name, last_name} = req.body;
            // // console.log(first_name, 'first_name')//Testing
            // if(typeof first_name === "undefined" || typeof last_name === "undefined"){
            //     return res.status(400).send({//Bad Request
            //         status: 400,
            //         message: "User First & Last Name Required"
            //     });
            // }
            const {user_id, dob, experience, gender} = req.body;
            
            await db.query(
                "INSERT INTO professional_details (user_id, dob, experience, gender) VALUES ($1, $2, $3, $4)",
                [user_id, dob, experience, gender]
            );

            return res.status(200).send({//OK
                status: 200,
                message: "User Prof. Details Created Successfully",
                data: {
                    user_id, 
                    dob, 
                    experience, 
                    gender
                }
            });
        } catch (error) {
            console.log(error)
            return res.status(500).send({//Internal Error
                status: 500,
                message: "Something Went Wrong"
            });
        }
    },
    updateUserProfDetails: async(req, res) => {
        try {
            //Sample PUT API
            //Get Payload from request body
            const {id} = req.params;
            const {dob, experience, gender} = req.body;
            await db.query(
                "UPDATE professional_details SET dob = $1, experience = $2, gender = $3 WHERE user_id = $4",
                [dob, experience, gender, id]
            );

            return res.status(200).send({//OK
                status: 200,
                message: "User Prof. Details Updated Successfully",
                data: {
                    dob, 
                    experience, 
                    gender
                }
            });
        } catch (error) {
            return res.status(500).send({//Internal Error
                status: 500,
                message: "Something Went Wrong"
            });
        }
    },
    deleteUserProfDetails: async(req, res) => {
        try {
            //Sample DELETE API
            //Get Payload from request body
            const {user_id} = req.params;
            await db.query(
                "DELETE FROM professional_details WHERE user_id = $1",
                [user_id]
            );

            return res.status(200).send({//OK
                status: 200,
                message: "User Prof Details Deleted Successfully"
            });
        } catch (error) {
            return res.status(500).send({//Internal Error
                status: 500,
                message: "Something Went Wrong"
            });
        }
    }
}

module.exports = profController;
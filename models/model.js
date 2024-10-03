const mongoose = require('mongoose');
const userModel = new mongoose.Schema(
    {
        nomuser: {
            type: String
        },
        nompassword:{
            type: String
        }
    },
    {
        timestamps:true,
        versionKey:false    
    }
)

const ModelUser = mongoose.model("users", userModel);
module.exports = ModelUser;
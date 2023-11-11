const mongoose = require('mongoose');

class UserModels extends mongoose.Schema {
    constructor() {
        super({
            username: { type: String, required: true },
            password: { type: String, required: true },
            userType: { type: mongoose.Schema.Types.ObjectId, ref: 'UserType' }
        }, { timestamps: true });
    }
}

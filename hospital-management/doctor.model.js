import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    experienceInYears:{
        type:Number,
        required:true,
        default:0
    },
    salary:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        default:true
    },
    qualification:{
        type:String,
        required:true
    },
    worksInHospital:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hospital'
        }
    ]
},{timestamps:true});

export const Doctor = mongoose.model('Doctor',doctorSchema);
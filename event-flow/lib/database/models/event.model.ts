import { Schema, model, models } from "mongoose";

const EventScheme = new Schema({
   title:{type:String,required:true},
   description:{type:String},
   location:{type:String},
   createdAt:{type:Date , default:Date.now},
   imageUrl:{type:Date,required:true},
   startDateTime:{type:Date ,default:Date.now },
   endDateTime:{type:Date , default:Date.now},
   price:{type:String},
   isFree:{type:Boolean,default:false},
   url:{type:String},
   category:{type:Schema.Types.ObjectId,ref:'Category'},
   organizer:{type:Schema.Types.ObjectId,ref:'User'}
})

const Event = models.Event || model('Event',EventScheme);

export default Event;
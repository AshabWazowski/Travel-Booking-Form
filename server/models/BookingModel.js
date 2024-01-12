import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
 bookId:{
    type: String,
 },
 title:{
    type: String ,
    required:true,
    max: 100,
 },
fromAirport:{
    type: String ,
    required:true,
},
toAirport:{
    type: String ,
    required:true,
},
deptDate:{
    type:Date ,
    required:true
},
returnDate:String,
people:{
    type: Number,
    required:true
},
flightClass:String,
hotel:Boolean,
hotelDays:Number,
car:Boolean,
carType:String,
carDays:Number,
status: String,
}, 
{timestamps:true}
);

const booking = mongoose.model('Booking', BookingSchema)

export default booking;
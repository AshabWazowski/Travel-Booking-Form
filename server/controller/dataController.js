import booking from "../models/BookingModel";

// When user save the booking instead of submitting
export const savedBooking = async (req, res) => {
  const {
    userId,
    title,
    fromAirport,
    toAirport,
    dptDate,
    returnDate,
    peopleCount,
    radioCheck,
    flightClass,
    hotel,
    hotelDays,
    car,
    carDays,
    carType,
    status,
    bookingId,
  } = req.body;

  const updateEntry = await booking.findOne({ bookingId: bookingId });
  
  if (updateEntry) {
    const updatedBooking = await booking.findByIdAndUpdate(updateEntry._id, {
      userId,
      title,
      fromAirport,
      toAirport,
      dptDate,
      returnDate,
      peopleCount,
      radioCheck,
      flightClass,
      hotel,
      hotelDays,
      car,
      carDays,
      carType,
      status,
      bookingId,
    },
    {new:true}
    );

    return res.status(200).json({message:"Booking Saved"});
  }

  try {
    const savedBooking = await booking({
      userId,
      title,
      fromAirport,
      toAirport,
      dptDate,
      returnDate,
      peopleCount,
      radioCheck,
      flightClass,
      hotel,
      hotelDays,
      car,
      carDays,
      carType,
      status,
      bookingId,
    });

    savedBooking.save();
    res.status(200).json({ message: "Booking Saved Successfully" });
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

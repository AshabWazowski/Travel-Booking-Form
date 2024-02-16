import { Router } from 'express';
import { savedBooking } from "../controller/dataController";


const router = Router();

router.post('/saved' , savedBooking);

export default router;
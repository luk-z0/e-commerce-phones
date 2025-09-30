import * as phoneController from '../controllers/phoneController';
const router = createRouter();

router.get('/phones', defineEventHandler(phoneController.findAll));
router.get('/phones/:id', defineEventHandler(phoneController.findById));
router.post('/phones', defineEventHandler(phoneController.create));
router.put('/phones/:id', defineEventHandler(phoneController.update));
router.delete('/phones/:id', defineEventHandler(phoneController.remove));

export default useBase('/api', router.handler);
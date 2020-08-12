import { Router } from 'express';
import BankService from '../services/bank.service';
const bankRouter = Router();
const bankService = new BankService();

bankRouter.get('/balance', (req, res) => {
    res.json(bankService.getBalance());
});

bankRouter.get('withdrawl', (req, res) => {
    
});

export default bankRouter;
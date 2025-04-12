import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/chat', (req, res) => {
  const { username } = req.body;
  res.render('chat', { username });
});

export default router;

const Router = require('express');

const router = Router();

router.get('/', async (req, res) => {
  const members = await req.context.models.Household.find();
  return res.send(members);
});

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   );
//   return res.send(user);
// });


module.exports = { 'router' : router };

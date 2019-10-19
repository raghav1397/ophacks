const Router = require('express');

const router = Router();

router.get('/', async (req, res) => {
  if(req.query.userName){
    const user = await req.context.models.User.findByUserName(
      req.query.userName,
    );
    return res.send(user);
  }
  const users = await req.context.models.User.find();
  return res.send(users);
});

// router.get('/:userId', async (req, res) => {
//   const user = await req.context.models.User.findById(
//     req.params.userId,
//   );
//   return res.send(user);
// });


module.exports = { 'router' : router };

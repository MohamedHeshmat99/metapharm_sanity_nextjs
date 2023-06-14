import connect from "@/lib/logindb";
import User from "@/models/Schema";

connect()

export default async function handle(req, res) {
  try {
      const user = await User.create(req.body);
      res.redirect('/')
      if (!user) {
        return res.json({"code":'User not created'})
      }
  } catch (error) {
      res.status(400).json({ status:"Not able to create a new user."})
  }
}
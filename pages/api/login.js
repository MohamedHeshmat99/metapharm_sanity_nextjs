import connect from "@/lib/logindb";
import User from "@/models/Schema";

connect()

export default async function handle(req, res) {
  
  const {email, password} = req.body
  const user = await User.findOne({email, password})
  if (!user) {
    return res.json({status:"Not able to find the user"})
  }
  else {
    res.redirect('/')
  }
  
}
//how to hash password

import bcrypt from 'bcrypt'

// const pwd = "pass1234"

// const hashedpwd = await bcrypt.hash(pwd,10)

// console.log(hashedpwd);

const check = await bcrypt.compare("pass1234","$2b$10$oeyrEH7hdeYFmZgoIFs2OurWHGlJKeWzGXW6GVzzaM3hTvSyuXHxe")
console.log(check)
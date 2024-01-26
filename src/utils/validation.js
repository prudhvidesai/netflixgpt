export const checkValidation = (email,password)=>{

   const isemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
   const ispassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

   if (!isemail) return "Email Is Not Valid"
   if (!ispassword) return "Password Is Not Valid"

    return null
}
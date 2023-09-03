function generateOTP() {
    const otp = Math.ceil(Math.random() * 7000) + 1000;
    return otp;
  }
  
  
  console.log(`Here is your OTP : ${generateOTP()}`);
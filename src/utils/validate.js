const isValidEmail = (mail) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
};
const isValidPassword = (password) => password.length >= 3;

export default { isValidPassword, isValidEmail };

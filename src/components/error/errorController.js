const errorController = (error) => {
  console.log(error);
  alert(error.data.message);
};

export default errorController;

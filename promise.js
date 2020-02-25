const pro = new Promise((re, rj) => {
  setTimeout(() => {
    re({ a: 1 });
  }, 1000);
});

pro
  .then(re => {
    console.log(re)
    if(re.a === 1) {
      throw new Error('失败')
    }
  })
  .catch(err => {
    console.log(err)
  });

  try{
    throw 1
  }
  catch (err){
    console.log(err)
  }
const express=require('express')
const fs=require('fs')
const app=express()

//解决跨域问题。设置允许跨域的域名，*代表都允许
app.all('*',function(req,res,next){
  //允许的header类型
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers','content-type')
  //跨域请求方式
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
  if(req.method.toLowerCase()=='options')
    res.send(200)
  else
    next()
})

app.get('/home/multidata',function(req,res){
  fs.readFile('./data/multidata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/homedata',function(req,res){
  fs.readFile('./data/homedata.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/cate/category',function(req,res){
  fs.readFile('./data/category.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/cate/category3627',function(req,res){
  fs.readFile('./data/subcategory3627.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})
app.get('/cate/category582',function(req,res){
  fs.readFile('./data/subcategory582.json',function(err,data){
    if(err){
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})

app.get('/home/tabdata', function (req, res) {
  fs.readFile('./data/tabdata.json', function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send(JSON.parse(data))
  })
})



/*app.get('/home/homedata', function (req, res) {
  //判断参数
  const path=`./data/homedata/${req.query.type}${req.query.page}.json`
  // console.log(path)
  fs.readFile(path, function (err, data) {
    if (err) {
      return res.send('err')
    }
    res.send((JSON).parse(data))
  })
})*/


app.listen(8000,function(){
  console.log('server is running...')
})




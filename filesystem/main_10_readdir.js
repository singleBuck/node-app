// 以下为读取目录的语法格式：

// fs.readdir(path, callback)

// 参数使用说明如下：

// path - 文件路径。

// callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
 const fs = require('fs')

// 路径为本文件的相对路径
 fs.readdir('../test/', (err, files) => {
  if (err) return console.log(err)

  files.forEach( file => {
    console.log(file)
  })
 })
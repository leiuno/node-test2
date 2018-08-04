
window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery
window.jQuery.ajax = function(options){
  return new Promise(function(resolve,reject){
    let url = options.url
    let method = options.method
    let body = options.body
    let success = options.success
    let fail = options.fail
  
    let request = new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange = function(){
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}


myButton.addEventListener('click',function(e){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'post',
    body: 'a=1&b=2',
  }).then(
    (text)=>{console.log(text)},
    (request)=>{console.log(request)}
  )
})










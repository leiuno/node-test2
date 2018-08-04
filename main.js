
window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}
window.$ = window.jQuery
window.jQuery.ajax = function(options){
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
        success.call(undefined, request.responseText)
      }else if(request.status >= 400){
        fail.call(undefined, request)
      }
    }
  }
  request.send(body)
}


myButton.addEventListener('click',function(e){
  window.jQuery.ajax({
    url: '/xxx',
    method: 'post',
    body: 'a=1&b=2',
    success: function(x){
      console.log(x)
    },
    fail: function(x){
      console.log(x)
    }
  })
})










window.addEventListener("unload", ()=>{
        let xhr = new XMLHttpRequest();

        xhr.open('GET', '/galmeirigalmeirigalmeiri');

        xhr.responseType = 'json';

        xhr.send();

        // the response is {"message": "Hello, world!"}
        xhr.onload = function() {
          let responseObj = xhr.response;
          //alert(responseObj.message); // Hello, world!
        };

    });

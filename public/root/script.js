const sendCredentials = () => {
                let xmlHttp = new XMLHttpRequest();
                //console.log(document.getElementById("exampleInputEmail1").value);
                //console.log(document.getElementById("exampleInputPassword1").value);

                fetch(`http://localhost/api/?login=${document.getElementById("exampleInputEmail1").value}&password=${document.getElementById("exampleInputPassword1").value}`)
                                .then((response) => {
                                                return response.text();
                                })
                                .then((data) => {
                                                console.log(data);
                                });
}


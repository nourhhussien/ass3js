var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteUrl");


// console.log(siteName)

var siteList = JSON.parse(localStorage.getItem("name")) || [];

// name = JSON.parse(localStorage.getItem("name"));
 displayInfo()
function addInfo() {

    if (validationName()&&validationURL()) {
        var site={
    
            name:siteName.value,
            link:siteURL.value,
        }
        
        siteList.push(site)
        
        
        displayInfo();
        localStorage.setItem("name", JSON.stringify(siteList));
        
         console.log(siteList);
        //   clear()
        
    } else{


        alert("Site Name or Url is not valid, Please follow the rules ")
    }


}



function clear() {
    siteName.value=null;
    siteURL.value=null;
}



function displayInfo() {
    var demo="";

    for (let i = 0; i <siteList.length; i++) {
        
        demo +=`
    
        <tr>
          <td>${i+1}</td>
          <td>${siteList[i].name}</td>
          <td>
           <a href=" ${siteList[i].link}"> <button type="button" class="btn btn-success">
              <i class="fa fa-eye" style="font-size:24px"></i>
              Visit</button> </a>
          </td>
          <td>  
            <button onclick="deleteSite(${i})" type="button" class="btn btn-danger">
              <i class="fa fa-trash" style="font-size:24px"></i>
              Delete</button>
          </td>
        </tr>
    
        `
    
        
    }


    document.getElementById("info").innerHTML = demo;


    
}


 
function deleteSite(index) {

    siteList.splice(index,1)
    // console.log(siteList)
    localStorage.setItem("name", JSON.stringify(siteList));
    displayInfo()
    
}






function validationName() {
    
    let re = /^([a-zA-Z0-9_\s]+)$/;
            if (re.test(siteName.value)) {
                siteName.style.border = "green solid 3px";

                return true;
            }
            else {
                siteName.style.border = "red solid 3px";
                return false;
            }
        }




function validationURL() {
    let re = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+\/?)*$/;
    if (re.test(siteURL.value)) {
        siteURL.style.border = "green solid 3px";

        return true;
    }
    else {
        siteURL.style.border = "red solid 3px";
        return false;
    }
}
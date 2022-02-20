let dropdown = document.getElementById('county');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose county';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://counties-kenya.herokuapp.com/api/v1';

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // checks the text in the response  
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
      	  option.text = data[i].name;
      	  dropdown.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
import React, { useState } from 'react';
 
const Todo = props => {
    const [state, setState] = useState({}); 
    const handleChange = (evt) => {
 
        const value = evt.target.value;
          if(evt.target.checked){
            setState({
                ...state,
                [evt.target.name]: value
              });
        }else{
           delete state[evt.target.name];   
        }      
      }

      const dataHandler = (evt) => {
          let myobj = {}
           const form = evt.target;
           const data = new FormData(form);
           let i =1;
       
           for(let testing of form){
               if(!myobj[testing.getAttribute('targeting')]){
                   myobj.[testing.getAttribute('targeting')] = {}
                   i=1;
               }
               if(testing.checked){
                myobj[testing.getAttribute('targeting')][i] = testing.getAttribute('name');
                i++
            }
           }
           console.log(myobj); 
          evt.preventDefault();
      }
      
      const selectallvalue = (evt) => {
        console.log(evt.target.getAttribute('targeting'));
        var checkboxes = document.querySelectorAll('input[targeting="'+ evt.target.getAttribute('targeting') +'"]');
        for (let i = 0; i < checkboxes.length; i++) {
          if(!checkboxes[i].checked && evt.target.checked)
            checkboxes[i].click(); 
            else if(checkboxes[i].checked && !evt.target.checked)
             checkboxes[i].click(); 
        }
      }

  return (
    <React.Fragment>
    <div className="container">  
    <form onSubmit={dataHandler}>
      
    <div className="col-1">
    <label><input
          type="checkbox"
          name="Honey Boy"
          value={2020}
          id="amazonPrime"
          targeting="amazonPrime"
          onChange={selectallvalue}
        /> Amazon Prime
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Honey Boy"
          targeting="amazonPrime"
          value={2020}
          onChange={handleChange}
        />
        Honey Boy
      </label>
      <label>
        <input
          type="checkbox"
          name="Jurassic Park"
          targeting="amazonPrime"
          value={2018}
          onChange={handleChange}
        />
        Jurassic Park
      </label>
      <label>
        <input
          type="checkbox"
          name="Dolittle"
          targeting="amazonPrime"
          value={2020}
          onChange={handleChange}
        />
        Dolittle
      </label>
      <label>
        <input
          type="checkbox"
          name="Wonder Woman"
          targeting="amazonPrime"
          value={2018}
          onChange={handleChange}
        />
        Wonder Woman
      </label>
      <label>
        <input
          type="checkbox"
          name="The Matrix"
          targeting="amazonPrime"
          value={2018}
          onChange={handleChange}
        />
        The Matrix
      </label>
      <label>
        <input
          type="checkbox"
          name="Forrest Gump"
          targeting="amazonPrime"
          value={2018}
          onChange={handleChange}
        />
        Forrest Gump
      </label>
      <label>
        <input
          type="checkbox"
          name="Gladiator"
          targeting="amazonPrime"
          value={2018}
          onChange={handleChange}
        />
        Gladiator
      </label>
      </div>
     
      <div className="col-1">
    <label> <input
          type="checkbox"
          name="Tanhaji"
          targeting="Hotstar"
          value={2020}
          onChange={selectallvalue}
        />Hotstar
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Tanhaji"
          targeting="Hotstar"
          value={2020}
          onChange={handleChange}
        />
        Tanhaji
      </label>
      <label>
        <input
          type="checkbox"
          name="New York"
          targeting="Hotstar"
          value={2009}
          onChange={handleChange}
        />
        New York
      </label>
      <label>
        <input
          type="checkbox"
          name="Bajirao Mastani"
          targeting="Hotstar"
          value={2015}
          onChange={handleChange}
        />
        Bajirao Mastani
      </label>
      <label>
        <input
          type="checkbox"
          name="Angrezi Medium"
          targeting="Hotstar"
          value={2020}
          onChange={handleChange}
        />
        Angrezi Medium
      </label>
      <label>
        <input
          type="checkbox"
          name="Agent Vinod"
          targeting="Hotstar"
          value={2012}
          onChange={handleChange}
        />
        Agent Vinod
      </label>
      <label>
        <input
          type="checkbox"
          name="Dulhe Raja"
          targeting="Hotstar"
          value={1998}
          onChange={handleChange}
        />
        Dulhe Raja
      </label>
      <label>
        <input
          type="checkbox"
          name="Omkara"
          targeting="Hotstar"
          value={2006}
          onChange={handleChange}
        />
        Omkara
      </label>
      </div>
     
      <div className="col-1">
    <label><input
          type="checkbox"
          name="Tanhaji"
          targeting="Netflix"
          value={2020}
          onChange={selectallvalue}
        /> Netflix
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Breaking Bad"
          targeting="Netflix"
          value={2008}
          onChange={handleChange}
        />
        Breaking Bad
      </label>
      <label>
        <input
          type="checkbox"
          name="The Punisher"
          targeting="Netflix"
          value={2017}
          onChange={handleChange}
        />
        The Punisher
      </label>
      <label>
        <input
          type="checkbox"
          targeting="Netflix"
          name="Titans"
          value={2018}
          onChange={handleChange}
        />
        Titans
      </label>
      <label>
        <input
          type="checkbox"
          targeting="Netflix"
          name="Chhota Bheem"
          value={2008}
          onChange={handleChange}
        />
       Chhota Bheem
      </label>
      <label>
        <input
          type="checkbox"
          targeting="Netflix"
          name="Sense8"
          value={2015}
          onChange={handleChange}
        />
        Sense8
      </label>
      <label>
        <input
          type="checkbox"
          targeting="Netflix"
          name="Glee"
          value={2009}
          onChange={handleChange}
        />
        Glee
      </label>
      <label>
        <input
          type="checkbox"
          targeting="Netflix"
          name="V Wars"
          value={2009}
          onChange={handleChange}
        />
        V Wars
      </label>
      </div>
     

       
    <p>Please select/deselect from the list to generate console output<input type="submit" name="submit"/></p>
      
    </form>
    </div>
    </React.Fragment>
  );
};

export default Todo;

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
          console.log(state);
          evt.preventDefault()
      }
      
      function buttonClicked(index) {  
        return function() {
          index.click();
        }
      }
      
      const selectallvalue = () => {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (let i = 0; i < checkboxes.length; i++) {
            
            buttonClicked(checkboxes[i]);
            
                
        }
      }

  return (
    <React.Fragment>
    <div className="container">  
    <form onSubmit={dataHandler}>
      
    <div className="col-1">
    <label> Hollywood
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Avengers: Endgame"
          value={2020}
          onChange={handleChange}
        />
        Avengers: Endgame
      </label>
      <label>
        <input
          type="checkbox"
          name="Black Panther"
          value={2018}
          onChange={handleChange}
        />
        Black Panther
      </label>
      <label>
        <input
          type="checkbox"
          name="Dolittle"
          value={2020}
          onChange={handleChange}
        />
        Dolittle
      </label>
      <label>
        <input
          type="checkbox"
          name="Wonder Woman"
          value={2018}
          onChange={handleChange}
        />
        Wonder Woman
      </label>
      <label>
        <input
          type="checkbox"
          name="The Matrix"
          value={2018}
          onChange={handleChange}
        />
        The Matrix
      </label>
      <label>
        <input
          type="checkbox"
          name="Forrest Gump"
          value={2018}
          onChange={handleChange}
        />
        Forrest Gump
      </label>
      <label>
        <input
          type="checkbox"
          name="Gladiator"
          value={2018}
          onChange={handleChange}
        />
        Gladiator
      </label>
      </div>
     
      <div className="col-1">
    <label> Bollywood
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Tanhaji"
          value={2020}
          onChange={handleChange}
        />
        Tanhaji
      </label>
      <label>
        <input
          type="checkbox"
          name="New York"
          value={2009}
          onChange={handleChange}
        />
        New York
      </label>
      <label>
        <input
          type="checkbox"
          name="Bajirao Mastani"
          value={2015}
          onChange={handleChange}
        />
        Bajirao Mastani
      </label>
      <label>
        <input
          type="checkbox"
          name="Angrezi Medium"
          value={2020}
          onChange={handleChange}
        />
        Angrezi Medium
      </label>
      <label>
        <input
          type="checkbox"
          name="Agent Vinod"
          value={2012}
          onChange={handleChange}
        />
        Agent Vinod
      </label>
      <label>
        <input
          type="checkbox"
          name="Dulhe Raja"
          value={1998}
          onChange={handleChange}
        />
        Dulhe Raja
      </label>
      <label>
        <input
          type="checkbox"
          name="Omkara"
          value={2006}
          onChange={handleChange}
        />
        Omkara
      </label>
      </div>
     
      <div className="col-1">
    <label> Netflix
    </label>
      
    <label>
        <input
          type="checkbox"
          name="Breaking Bad"
          value={2008}
          onChange={handleChange}
        />
        Breaking Bad
      </label>
      <label>
        <input
          type="checkbox"
          name="The Punisher"
          value={2017}
          onChange={handleChange}
        />
        The Punisher
      </label>
      <label>
        <input
          type="checkbox"
          name="Titans"
          value={2018}
          onChange={handleChange}
        />
        Titans
      </label>
      <label>
        <input
          type="checkbox"
          name="Chhota Bheem"
          value={2008}
          onChange={handleChange}
        />
       Chhota Bheem
      </label>
      <label>
        <input
          type="checkbox"
          name="Sense8"
          value={2015}
          onChange={handleChange}
        />
        Sense8
      </label>
      <label>
        <input
          type="checkbox"
          name="Glee"
          value={2009}
          onChange={handleChange}
        />
        Glee
      </label>
      <label>
        <input
          type="checkbox"
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

import React from 'react';

const NewTempRob = ({mtonlick, submit}) => {
	return (

		<div id="myModal" className="modal">

		  <div className="modal-content tc dib bg-washed-blue br4">
		    <span className="close" onClick={mtonlick}>&times;</span>
		    <form onSubmit={submit}>
			  <div className="form-group">
			    <label htmlFor="inputName">Robo name</label>
			    <input type="text" className="form-control" id="inputName" name="inputName" placeholder="Enter Robo name" />
			  </div>

			  <div className="form-group">
			    <label htmlFor="inputEmail">Email address</label>
			    <input type="email" className="form-control" id="inputEmail" name="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
			  </div>
			  
			  <button type="submit" className="btn btn-primary" onClick={mtonlick}>Submit</button>
			</form>
		  </div>

		</div>


	)
}

export default NewTempRob;
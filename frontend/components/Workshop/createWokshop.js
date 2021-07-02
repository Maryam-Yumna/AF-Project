import React, { Component} from 'react';
import Select from 'react-select';
import axios from 'axios';

const initialState = {
  year: '',
  topic: '',
  description: '',
  conductedBy: '',
  conductedOn: '',
  conferences: [],
  options: [],
  selectedconferences: []
}

class CreateCourse extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onconferencesSelect = this.onconferencesSelect.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    axios.get('http://localhost:8070/conferenceAPi/')
    .then(response => {
      this.setState({ conferences: response.data.data }, () => {
        let data = [];
        this.state.conferences.map((item, index) => {
          let conference = {
            value: item._id,
            label: item.name
          }
          data.push(conference)
        });
        this.setState({ options: data });
      })
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubjectSelect(e) {
    this.setState({ selectedconferences: e ? e.map(item => item.value) : [] });
  }

  onSubmit(e) {
    e.preventDefault();
    let conference = {
     
      year: this.state.year,
      topic: this.state.topic,
      description: this.state.description,
      conductedBy: this.state.conductedBy,
      conductedOn: this.state.conductedOn,
     
      conferences: this.state.selectedconferences
    };
    console.log('DATA TO SEND',conference)
    axios.post('http://localhost:8070/workshop/newWorkshop',conference)
    .then(response => {
      alert('Course Data successfully inserted')
    })
    .catch(error => {
      console.log(error.message);
      alert(error.message)
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Create Course</h1>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">Year</label>
            <input 
              type="text" 
              className="form-control" 
              id="subjectName" 
              name="courseName" 
              value={this.state.year} 
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subjectName" className="form-label">Topic</label>
            <input 
              type="text" 
              className="form-control" 
              id="subjectName" 
              name="code" 
              value={this.state.topic} 
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subjectAmount" className="form-label">Description</label>
            <input 
              type="number" 
              className="form-control" 
              id="subjectAmount" 
              name="passMark" 
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subjectAmount" className="form-label">conducted By</label>
            <input 
              type="text" 
              className="form-control" 
              id="subjectAmount" 
              name="lecture" 
              value={this.state.conductedBy}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subjectAmount" className="form-label">conducted On</label>
            <input 
              type="text" 
              className="form-control" 
              id="subjectAmount" 
              name="lecture" 
              value={this.state.conductedOn}
              onChange={this.onChange}
            />
          </div>
          <Select 
            options={this.state.options}
            onChange={this.onconferencesSelect}
            className="basic-multi-select"
            isMulti
          />
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default CreateCourse;
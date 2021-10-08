import React, { Component, useState } from "react";
import AdmissionDetailsPG from "../components/Form/AdmissionDetailsPG";
import AdmissionDetailsUG from "../components/Form/AdmissionDetailsUG";
import Documents from "../components/Form/Documents";
import NavBar from "../components/Navbar/Navbar";
import PersonalDetails from "../components/Form/PersonalDetails";
import AccountsDetails from "../components/Form/AccountsDetails";
import { Redirect } from "react-router-dom";
import EntranceExamDetails from "../components/Form/EntranceExamDetails";

export default class admissionForm extends Component {
  state = {
    step: 1,
    data: {
      name: "",
      middleName: "",
      gender: "",
      dob: "",
      email: "",
      mobile: "",
      nationality: "",
      category: "",
      aadhar: "",
      address: "",
      physicallyDisabled: "",
      department: "",

      ugUniversity: "",
      ugNomanclaure: "",
      ugSpecialization: "",
      ugMarksObtained: "",
      ugTotalMarks: "",
      ugCGPA: "",
      ugPercentage: "",
      ugDOD: "",

      pgUniversity: "",
      pgNomanclaure: "",
      pgMarksObtained: "",
      pgTotalMarks: "",
      pgCGPA: "",
      pgPercentage: "",

      entranceOptions: [],
      gate: false,
      gateScore: "",
      gateDOV: "",
    },
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    const { step } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <NavBar />
            <PersonalDetails nextStep={this.nextStep} data={this.state.data} />
          </div>
        );
      case 2:
        return (
          <div>
            <NavBar />
            <AdmissionDetailsUG
              nextStep={this.nextStep}
              data={this.state.data}
              // prevStep={this.prevStep}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <NavBar />
            <AdmissionDetailsPG
              nextStep={this.nextStep}
              data={this.state.data}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <NavBar />
            <EntranceExamDetails
              nextStep={this.nextStep}
              data={this.state.data}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <NavBar />
            <Documents nextStep={this.nextStep} data={this.state.data} />
          </div>
        );
      case 6:
        return (
          <div>
            <NavBar />
            <AccountsDetails nextStep={this.nextStep} data={this.state.data} />
          </div>
        );
      default:
        return <Redirect to="/studenthome" />;
    }
  }
}

class Doctor {
  constructor(name, experience, profession) {
    this.name = name;
    this.experience = experience;
    this.profession = profession;
  }
}

class Patient {
  constructor(name, status, illness) {
    this.name = name;
    this.status = status;
    this.illness = illness;
  }
}

class Hospital {


  doctors = [
    new Doctor('Mike', 4, 'Epidemiology'),
    new Doctor('Alex', 10, 'Lung Deceases')
  ]

  addDoctors() {
    this.doctors.push(new Doctor('John', 5, 'Practitioner'))
  }

  showDoctorStatus() {
    for (const doctor of this.doctors) {
      const showDoctors = document.createElement('li');
      showDoctors.innerHTML = `<p> Doctor ${doctor.name} Experience ${doctor.experience} years profession ${doctor.profession}</p>`;
      document.getElementById('app').append(showDoctors);
    }
  }

  patients = [
    new Patient('Scot', 'covid-19', 'critical'),
    new Patient('John', 'car accident', 'critical')
  ]

  addPatients() { }

  showPatientsStatus() {
    for (const patient of this.patients) {
      const newPatient = document.createElement('li');
      newPatient.innerHTML = `<p>Patient ${patient.name} suffer from: ${patient.status} ${patient.illness}</p>`;
      document.getElementById('patients').append(newPatient);
    }
  }
}


const addDoctors = new Hospital()
const addPatients = new Hospital();

addDoctors.addDoctors();

console.log(addDoctors);

addPatients.addPatients();
console.log(addPatients);


const showHospitalStatus = new Hospital();
showHospitalStatus.showDoctorStatus();

const showPatients = new Hospital();
showPatients.showPatientsStatus();
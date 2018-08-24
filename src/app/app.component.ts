import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  records: Array<any>;
  recordForm: FormGroup;
  diabetes: any;
  gender: any;
  checked: any;
  tempTable;

  constructor(private fb: FormBuilder) {
    this.createForm();
    this.records = [];
  }

  private createForm() {
    this.recordForm = this.fb.group({
      firstName: [""],
      lastName: [""],
      gender: [""],
      diabetes: [""],
      age: [""],
      country: [""],
      city: [""]
    });
  }

  onSubmit() {
    const firstName = this.recordForm.get("firstName").value;
    const lastName = this.recordForm.get("lastName").value;
    const gender = this.recordForm.get("gender").value;
    const diabetes = this.recordForm.get("diabetes").value;
    const age = this.recordForm.get("age").value;
    const country = this.recordForm.get("country").value;
    const city = this.recordForm.get("city").value;

    const data = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      gender: gender.trim(),
      diabetes: diabetes.trim(),
      age: age,
      country: country.trim(),
      city: city.trim()
    };

    this.records.push(data);
  }

  getOnlyMinors() {
    const newRecords = [];
    if (!this.checked) {
      this.checked = true;
      this.tempTable = this.records;
      this.records.forEach(element => {
        if (element.age <= 18) {
          newRecords.push(element);
        }
      });
      this.records = newRecords;
    } else {
      this.checked = false;
      this.records = this.tempTable;
    }
  }
}

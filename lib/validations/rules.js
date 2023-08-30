export const validationRules = {
  name: {
    required: "Name is required",
    minLength: { message: "Name should be at least 3 characters" }
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,4}$/,
      message: "Invalid email"
    }
  },
  age: {
    required: "Age is required",
    min: { value: 18, message: "Age should be greater than 18" }
  },
  address: {
    required: "Address is required",
    minLength: {
      value: 10,
      message: "Address should be at least 10 characters"
    }
  },
  department: {
    required: "Department is required",
    minLength: {
      value: 3,
      message: "Department should be at least 3 characters"
    }
  },
  salary: {
    required: "Salary is required",
    min: { value: 1000, message: "Salary should be greater than 1000" }
  },
  phone: {
    required: "Phone is required",
    minLength: {
      value: 10,
      message: "Phone should be at least 10 characters"
    }
  },
  dateOfHire: {
    required: "Date of Hire is required"
  },
  birthDate: {
    required: "Date of Birth is required"
  },
  civilStatus: {
    required: "Civil Status is required",
    minLength: {
      value: 3,
      message: "Civil Status should be at least 3 characters"
    }
  },
  jobTitle: {
    required: "Job Title is required",
    minLength: {
      value: 3,
      message: "Job Title should be at least 3 characters"
    }
  }
}

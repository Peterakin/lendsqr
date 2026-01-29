export interface User {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";

  // Details page fields
  fullName: string;
  accountNumber: string;
  bank: string;
  balance: string;
  tier: number;

  personalInfo: {
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    children: string;
    residence: string;
  };

  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    income: string;
    loanRepayment: string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantor: {
    fullName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}


export interface UserResponse {
  users: User[];
}
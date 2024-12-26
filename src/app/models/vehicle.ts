export interface ContactDetails {
  phone: string;
  email: string;
  whatsapp: string | null;
}

// Sub-interface for Insurance Details
export interface InsuranceDetails {
  type: string;
  expiryDate: string;
}

// Main Vehicle Details Interface
export interface Vehicle {
  id:number,
  vehicleType: string;
  brand: string;
  model: string |undefined;
  yearOfManufacture: number;
  condition: string;
  mileage: string;
  engineCapacity: string;
  fuelType: string;
  transmission: string;
  driveType: string;
  seats: number;
  doors: number;
  color: string;
  registrationNumber: string;
  province: string;
  ownerType: string;
  previousOwners: number;
  vin: string;
  airConditioning: boolean;
  powerSteering: boolean;
  powerWindows: boolean;
  entertainmentSystem: string;
  safetyFeatures: string[]; // Array of strings
  additionalFeatures: string[]; // Array of strings
  price: number;
  negotiable: boolean;
  paymentOptions: string[]; // Array of strings
  leasingAvailable: boolean;
  images: string[]; // Array of image URLs
  sellerName: string;
  contactDetails: ContactDetails; // Sub-interface for contact details
  location: string;
  serviceHistory: boolean;
  accidentHistory: boolean;
  warrantyDetails: string;
  emissionTestValid: boolean;
  insuranceDetails: InsuranceDetails; // Sub-interface for insurance details
  customizations: string[]; // Array of customizations
  reasonForSale: string;
}

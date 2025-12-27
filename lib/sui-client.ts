import { SuiClient, getFullnodeUrl } from "@mysten/sui/client"

// Initialize Sui client for mainnet
export const suiClient = new SuiClient({
  url: getFullnodeUrl("mainnet"),
})

// Walrus storage configuration
export const WALRUS_AGGREGATOR_URL = "https://aggregator.walrus-testnet.walrus.space"
export const WALRUS_PUBLISHER_URL = "https://publisher.walrus-testnet.walrus.space"

// Smart contract package ID (to be deployed)
export const SELORA_PACKAGE_ID = process.env.NEXT_PUBLIC_SELORA_PACKAGE_ID || ""

// Object types for Selora platform
export const OBJECT_TYPES = {
  PATIENT_PROFILE: `${SELORA_PACKAGE_ID}::patient::PatientProfile`,
  HEALTH_RECORD: `${SELORA_PACKAGE_ID}::records::HealthRecord`,
  DOCTOR_PROFILE: `${SELORA_PACKAGE_ID}::doctor::DoctorProfile`,
  LAB_PROFILE: `${SELORA_PACKAGE_ID}::lab::LabProfile`,
  INSURANCE_CLAIM: `${SELORA_PACKAGE_ID}::insurance::Claim`,
  RESEARCH_REQUEST: `${SELORA_PACKAGE_ID}::research::Request`,
}

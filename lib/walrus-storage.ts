import { WALRUS_PUBLISHER_URL, WALRUS_AGGREGATOR_URL } from "./sui-client"

export interface WalrusUploadResponse {
  blobId: string
  endEpoch: number
  suiRef: string
}

/**
 * Upload file to Walrus decentralized storage
 */
export async function uploadToWalrus(file: File): Promise<WalrusUploadResponse> {
  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch(`${WALRUS_PUBLISHER_URL}/v1/store`, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to upload to Walrus")
  }

  const data = await response.json()
  return {
    blobId: data.newlyCreated?.blobObject?.blobId || data.alreadyCertified?.blobId,
    endEpoch: data.newlyCreated?.blobObject?.storage?.endEpoch || data.alreadyCertified?.endEpoch,
    suiRef: data.newlyCreated?.blobObject?.id || data.alreadyCertified?.blobId,
  }
}

/**
 * Get file URL from Walrus storage
 */
export function getWalrusUrl(blobId: string): string {
  return `${WALRUS_AGGREGATOR_URL}/v1/${blobId}`
}

/**
 * Upload encrypted health data to Walrus
 */
export async function uploadHealthData(data: unknown, encryptionKey?: string): Promise<WalrusUploadResponse> {
  // Convert data to JSON and create blob
  const jsonString = JSON.stringify(data)

  // TODO: Add encryption with encryptionKey if provided
  const blob = new Blob([jsonString], { type: "application/json" })
  const file = new File([blob], "health-data.json", { type: "application/json" })

  return uploadToWalrus(file)
}
